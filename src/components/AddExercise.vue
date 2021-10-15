<template>
  <div class="card card-default">
    <div class="card-header">Übung hinzufügen</div>
    <div class="card-body p-4">
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
              <input type="radio" class="btn-check" name="difficulty" id="easy" autocomplete="off" @change="difficulty = 'easy'" />
              <label class="btn btn-outline-primary" for="easy">Leicht</label>

              <input type="radio" class="btn-check" name="difficulty" id="medium" autocomplete="off" @change="difficulty = 'medium'" />
              <label class="btn btn-outline-primary" for="medium">Mittel</label>

              <input type="radio" class="btn-check" name="difficulty" id="hard" autocomplete="off" @change="difficulty = 'hard'" />
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
            <!-- .filter(e => e.primaryMuscles.includes(this.selectedMuscle)); -->
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
            <!--musclesOptions.map(({ id, name }) => ({ value: id, label: musclesOptions.filter(s => !primaryMuscles.includes(s.name)) }))  -->
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
        <button class="btn btn-primary col-3" type="submit" v-if="!addingExercise">Übung hinzufügen</button>
        <span v-else class="spinner-border spinner-border-sm text-primary"></span>
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
import { addExercise, MUSCLE_OPTIONS, getExercises, addEquipment, getEquipment, delEquipment } from '@/API';
import type { Equipment } from '@/types';
import Multiselect from '@vueform/multiselect';

export default defineComponent({
  components: { Multiselect },
  mounted() {
    this.loadEquipment();
  },
  data() {
    return {
      value: null,
      error: '',
      addingExercise: false,
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
    };
  },
  methods: {
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
      //delete local equipment
      this.equipments = this.equipments.filter(e => e.id != id);
      //overwrite firebase
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
      if (this.videoURL.includes('youtube')) {
        let videoID = this.videoURL.split('v=')[1].slice(0, 11);
        videoURL = `https://www.youtube.com/embed/${videoID}`;
        img = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      } else if (this.videoURL.includes('youtu.be/')) {
        let videoID = this.videoURL.split('youtu.be/')[1].slice(0, 11);
        videoURL = `https://www.youtube.com/embed/${videoID}`;
        img = `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      } else {
        this.error = 'wrong URL type';
        return; //not supported
      }

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
        this.addingExercise = true;
        addExercise(newExercise);
      } catch (e) {
        console.error('Error adding document: ', e);
        this.error = "couldn't add exercise";
      } finally {
        this.addingExercise = false;
      }
    },
    test() {
      console.log('test');
    },
  },
  computed: {
    img(): string | null {
      if (this.videoURL.includes('youtube')) {
        let videoID = this.videoURL.split('v=')[1].slice(0, 11);
        return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      } else if (this.videoURL.includes('youtu.be/')) {
        let videoID = this.videoURL.split('youtu.be/')[1].slice(0, 11);
        return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
      }
      return null;
    },
  },
});
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
