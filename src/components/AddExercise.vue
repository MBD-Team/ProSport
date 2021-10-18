<template>
  <div class="card card-default">
    <div class="card-header">
      <button class="btn btn-primary" @click="add()">Übung hinzufügen</button>
      <button class="btn btn-primary" @click="edit()">Übung editieren</button>
      <Multiselect
        @select="change()"
        v-if="form == 'edit'"
        v-model="selectedExercise"
        :options="exercises.map(({ id, name }) => ({ value: id, label: name }))"
        :closeOnSelect="true"
        :searchable="true"
        noResultsText="Keine Übungen vorhanden"
      />
    </div>
    <div class="card-body p-4" v-if="form == 'add' || (form == 'edit' && selectedExercise)">
      <form @submit.prevent="addExe()" autocomplete="off">
        <div class="m-4 alert alert-danger text-center" v-if="error">{{ error }}</div>
        <div class="mb-4 row">
          <label class="col-4" for="name">Name der Übung:</label>
          <div class="col-8">
            <input class="form-control" type="text" placeholder="" v-model="name" autocomplete="off" required />
          </div>
        </div>
        <div class="mb-4 row">
          <label class="col-4" for="description">Beschreibung:</label>
          <div class="col-8">
            <textarea class="form-control" placeholder="" v-model="description" autocomplete="off" required />
          </div>
        </div>
        <div class="mb-4 row">
          <label class="col-4" for="hints">Hinweise:</label>
          <div class="col-8">
            <textarea class="form-control" placeholder="" v-model="hints" autocomplete="off" required />
          </div>
        </div>
        <div class="mb-4 row">
          <label class="col-4" for="videoURL">YoutubeURL:</label>
          <div class="col-8">
            <input minlength="3" class="form-control" type="text" placeholder="" v-model="videoURL" autocomplete="off" required />
          </div>
        </div>
        <div class="mb-4" v-if="img"><img :src="img" style="width: 180px; height: 100px" /></div>
        <div class="alert alert-danger" v-if="videoURL && !img">Das ist kein Youtube link</div>
        <div class="mb-4 row">
          <label class="col-4" for="difficulty">Schwierigkeitsgrad:</label>
          <div class="col-8">
            <div class="btn-group">
              <input
                type="radio"
                class="btn-check"
                name="difficulty"
                id="easy"
                autocomplete="off"
                @change="difficulty = 'easy'"
                :checked="difficulty == 'easy'"
              />
              <label class="btn btn-outline-primary" for="easy">Leicht</label>
              <input
                type="radio"
                class="btn-check"
                name="difficulty"
                id="medium"
                autocomplete="off"
                @change="difficulty = 'medium'"
                :checked="difficulty == 'medium'"
              />
              <label class="btn btn-outline-primary" for="medium">Mittel</label>
              <input
                type="radio"
                class="btn-check"
                name="difficulty"
                id="hard"
                autocomplete="off"
                @change="difficulty = 'hard'"
                :checked="difficulty == 'hard'"
              />
              <label class="btn btn-outline-primary" for="hard">Schwer</label>
            </div>
          </div>
        </div>
        <div class="mb-4 row">
          <label class="col-4" for="muscles">Hauptmuskel:</label>
          <div class="col-8">
            <Multiselect
              v-model="primaryMuscles"
              :options="muscleOptions.filter(m => !this.secondaryMuscles.includes(m.value)).map(({ value, name }) => ({ value: value, label: name }))"
              mode="tags"
              :closeOnSelect="false"
              :searchable="true"
              noResultsText="no muscles found"
            />
          </div>
        </div>
        <div class="mb-4 row">
          <label class="col-4" for="muscles">Hilfsmuskel:</label>
          <div class="col-8">
            <Multiselect
              v-model="secondaryMuscles"
              :options="muscleOptions.filter(m => !this.primaryMuscles.includes(m.value)).map(({ value, name }) => ({ value: value, label: name }))"
              mode="tags"
              :closeOnSelect="false"
              :searchable="true"
              noResultsText="no muscles found"
            />
          </div>
        </div>
        <div class="mb-4 row">
          <label class="col-4" for="muscles">Trainigsgerät:</label>
          <div class="col-8">
            <Multiselect
              v-model="trainingDevices"
              :options="equipments.map(({ id, name }) => ({ value: id, label: name }))"
              mode="tags"
              :closeOnSelect="false"
              :searchable="true"
              noResultsText="keine Geräte vorhanden"
            />
          </div>
        </div>
        <button class="btn btn-primary col-3" type="submit" v-if="!loading && form == 'add'">Übung hinzufügen</button>
        <button class="btn btn-primary col-3" type="submit" v-if="!loading && form == 'edit'">Übung ändern</button>
        <span v-if="loading" class="spinner-border spinner-border-sm text-primary"></span>
        <button class="btn btn-primary ms-2 col-3" type="button" @click="showExercises()">Übungen anzeigen</button>
      </form>
    </div>
  </div>
  <div class="card card-default mt-4">
    <div class="card-header">Trainingsgerät hinzufügen</div>
    <div class="card-body">
      <form class="mb-4 row" @submit.prevent="addEquipment()">
        <label class="col-4" for="device">Name des Gerätes:</label>
        <div class="col-8">
          <input class="form-control" type="text" placeholder="" v-model="equipment" autocomplete="off" required />
        </div>
        <button class="btn btn-primary ms-2 col-3" type="submit">hinzufügen</button>
      </form>
      <ul class="list-group" v-for="e in equipments" :key="e.id">
        <li class="list-group-item">
          {{ e.name }}
          <div @click="deleteEquipment(e.id)"><i class="fas fa-trash-alt" style="float: right"></i></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { addExercise, MUSCLE_OPTIONS, getExercises, addEquipment, getEquipment, delEquipment, updateExercise } from '@/API';
import type { Equipment, Exercise } from '@/types';
import Multiselect from '@vueform/multiselect';

export default defineComponent({
  components: { Multiselect },
  watch: { $route: 'getExercises' },
  mounted() {
    this.loadEquipment();
    this.getExercises();
  },
  data() {
    return {
      selectedExercise: '',
      form: '',
      value: null,
      error: '',
      loading: false,
      name: '',
      description: '',
      hints: '',
      videoURL: '',
      difficulty: '',
      muscles: [],
      trainingDevices: [] as Equipment[],
      muscleOptions: MUSCLE_OPTIONS,
      primaryMuscles: [] as string[],
      secondaryMuscles: [] as string[],
      equipment: '',
      equipments: [] as Equipment[],
      exercises: [] as Exercise[],
    };
  },
  methods: {
    change() {
      let chosenExercise = this.exercises.find(e => e.id == this.selectedExercise);
      if (!chosenExercise) return;
      this.name = chosenExercise.name;
      this.description = chosenExercise.description;
      this.hints = chosenExercise.hints;
      this.videoURL = chosenExercise.videoURL;
      this.difficulty = chosenExercise.difficulty;
      this.primaryMuscles = chosenExercise.primaryMuscles;
      this.secondaryMuscles = chosenExercise.secondaryMuscles;
      this.trainingDevices = chosenExercise.trainingDevices;
    },
    add() {
      if (this.form == 'add') return;
      this.name = '';
      this.description = '';
      this.hints = '';
      this.videoURL = '';
      this.difficulty = '';
      this.primaryMuscles = [];
      this.secondaryMuscles = [];
      this.trainingDevices = [];
      this.selectedExercise = '';
      this.form = 'add';
    },
    edit() {
      this.form = 'edit';
    },
    async getExercises() {
      try {
        this.exercises = await getExercises();
      } catch (e) {
        console.log("couldn't load Exercises", e);
      }
    },
    async addEquipment() {
      if (!this.equipment) return;
      let newEquipment = await addEquipment(this.equipment);
      this.equipments.push(newEquipment);
      this.equipment = '';
    },
    async loadEquipment() {
      this.equipments = await getEquipment();
    },
    deleteEquipment(id: string) {
      this.equipments = this.equipments.filter(e => e.id != id);
      delEquipment(id);
    },
    async showExercises() {
      let res = await getExercises();
      console.log(res);
    },
    addExe() {
      if (!this.difficulty) return (this.error = 'no difficulty chosen');
      if (!this.primaryMuscles) return (this.error = 'no primary muscle chosen');

      let videoURL;
      let img;
      if (this.videoURL.includes('youtube.com/watch?v=')) {
        let videoID = this.videoURL.split('v=')[1].slice(0, 11);
        videoURL = `https://www.youtube.com/embed/${videoID}`;
        img = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      } else if (this.videoURL.includes('youtu.be/')) {
        let videoID = this.videoURL.split('youtu.be/')[1].slice(0, 11);
        videoURL = `https://www.youtube.com/embed/${videoID}`;
        img = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      } else if (this.videoURL.includes('youtube.com/embed/')) {
        let videoID = this.videoURL.split('embed/')[1].slice(0, 11);
        videoURL = `https://www.youtube.com/embed/${videoID}`;
        img = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      } else {
        this.error = 'wrong URL type';
        return; //not supported
      }
      if (this.form == 'edit') {
        let newExercise = {
          name: this.name,
          description: this.description,
          hints: this.hints,
          videoURL,
          img,
          difficulty: this.difficulty,
          trainingDevices: this.trainingDevices,
          primaryMuscles: this.primaryMuscles,
          secondaryMuscles: this.secondaryMuscles,
        };
        try {
          this.loading = true;
          updateExercise(newExercise, this.selectedExercise);
        } catch (e) {
          console.error('Error adding document: ', e);
          this.error = 'Übung konnte nicht geändert werden';
        } finally {
          this.loading = false;
        }
      }
      if (this.form == 'add') {
        let newExercise = {
          name: this.name,
          description: this.description,
          hints: this.hints,
          videoURL,
          img,
          difficulty: this.difficulty,
          trainingDevices: this.trainingDevices,
          primaryMuscles: this.primaryMuscles,
          secondaryMuscles: this.secondaryMuscles,
        };
        try {
          this.loading = true;
          addExercise(newExercise);
        } catch (e) {
          console.error('Error adding document: ', e);
          this.error = 'Übung konnte nicht hinzugefügt werden';
        } finally {
          this.loading = false;
        }
      }
      this.name = '';
      this.description = '';
      this.hints = '';
      this.videoURL = '';
      this.difficulty = '';
      this.primaryMuscles = [];
      this.secondaryMuscles = [];
      this.trainingDevices = [];
      this.selectedExercise = '';
      this.getExercises();
    },
  },
  computed: {
    img(): string | null {
      if (this.videoURL.includes('youtube.com/watch')) {
        let videoID = this.videoURL.split('?v=')[1].slice(0, 11);
        return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      } else if (this.videoURL.includes('youtu.be/')) {
        let videoID = this.videoURL.split('youtu.be/')[1].slice(0, 11);
        return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      } else if (this.videoURL.includes('youtube.com/embed/')) {
        let videoID = this.videoURL.split('embed/')[1].slice(0, 11);
        return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      }
      return null;
    },
  },
});
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
