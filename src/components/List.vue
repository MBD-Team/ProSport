<template>
  <div :class="direction" id="list" :style="{ width: listWidth }">
    <!-- difficulty -->
    <div class="input-group">
      <label class="input-group-text w-25" style="margin: 3px 0px 3px 3px; height: 6vh; font-size: 1.3rem" for="inputGroupSelect01">
        Schwierigkeit
      </label>
      <select
        class="form-select"
        id="inputGroupSelect01"
        style="margin: 3px 3px 3px 0px; height: 6vh; font-size: 1.3rem"
        v-model.number="selectedDifficulty"
      >
        <option value="1">Leicht</option>
        <option value="2">Mittel</option>
        <option value="3">Schwer</option>
      </select>
    </div>
    <!-- primary muscle -->
    <div class="input-group">
      <label class="input-group-text w-25" style="margin: 3px 0px 3px 3px; height: 6vh; font-size: 1.3rem" for="inputGroupSelect01">
        Hauptmuskel
      </label>
      <select
        v-if="filterPrimary.length > 1"
        class="form-select"
        id="inputGroupSelect01"
        style="margin: 3px 3px 3px 0px; height: 6vh; font-size: 1.3rem"
        v-model="selectedPrimaryMuscle"
        @change="selectedSecondaryMuscle = ''"
      >
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
      <select v-else class="form-select" id="inputGroupSelect01" style="margin: 3px 3px 3px 0px; font-size: 1.3rem">
        <option v-for="muscle in filterPrimary" :key="muscle.value" :value="muscle.value">
          {{ muscle.name }}
        </option>
      </select>
    </div>
    <!-- secondary muscle -->
    <div class="input-group">
      <label class="input-group-text w-25" style="margin: 3px 0px 3px 3px; height: 6vh; font-size: 1.3rem" for="inputGroupSelect01">
        Hilfsmuskel
      </label>
      <select
        v-if="filterSecondary.length > 1"
        class="form-select"
        id="inputGroupSelect01"
        style="margin: 3px 3px 3px 0px; height: 6vh; font-size: 1.3rem"
        v-model="selectedSecondaryMuscle"
      >
        <option value="">Alle</option>
        <option v-for="muscle in filterSecondary" :key="muscle.value" :value="muscle.value">
          {{ muscle.name }}
        </option>
      </select>
      <select v-else class="form-select" id="inputGroupSelect01" style="margin: 3px 3px 3px 0px; font-size: 1.3rem">
        <option v-for="muscle in filterSecondary" :key="muscle.value" :value="muscle.value">
          {{ muscle.name }}
        </option>
      </select>
    </div>
    <!-- exercise -->
    <div :class="selectedMuscle" id="task" v-for="exercise in filterex" v-bind:key="exercise.id" @click="openExerciseDetail(exercise)">
      <img :src="exercise.img" style="margin: 10px; width: 180px; height: 100px" />
      <span v-if="!collapsed">
        <b style="font-size: 35px">{{ exercise.name }}</b>
      </span>
      <text v-if="exercise.difficulty == 'easy'" style="color: #2da64f">Leicht</text>
      <text v-else-if="exercise.difficulty == 'medium'" style="color: #cfc22d">Mittel</text>
      <text v-else style="color: #ed4e4e">Schwer</text>
      <text>
        <svg
          @click.stop="openTrainingsPlanAddModal(exercise)"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </text>
    </div>
  </div>
  <!--new modal-->
  <div class="modal" id="trainingsPlanAddModal" tabindex="-1" aria-labelledby="trainingsPlanAddModalLable" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="trainingsPlanAddModalLable">An welchen Tag möchtest du die Übung durchführen?</h5>
          <button type="button" @click="closeTrainingsPlanAddModal()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <TrainingPlanContent />
        </div>
        <div class="modal-footer d-flex justify-content: flex-start">
          <div class="container">
            <button
              type="button"
              @click="addExerciseToTrainingPlan('monday')"
              class="btn btn-secondary rounded-start"
              style="width: 14.2%; padding: 6px 8px 6px 0px"
              data-bs-dismiss="modal"
            >
              Montag
            </button>
            <button
              type="button"
              @click="addExerciseToTrainingPlan('tuesday')"
              class="btn btn-secondary"
              style="width: 14.2%; padding: 6px 8px 6px 0px"
              data-bs-dismiss="modal"
            >
              Dienstag
            </button>
            <button
              type="button"
              @click="addExerciseToTrainingPlan('wednesday')"
              class="btn btn-secondary"
              style="width: 14.2%; padding: 6px 8px 6px 0px"
              data-bs-dismiss="modal"
            >
              Mittwoch
            </button>
            <button
              type="button"
              @click="addExerciseToTrainingPlan('thursday')"
              class="btn btn-secondary"
              style="width: 14.2%; padding: 6px 8px 6px 0px"
              data-bs-dismiss="modal"
            >
              Donnerstag
            </button>
            <button
              type="button"
              @click="addExerciseToTrainingPlan('friday')"
              class="btn btn-secondary"
              style="width: 14.2%; padding: 6px 8px 6px 0px"
              data-bs-dismiss="modal"
            >
              Freitag
            </button>
            <button
              type="button"
              @click="addExerciseToTrainingPlan('saturday')"
              class="btn btn-secondary"
              style="width: 14.2%; padding: 6px 8px 6px 0px"
              data-bs-dismiss="modal"
            >
              Samstag
            </button>
            <button
              type="button"
              @click="addExerciseToTrainingPlan('sunday')"
              class="btn btn-secondary"
              style="width: 14.2%; padding: 6px 8px 6px 0px"
              data-bs-dismiss="modal"
            >
              Sonntag
            </button>
          </div>
          <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { collapsed, listWidth, selectedMuscle, selectedExercise, selectedSecondaryMuscle, selectedPrimaryMuscle } from '@/components/state';
import { Equipment, Exercise, Muscle, MUSCLE_OPTIONS, TrainingsPlan } from '@/types';
import TrainingPlanContent from '@/components/TrainingPlanContent.vue';
import * as API from '@/API';

export default defineComponent({
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { collapsed, listWidth, selectedExercise, selectedMuscle, selectedPrimaryMuscle, selectedSecondaryMuscle, MUSCLE_OPTIONS };
  },
  components: { TrainingPlanContent },
  data() {
    return {
      trainingPlan: {
        monday: [] as Exercise[],
        tuesday: [] as Exercise[],
        wednesday: [] as Exercise[],
        thursday: [] as Exercise[],
        friday: [] as Exercise[],
        saturday: [] as Exercise[],
        sunday: [] as Exercise[],
      } as TrainingsPlan,
      exercises: [] as Exercise[],
      equipments: [] as Equipment[],
      selectedDifficulty: 1,
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
        console.log("couldn't load Exercises", e);
      }
    },
    openExerciseDetail(exercise: Exercise) {
      this.$router.push({ name: 'ExerciseDetail', params: { data: JSON.stringify(exercise) } });
    },
    openTrainingsPlanAddModal(exercise: Exercise) {
      try {
        let result = API.getTrainingPlans();
        if (result) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          this.trainingPlan = result.then(res => {
            this.trainingPlan = {
              monday: { ...Object.values(res as TrainingsPlan) }[0].monday,
              tuesday: { ...Object.values(res as TrainingsPlan) }[0].tuesday,
              wednesday: { ...Object.values(res as TrainingsPlan) }[0].wednesday,
              thursday: { ...Object.values(res as TrainingsPlan) }[0].thursday,
              friday: { ...Object.values(res as TrainingsPlan) }[0].friday,
              saturday: { ...Object.values(res as TrainingsPlan) }[0].saturday,
              sunday: { ...Object.values(res as TrainingsPlan) }[0].sunday,
            };
          });
        }
        this.selectedExercise = exercise;
        let modal = document.getElementById('trainingsPlanAddModal');
        if (modal) modal.style.display = 'block';
      } catch (e) {
        console.error({ '': e });
      }
    },
    closeTrainingsPlanAddModal() {
      let modal = document.getElementById('trainingsPlanAddModal');
      if (modal) modal.style.display = 'none';
    },
    addExerciseToTrainingPlan(day: string) {
      switch (day) {
        case 'monday':
          this.trainingPlan.monday.push(this.selectedExercise);
          break;
        case 'tuesday':
          this.trainingPlan.tuesday.push(this.selectedExercise);
          break;
        case 'wednesday':
          this.trainingPlan.wednesday.push(this.selectedExercise);
          break;
        case 'thursday':
          this.trainingPlan.thursday.push(this.selectedExercise);
          break;
        case 'friday':
          this.trainingPlan.friday.push(this.selectedExercise);
          break;
        case 'saturday':
          this.trainingPlan.saturday.push(this.selectedExercise);
          break;
        case 'sunday':
          this.trainingPlan.sunday.push(this.selectedExercise);
          break;
      }
      try {
        API.addTrainingsPlan(this.trainingPlan);
      } catch (e) {
        console.error({ "couldn't add TrainingsPlan": e });
      }
      this.closeTrainingsPlanAddModal();
    },
  },
  computed: {
    filterex(): Exercise[] {
      let selectedDifficulty = this.selectedDifficulty;
      let selectedSecondaryMuscle = this.selectedSecondaryMuscle;
      let selectedPrimaryMuscle = this.selectedPrimaryMuscle;
      return this.exercises
        .filter(e => e.grossMuscles.includes(this.selectedMuscle))
        .filter(e => e.trainingDevices.every(t => this.equipments.find(e => e.id == t) && !this.equipments.find(e => e.id == t)?.disabled))
        .sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
        .sort(function (a, b) {
          let map = {
            easy: 1,
            medium: 2,
            hard: 3,
          };
          if (selectedDifficulty == 2) map.medium = 0;
          if (selectedDifficulty == 3) map.hard = 0;
          return map[a.difficulty] - map[b.difficulty];
        })
        .filter(e => e.secondaryMuscles.find(m => m == selectedSecondaryMuscle || !selectedSecondaryMuscle))
        .filter(e => e.primaryMuscles.find(m => m == selectedPrimaryMuscle || !selectedPrimaryMuscle));
    },
    filterSecondary(): Muscle[] {
      let selectedPrimaryMuscle = this.selectedPrimaryMuscle;
      return MUSCLE_OPTIONS.filter(m =>
        this.exercises
          .filter(e => e.grossMuscles.includes(this.selectedMuscle))
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
  margin: 5px;
  text-shadow: 1px 1px 0px black;
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
</style>
