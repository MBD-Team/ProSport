<template>
  <div class="card card-default" style="border: none">
    <div class="card-header header p-4" :class="{ rounded: !form }" style="border: 1px solid black">
      <button class="btn addBtn col-4 col-sm-3 shadow-none" @click="add()">Übung hinzufügen</button>
      <button class="btn editBtn ms-2 col-4 col-sm-3 shadow-none" @click="edit()">Übung bearbeiten</button>
    </div>

    <div
      class="card-body p-4"
      v-show="form == 'edit'"
      style="border: 1px solid black; border-top: none; border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)"
    >
      <div class="multiselect-contain">
        <Multiselect
          @select="change()"
          :class="{ dirty: selectedExercise }"
          v-show="form == 'edit'"
          v-model="selectedExercise"
          :options="exercises.map(({ id, name }) => ({ value: id, label: name }))"
          :closeOnSelect="true"
          :searchable="true"
          id="fname"
          noResultsText="Keine Übungen vorhanden"
        />
        <label class="placeholder-text" for="fname" id="placeholder-fname">
          <div class="text">Wähle eine Übung</div>
        </label>
      </div>
    </div>

    <div
      class="card-body p-4"
      v-show="form == 'add' || (form == 'edit' && selectedExercise)"
      style="border: 1px solid black; border-top: none; border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)"
    >
      <form @submit.prevent="addExercise()" autocomplete="off">
        <div class="my-4 alert alert-danger text-center" v-if="error">{{ error }}</div>

        <div class="input-contain mb-4">
          <input
            type="text"
            id="fname"
            name="fname"
            autocomplete="off"
            aria-labelledby="placeholder-fname"
            v-model="name"
            :class="{ dirty: name }"
            required
          />
          <label class="placeholder-text" for="fname" id="placeholder-fname">
            <div class="text">Name der Übung</div>
          </label>
        </div>

        <div class="textarea-contain mb-4">
          <textarea
            type="text"
            id="fname"
            name="fname"
            autocomplete="off"
            aria-labelledby="placeholder-fname"
            v-model="description"
            :class="{ dirty: description }"
            required
          />
          <label class="placeholder-text" for="fname" id="placeholder-fname">
            <div class="text">Beschreibung</div>
          </label>
        </div>

        <div class="textarea-contain mb-4">
          <textarea
            type="text"
            id="fname"
            name="fname"
            autocomplete="off"
            aria-labelledby="placeholder-fname"
            v-model="hints"
            :class="{ dirty: hints }"
            required
          />
          <label class="placeholder-text" for="fname" id="placeholder-fname">
            <div class="text">Hinweise</div>
          </label>
        </div>
        <div class="input-contain mb-4">
          <input
            type="text"
            id="fname"
            name="fname"
            autocomplete="off"
            aria-labelledby="placeholder-fname"
            v-model="videoURL"
            :class="{ dirty: videoURL }"
            required
          />
          <label class="placeholder-text" for="fname" id="placeholder-fname">
            <div class="text">YoutubeURL</div>
          </label>
        </div>
        <div class="mb-4" v-if="img"><img :src="img" style="width: 180px; height: 100px" /></div>
        <div class="alert alert-danger" v-if="videoURL && !img">Das ist kein Youtube link</div>

        <div class="mb-4 input-group">
          <div class="btn-group col-12 m-0" style="height: 3.5rem">
            <input
              type="radio"
              class="btn-check"
              name="difficulty"
              id="easy"
              autocomplete="off"
              @change="difficulty = 'easy'"
              :checked="difficulty == 'easy'"
            />
            <label class="btn btn-outline-success shadow-none" for="easy" style="border-radius: 1rem 0 0 1rem; border: solid var(--bs-success) 2px">
              Leicht
            </label>
            <input
              type="radio"
              class="btn-check"
              name="difficulty"
              id="medium"
              autocomplete="off"
              @change="difficulty = 'medium'"
              :checked="difficulty == 'medium'"
            />
            <label class="btn btn-outline-warning shadow-none" for="medium" style="border: solid var(--bs-warning) 2px">Mittel</label>
            <input
              type="radio"
              class="btn-check"
              name="difficulty"
              id="hard"
              autocomplete="off"
              @change="difficulty = 'hard'"
              :checked="difficulty == 'hard'"
            />
            <label class="btn btn-outline-danger shadow-none" for="hard" style="border-radius: 0 1rem 1rem 0; border: solid var(--bs-danger) 2px">
              Schwer
            </label>
          </div>
        </div>

        <div class="multiselect-contain mb-4">
          <Multiselect
            v-model="primaryMuscles"
            :class="{ dirty: primaryMuscles.length > 0 }"
            :options="muscleOptions.filter(m => !secondaryMuscles.includes(m.value)).map(({ value, name }) => ({ value: value, label: name }))"
            mode="tags"
            :closeOnSelect="false"
            :searchable="true"
            noResultsText="no muscles found"
            id="fname"
          />
          <label class="placeholder-text" for="fname" id="placeholder-fname">
            <div class="text">Hauptmuskel</div>
          </label>
        </div>

        <div class="multiselect-contain mb-4">
          <Multiselect
            v-model="secondaryMuscles"
            :class="{ dirty: secondaryMuscles.length > 0 }"
            :options="muscleOptions.filter(m => !primaryMuscles.includes(m.value)).map(({ value, name }) => ({ value: value, label: name }))"
            mode="tags"
            :closeOnSelect="false"
            :searchable="true"
            noResultsText="no muscles found"
            id="fname"
          />
          <label class="placeholder-text" for="fname" id="placeholder-fname">
            <div class="text">Hilfsmuskel</div>
          </label>
        </div>
        <div class="multiselect-contain mb-4">
          <Multiselect
            v-model="trainingDevices"
            :class="{ dirty: this.trainingDevices.length > 0 }"
            :options="equipments.map(({ id, name }) => ({ value: id, label: name }))"
            mode="tags"
            :closeOnSelect="false"
            :searchable="true"
            noResultsText="keine Geräte vorhanden"
            id="fname"
          />
          <label class="placeholder-text" for="fname" id="placeholder-fname">
            <div class="text">Trainigsgerät</div>
          </label>
        </div>

        <button class="btn exBtn col-4 col-sm-3" type="submit" v-if="!loading">
          <!-- <i class="fas fa-plus"></i> -->
          Übung {{ form == 'add' ? 'hinzufügen' : 'ändern' }}
        </button>
        <span v-if="loading" class="spinner-border spinner-border-sm text-primary cursorDefault"></span>
        <button class="btn editBtn ms-2 col-4 col-sm-3 shadow-none" type="button" @click="listExercises()">Übungen anzeigen</button>
      </form>
    </div>
  </div>
  <div class="card card-default mt-4" style="border: none" v-if="list">
    <div class="card-header header" style="border: 1px solid black">Übungen :</div>
    <div class="card-body" style="border: 1px solid black; border-top: none; border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th class="w-25 p-0 p-md-2">Name der Übung</th>
            <th class="w-25 p-0 p-md-2">Schwierig&shy;keitsgrad</th>
            <th class="w-50 p-0 p-md-2">Benötigte Geräte</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="enabled">
            <tr>Aktive Übungen</tr>
            <tr v-for="exercise in enabled" :key="exercise.id">
              <td class="p-0 p-md-2">
                {{ exercise.name }}
              </td>
              <td class="p-0 p-md-2">{{ exercise.difficulty }}</td>
              <td class="p-0 p-md-2">
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
              <td>{{ exercise.difficulty }}</td>
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
  <div class="card card-default mt-4" style="border: none">
    <div class="card-header header" style="border: 1px solid black">Trainingsgerät hinzufügen</div>
    <div class="card-body p-4" style="border: 1px solid black; border-top: none; border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)">
      <form class="mb-4" @submit.prevent="addEquipment()">
        <div class="input-contain mb-4">
          <input type="text" id="fname" name="fname" autocomplete="off" aria-labelledby="placeholder-fname" v-model="equipment" required />
          <label class="placeholder-text" for="fname" id="placeholder-fname">
            <div class="text">Name des Gerätes</div>
          </label>
        </div>

        <button class="btn addBtn col-4 col-sm-3" type="submit">Gerät hinzufügen</button>
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
              <div @click="disableEquipment(e.id, true)"><i class="fas fa-ban pointer" style="float: right"></i></div>
            </td>
            <td>
              <div @click="deleteEquipment(e.id)"><i class="fas fa-trash-alt pointer" style="float: right"></i></div>
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
              <div @click="disableEquipment(e.id, false)"><i class="fas fa-check-circle pointer" style="float: right"></i></div>
            </td>
            <td>
              <div @click="deleteEquipment(e.id)"><i class="fas fa-trash-alt pointer" style="float: right"></i></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, InputHTMLAttributes, ref, watchEffect } from 'vue';
import * as API from '@/API';

import { Equipment, Exercise, MUSCLE_OPTIONS } from '@/types';
import Multiselect from '@vueform/multiselect';

export default defineComponent({
  components: { Multiselect },
  watch: { $route: 'getExercises' },

  mounted() {
    this.getEquipment();
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
      difficulty: '' as 'easy' | 'medium' | 'hard',
      muscles: [],
      trainingDevices: [] as string[],
      muscleOptions: MUSCLE_OPTIONS,
      primaryMuscles: [] as string[],
      grossMuscles: [] as string[],
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
      this.errorReset();
      try {
        this.exercises = await API.getExercises();
      } catch (e) {
        this.error = 'Übungen konnten nicht geladen werden';
        console.error({ "couldn't load Exercises": e });
      }
    },
    async addEquipment() {
      if (!this.equipment) return;
      this.errorReset();
      try {
        let newEquipment = await API.addEquipment(this.equipment);
        this.equipments.push(newEquipment);
        this.equipment = '';
      } catch (e) {
        this.equipmentError = 'Geräte konnten nicht gespeichert werden';
        console.error({ "couldn't add Equipment": e });
      }
    },
    async getEquipment() {
      this.errorReset();
      try {
        this.equipments = await API.getEquipment();
      } catch (e) {
        this.equipmentError = 'Geräte konnten nicht geladen werden';
        console.error({ "couldn't load Equipment": e });
      }
    },
    deleteEquipment(id: string) {
      let usage = this.exercises.filter(e => e.trainingDevices.find(t => t == id)).length;
      let display =
        usage == 1
          ? 'Übung benutzt dieses Gerät, sicher das du es entfernen möchtest ?'
          : 'Übungen benutzen dieses Gerät, sicher das du sie entfernen möchtest ?';
      if (!usage) {
        this.equipments = this.equipments.filter(e => e.id != id);
        this.errorReset();
        try {
          API.deleteEquipment(id);
        } catch (e) {
          this.equipmentError = 'Gerät konnte nicht gelöscht werden';
          console.error({ "couldn't delete Equipment": e });
        }
      }
      if (usage && window.confirm(`${usage} ${display}`)) {
        this.exercises
          .filter(e => e.trainingDevices.find(t => t == id))
          .forEach(async e => {
            this.errorReset();
            try {
              await API.deleteExercise(e.id);
            } catch (error) {
              this.error = 'Übung konnte nicht gelöscht werden';
              console.error({ "couldn't delete Exercise with name : error": e.name + ':', error });
            }
          });
        this.equipments = this.equipments.filter(e => e.id != id);
        this.errorReset();
        try {
          API.deleteEquipment(id);
        } catch (e) {
          this.equipmentError = 'Gerät konnte nicht gelöscht werden';
          console.error({ "couldn't delete Equipment with id : error": id + ':', e });
        }
        this.exercises = this.exercises.filter(e => e.trainingDevices.find(t => t !== id));
      }
    },
    async listExercises() {
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
      this.errorReset();
      try {
        await API.updateEquipment(changed);
      } catch (e) {
        this.equipmentError = 'Gerät konnte nicht deaktiviert werden';
        console.error({ "couldn't disable Equipment": e });
      }
      this.errorReset();
      try {
        this.equipments = await API.getEquipment();
      } catch (e) {
        this.equipmentError = 'Geräte konnten nicht geladen werden';
        console.error({ "couldn't load Equipments": e });
      }
    },
    addExercise() {
      if (!this.difficulty) return (this.error = 'kein Schwierigkeitsgrad ausgewählt');
      if (!this.primaryMuscles) return (this.error = 'kein Hauptmuskel ausgewählt');

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
        this.error = 'falsche URL, bitte youtube link verwenden';
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
      this.errorReset();
      try {
        this.loading = true;
        if (this.form == 'edit') {
          API.updateExercise(newExercise, this.selectedExercise);
        }
        if (this.form == 'add') {
          API.addExercise(newExercise);
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
      this.equipmentError = '';
      this.name = '';
      this.description = '';
      this.hints = '';
      this.videoURL = '';
      this.difficulty = 'medium';
      this.primaryMuscles = [];
      this.secondaryMuscles = [];
      this.trainingDevices = [];
      this.selectedExercise = '';
    },
    errorReset() {
      this.error = '';
      this.equipmentError = '';
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
      return this.exercises
        .filter(e => e.trainingDevices.every(t => this.equipments.find(e => e.id == t) && !this.equipments.find(e => e.id == t)?.disabled))
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .sort(function (a, b) {
          let map = {
            easy: 1,
            medium: 2,
            hard: 3,
          };
          return map[a.difficulty] - map[b.difficulty];
        });
    },
    disabled(): Exercise[] {
      return this.enabled.filter(e => e.trainingDevices.length > 0);
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
