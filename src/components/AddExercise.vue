<template>
  <div class="card card-default">
    <div class="card-header header p-4">
      <button class="addBtn col-3" @click="add()">Übung hinzufügen</button>
      <button class="editBtn ms-2 col-3" @click="edit()">Übung editieren</button>
    </div>
    <div class="card-body p-4" v-if="form == 'edit'">
      <div class="input-group">
        <span class="input-group-text col-3" style="background-color: #f2f2f2" v-if="form == 'edit'">Wähle eine Übung:</span>
        <div class="col-9">
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
      </div>
    </div>

    <div class="card-body p-4" v-if="form == 'add' || (form == 'edit' && selectedExercise)">
      <form @submit.prevent="addExe()" autocomplete="off">
        <div class="my-4 alert alert-danger text-center" v-if="error">{{ error }}</div>

        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">Name der Übung:</span>
          <input
            type="text"
            style="background-color: #ffffff"
            aria-label="First name"
            class="form-control col-9"
            v-model="name"
            autocomplete="off"
            required
          />
        </div>

        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">Beschreibung:</span>
          <textarea class="form-control col-9" style="background-color: #ffffff" v-model="description" autocomplete="off" required />
        </div>
        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">Hinweise:</span>
          <textarea class="form-control col-9" style="background-color: #ffffff" v-model="hints" autocomplete="off" required />
        </div>

        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">YoutubeURL:</span>
          <input
            minlength="3"
            class="form-control col-9"
            style="background-color: #ffffff"
            type="text"
            v-model="videoURL"
            autocomplete="off"
            required
          />
        </div>
        <div class="mb-4" v-if="img"><img :src="img" style="width: 180px; height: 100px" /></div>
        <div class="alert alert-danger" v-if="videoURL && !img">Das ist kein Youtube link</div>

        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">Schwierigkeitsgrad:</span>
          <div class="btn-group col-9">
            <input
              type="radio"
              class="btn-check"
              name="difficulty"
              id="easy"
              autocomplete="off"
              @change="difficulty = 'easy'"
              :checked="difficulty == 'easy'"
            />
            <label class="btn btn-outline-success" for="easy">Leicht</label>
            <input
              type="radio"
              class="btn-check"
              name="difficulty"
              id="medium"
              autocomplete="off"
              @change="difficulty = 'medium'"
              :checked="difficulty == 'medium'"
            />
            <label class="btn btn-outline-warning" for="medium">Mittel</label>
            <input
              type="radio"
              class="btn-check"
              name="difficulty"
              id="hard"
              autocomplete="off"
              @change="difficulty = 'hard'"
              :checked="difficulty == 'hard'"
            />
            <label class="btn btn-outline-danger" for="hard">Schwer</label>
          </div>
        </div>

        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">Hauptmuskel:</span>
          <div class="col-9">
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

        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">Hilfsmuskel:</span>
          <div class="col-9">
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

        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">Trainigsgerät:</span>
          <div class="col-9">
            <Multiselect
              v-model="trainingDevices"
              :options="equipments.map(({ id, name }) => ({ value: id, label: name }))"
              mode="tags"
              :closeOnSelect="false"
              :searchable="true"
              noResultsText="keine Geräte vorhanden"
              placeholder="Kein Gerät benötigt"
            />
          </div>
        </div>

        <button class="addBtn col-3" type="submit" v-if="!loading">Übung {{ form == 'add' ? 'hinzufügen' : 'ändern' }}</button>
        <span v-if="loading" class="spinner-border spinner-border-sm text-primary"></span>
        <button class="editBtn ms-2 col-3" type="button" @click="listExercises()">Übungen anzeigen</button>
      </form>
    </div>
  </div>
  <div class="card card-default mt-4" v-if="list">
    <div class="card-header header">Übungen :</div>
    <div class="card-body">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name der Übung</th>
            <th>Benötigte Geräte</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="enabled">
            <tr>Aktive Übungen</tr>
            <tr v-for="exercise in enabled" :key="exercise.id">
              <td>
                {{ exercise.name }}
              </td>
              <td>
                {{
                  equipments
                    .filter(e => exercise.trainingDevices.find(t => t == e.id))
                    .map(d => d.name)
                    .join(', ')
                }}
              </td>
            </tr>
          </template>
          <template v-if="disabled">
            <tr>Inaktive Übungen</tr>
            <tr v-for="exercise in disabled" :key="exercise.id">
              <td>
                {{ exercise.name }}
              </td>
              <td>
                {{
                  equipments
                    .filter(e => exercise.trainingDevices.find(t => t == e.id))
                    .map(d => d.name)
                    .join(', ')
                }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
  <div class="card card-default mt-4">
    <div class="card-header header">Trainingsgerät hinzufügen</div>
    <div class="card-body p-4">
      <form class="mb-4" @submit.prevent="addEquipment()">
        <div class="mb-4 input-group">
          <span class="input-group-text col-3" style="background-color: #f2f2f2">Name des Gerätes:</span>
          <input class="form-control" style="background-color: #ffffff" type="text" v-model="equipment" autocomplete="off" required />
        </div>

        <button class="addBtn col-3" type="submit">Gerät hinzufügen</button>
      </form>
      <div class="m-4 alert alert-danger text-center" v-if="equipmentError">{{ equipmentError }}</div>
      <table class="table table-striped">
        <thead>
          <tr>
            <td class="w-75">Aktive Geräte</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="e in equipments.filter(e => e.disabled == false)" :key="e.id">
            <td>{{ e.name }}</td>
            <td>
              <div @click="disableEquipment(e.id, true)"><i class="fas fa-ban" style="float: right"></i></div>
            </td>
            <td>
              <div @click="deleteEquipment(e.id)"><i class="fas fa-trash-alt" style="float: right"></i></div>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table table-striped">
        <thead>
          <tr>
            <td class="w-75">Inaktive Geräte</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="e in equipments.filter(e => e.disabled == true)" :key="e.id">
            <td>{{ e.name }}</td>
            <td>
              <div @click="disableEquipment(e.id, false)"><i class="fas fa-check-circle" style="float: right"></i></div>
            </td>
            <td>
              <div @click="deleteEquipment(e.id)"><i class="fas fa-trash-alt" style="float: right"></i></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  addExercise,
  MUSCLE_OPTIONS,
  getExercises,
  addEquipment,
  getEquipment,
  delEquipment,
  updateExercise,
  updateEquipment,
  delExercise,
} from '@/API';
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
      list: false,
      selectedExercise: '',
      form: '',
      value: null,
      error: '',
      equipmentError: '',
      loading: false,
      name: '',
      description: '',
      hints: '',
      videoURL: '',
      difficulty: '',
      muscles: [],
      trainingDevices: [] as string[],
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
      this.reset();
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
      let usage = this.exercises.filter(e => e.trainingDevices.find(t => t == id)).length;
      let display =
        usage == 1
          ? 'Übung benutzt dieses Gerät, sicher das du es entfernen möchtest ?'
          : 'Übungen benutzen dieses Gerät, sicher das du sie entfernen möchtest ?';
      if (!usage) {
        this.equipments = this.equipments.filter(e => e.id != id);
        delEquipment(id);
      }
      if (usage && window.confirm(`${usage} ${display}`)) {
        this.exercises.filter(e => e.trainingDevices.find(t => t == id)).forEach(e => delExercise(e.id));
        this.equipments = this.equipments.filter(e => e.id != id);
        delEquipment(id);
        this.exercises = this.exercises.filter(e => e.trainingDevices.find(t => t !== id));
      }
    },
    async listExercises() {
      let res = await getExercises();
      console.log(res);

      if (this.list) this.list = false;
      else this.list = true;
    },
    async disableEquipment(id: string, disable: boolean) {
      let changed = this.equipments.find(e => e.id == id);
      if (!changed) {
        this.equipmentError = 'das Gerät existiert nicht mehr';
        return;
      }
      changed.disabled = disable;
      this.equipments = await updateEquipment(changed);
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
        if (this.form == 'edit') {
          updateExercise(newExercise, this.selectedExercise);
        }
        if (this.form == 'add') {
          addExercise(newExercise);
        }
      } catch (e) {
        console.error('Error adding document: ', e);
        this.error = 'Übung konnte nicht gespeichert werden';
      } finally {
        this.loading = false;
      }

      this.reset();
      this.getExercises();
    },
    reset() {
      this.error = '';
      this.name = '';
      this.description = '';
      this.hints = '';
      this.videoURL = '';
      this.difficulty = '';
      this.primaryMuscles = [];
      this.secondaryMuscles = [];
      this.trainingDevices = [];
      this.selectedExercise = '';
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
    enabled(): Exercise[] {
      return this.exercises.filter(e =>
        e.trainingDevices.every(t => this.equipments.find(e => e.id == t) && !this.equipments.find(e => e.id == t)?.disabled)
      );
    },
    disabled(): Exercise[] {
      return this.exercises
        .filter(e => e.trainingDevices.every(t => this.equipments.find(e => e.id == t) && this.equipments.find(e => e.id == t)?.disabled))
        .filter(e => e.trainingDevices.length > 0);
    },
  },
});
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style scoped lang="scss">
button {
  border: 1px hidden rgba(32, 32, 32, 0);
  border-radius: 5px;
}
</style>
