<template>
  <div :class="direction" id="list" :style="{ width: listWidth }">
    <!-- difficulty -->
    <div class="input-group">
      <select
        class="form-select"
        id="inputGroupSelect01"
        style="margin: 3px 3px 3px 0px; height: 6vh; width: 33%; font-size: 1.3rem"
        v-model.number="selectedDifficulty"
      >
        <option value="0" disabled selected>Schwierigkeit</option>
        <option value="1">Leicht</option>
        <option value="2">Mittel</option>
        <option value="3">Schwer</option>
      </select>
      <!-- primary muscle -->
      <select
        v-if="filterPrimary.length > 1"
        class="form-select"
        id="inputGroupSelect01"
        style="margin: 3px 3px 3px 0px; height: 6vh; width: 33%; font-size: 1.3rem"
        v-model="selectedPrimaryMuscle"
        @change="selectedSecondaryMuscle = ''"
      >
        <option value="" disabled selected>Hauptmuskel</option>
        <option value="">
          {{
            MUSCLE_OPTIONS.filter(m => m.grossMuscle == selectedMuscle)
              .map(m => m.name)
              .join(', ')
          }}
        </option>
        <option v-for="muscle in filterPrimary" :key="muscle.value" :value="muscle.value">
          {{ muscle.name }}
        </option>
      </select>
      <select v-else class="form-select" id="inputGroupSelect01" style="margin: 3px 3px 3px 0px; width: 33%; font-size: 1.3rem">
        <option value="" disabled selected>Hauptmuskel</option>
        <option v-for="muscle in filterPrimary" :key="muscle.value" :value="muscle.value">
          {{ muscle.name }}
        </option>
      </select>
      <!-- secondary muscle -->
      <select
        v-if="filterSecondary.length > 1"
        class="form-select"
        id="inputGroupSelect01"
        style="margin: 3px 3px 3px 0px; height: 6vh; width: 33%; font-size: 1.3rem"
        v-model="selectedSecondaryMuscle"
      >
        <option value="" disabled selected>Hilfsmuskel</option>
        <option value="">Alle</option>
        <option v-for="muscle in filterSecondary" :key="muscle.value" :value="muscle.value">
          {{ muscle.name }}
        </option>
      </select>
      <select v-else class="form-select" id="inputGroupSelect01" style="margin: 3px 3px 3px 0px; width: 33%; font-size: 1.3rem">
        <option v-for="muscle in filterSecondary" :key="muscle.value" :value="muscle.value">
          {{ muscle.name }}
        </option>
      </select>
    </div>
    <!-- exercise -->
    <div :class="selectedMuscle" id="task" v-for="exercise in filterex" v-bind:key="exercise.id" @click="openExerciseDetail(exercise)">
      <div class="thumbnailDiv" style="border-radius: 10px 0px 0px 10px">
        <img :src="exercise.img" style="margin: 10px; width: 180px; height: 100px; float: left" />
      </div>
      <div style="width: 80%; margin: 3px">
        <span v-if="!collapsed">
          <b style="font-size: 2.5vh">{{ exercise.name }}</b>
        </span>
        <br />
        <text v-if="exercise.difficulty == 'easy'" style="margin: 2px; color: #2da64f">Leicht</text>
        <text v-else-if="exercise.difficulty == 'medium'" style="margin: 2px; color: #cfc22d">Mittel</text>
        <text v-else style="margin: 2px; color: #ed4e4e">Schwer</text>
      </div>
      <div v-if="user != null" class="d-flex" style="align-items: center; padding: 3px; border-left: solid grey 1px">
        <svg
          @click.stop="openTrainingsPlanAddModal(exercise)"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
          style="align-items: center"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </div>
    </div>
  </div>
  <!--new modal-->
  <div class="modal" id="trainingsPlanAddModal" tabindex="-1" aria-labelledby="trainingsPlanAddModalLable" aria-hidden="true">
    <div class="">
      <div class="modal-content" style="padding: 0px; width: 85vw">
        <div class="modal-header">
          <h5 class="modal-title" id="trainingsPlanAddModalLable">An welchen Tag möchtest du die Übung durchführen?</h5>
          <button type="button" @click="closeTrainingsPlanAddModal()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <TrainingPlanContent />
        </div>
        <div class="modal-footer">
          <div class="container d-flex" style="justify-content: center">
            <button
              v-for="day of [
                { name: 'Montag', value: 'monday' },
                { name: 'Dienstag', value: 'tuesday' },
                { name: 'Mittwoch', value: 'wednesday' },
                { name: 'Donnerstag', value: 'thursday' },
                { name: 'Freitag', value: 'friday' },
                { name: 'Samstag', value: 'saturday' },
                { name: 'Sonntag', value: 'sunday' },
              ]"
              :key="day.name"
              type="button"
              @click="addExerciseToTrainingPlan(day.value)"
              class="addBtn"
              style="width: 14.2%; padding: 5px; margin: 2px"
              data-bs-dismiss="modal"
            >
              {{ day.name }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { collapsed, listWidth, selectedMuscle, selectedExercise, selectedSecondaryMuscle, selectedPrimaryMuscle } from '@/components/state';
import { Equipment, Exercise, Muscle, MUSCLE_OPTIONS, TrainingsPlan, TrainingsPlanDataBase } from '@/types';
import TrainingPlanContent from '@/components/TrainingPlanContent.vue';
import * as API from '@/API';
import { currentUser } from '@/router';

export default defineComponent({
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      user: currentUser,
      collapsed,
      listWidth,
      selectedExercise,
      selectedMuscle,
      selectedPrimaryMuscle,
      selectedSecondaryMuscle,
      MUSCLE_OPTIONS,
    };
  },
  components: { TrainingPlanContent },
  data() {
    return {
      trainingsPlan: {
        monday: [] as string[],
        tuesday: [] as string[],
        wednesday: [] as string[],
        thursday: [] as string[],
        friday: [] as string[],
        saturday: [] as string[],
        sunday: [] as string[],
      } as TrainingsPlan,
      exercises: [] as Exercise[],
      equipments: [] as Equipment[],
      selectedDifficulty: 0,
    };
  },
  watch: { $route: 'loadExercises' },
  async mounted() {
    await this.loadExercises();
    this.equipments = await API.getEquipment();
  },
  methods: {
    async loadExercises() {
      try {
        this.exercises = await API.getExercises();
      } catch (e) {
        alert('Übungen konnten nicht geladen werden.');
        console.log("couldn't load Exercises", e);
      }
    },
    openExerciseDetail(exercise: Exercise) {
      this.$router.push({ name: 'ExerciseDetail', params: { data: JSON.stringify(exercise) } });
    },
    async openTrainingsPlanAddModal(exercise: Exercise) {
      try {
        let result = await API.getTrainingPlans();
        if (result?.trainingsPlan) {
          this.trainingsPlan = {
            monday: result?.trainingsPlan.monday,
            tuesday: result?.trainingsPlan.tuesday,
            wednesday: result?.trainingsPlan.wednesday,
            thursday: result?.trainingsPlan.thursday,
            friday: result?.trainingsPlan.friday,
            saturday: result?.trainingsPlan.saturday,
            sunday: result?.trainingsPlan.sunday,
          };
        }

        this.selectedExercise = exercise;
        let modal = document.getElementById('trainingsPlanAddModal');
        if (modal) modal.style.display = 'block';
      } catch (e) {
        alert('Trainingsplan konnte nicht geladen werden.');
        console.error({ '': e });
      }
    },

    closeTrainingsPlanAddModal() {
      this.selectedExercise = {} as Exercise;
      let modal = document.getElementById('trainingsPlanAddModal');
      if (modal) modal.style.display = 'none';
    },
    addExerciseToTrainingPlan(day: string) {
      this.trainingsPlan[day as keyof TrainingsPlan].push(this.selectedExercise.id);
      try {
        API.addTrainingsPlan(this.trainingsPlan);
      } catch (e) {
        alert('Trainingsplan konnte nicht gespeichert werden.');
        console.error({ "couldn't add TrainingsPlan": e });
      }
      this.closeTrainingsPlanAddModal();
    },
  },
  computed: {
    selectedMuscles(): string[] {
      return this.MUSCLE_OPTIONS.filter(m => m.grossMuscle == this.selectedMuscle).map(m => m.value);
    },
    filterex(): Exercise[] {
      return this.exercises
        .filter(e => e.primaryMuscles.some(m => this.selectedMuscles.includes(m)))
        .filter(e => e.trainingDevices.every(t => this.equipments.find(e => e.id == t) && !this.equipments.find(e => e.id == t)?.disabled))
        .filter(e => e.secondaryMuscles.find(m => m == this.selectedSecondaryMuscle) || !this.selectedSecondaryMuscle)
        .filter(e => e.primaryMuscles.find(m => m == this.selectedPrimaryMuscle) || !this.selectedPrimaryMuscle)
        .sort((a, b) => (a.name < b.name ? -1 : 1))
        .sort((a, b) => {
          let map = {
            easy: 1,
            medium: 2,
            hard: 3,
          };
          if (this.selectedDifficulty == 2) map.medium = 0;
          if (this.selectedDifficulty == 3) map.hard = 0;
          return map[a.difficulty] - map[b.difficulty];
        });
    },
    filterSecondary(): Muscle[] {
      let selectedPrimaryMuscle = this.selectedPrimaryMuscle;
      return MUSCLE_OPTIONS.filter(m =>
        this.exercises
          .filter(e => e.primaryMuscles.some(m => this.selectedMuscles.includes(m)))
          .filter(e => e.trainingDevices.every(t => this.equipments.find(e => e.id == t) && !this.equipments.find(e => e.id == t)?.disabled))
          .filter(e => e.primaryMuscles.find(m => m == selectedPrimaryMuscle || !selectedPrimaryMuscle))
          .some(e => e.secondaryMuscles.includes(m.value))
      );
    },
    filterPrimary(): Muscle[] {
      return MUSCLE_OPTIONS.filter(m => m.grossMuscle == selectedMuscle.value);
    },
  },
});
</script>

<style>
:root {
  --list-bg-color: rgba(51, 51, 51, 0.815);
  --list-item-hover: rgb(95, 95, 95);
  --list-item-active: rgb(141, 141, 141);
}
</style>

<style scoped lang="scss">
* {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#list {
  color: rgb(0, 0, 0);
  background-color: var(--list-bg-color);
  position: fixed;
  z-index: 1;
  top: 0;
  bottom: 0;
  padding: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.front {
  float: right;
  right: 0;
}
.backside {
  float: left;
  left: 0;
}
#task {
  background-color: rgba(255, 255, 255, 0.952);
  margin: 3px;
  border-radius: 10px;
  box-shadow: 0px 1px 35px 10px rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0px 1px 35px 10px rgba(0, 0, 0, 0.12) inset;
  -moz-box-shadow: 0px 1px 35px 10px rgba(0, 0, 0, 0.1) inset;
}
b {
  text-shadow: 1px 1px 0px rgb(170, 170, 170);
}
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 5px;
  border: 1px solid #888;
  width: 50vw;
}
.modal-header {
  background: linear-gradient(180deg, var(--navbarColor1) 0%, var(--navbarColor2) 88%, var(--navbarColor3) 97%);
}
.input-group {
  flex-wrap: nowrap !important;
}
</style>
