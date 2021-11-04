<template>
  <div :class="direction" id="list" :style="{ width: listWidth }">
    <!-- difficulty -->
    <div class="input-group">
      <label
        class="input-group-text w-25"
        :class="selectedMuscle"
        style="margin: 3px 0px 3px 3px; height: 6vh; font-size: 1.3rem"
        for="inputGroupSelect01"
      >
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
      <label
        class="input-group-text w-25"
        :class="selectedMuscle"
        style="margin: 3px 0px 3px 3px; height: 6vh; font-size: 1.3rem"
        for="inputGroupSelect01"
      >
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
      <label
        class="input-group-text w-25"
        :class="selectedMuscle"
        style="margin: 3px 0px 3px 3px; height: 6vh; font-size: 1.3rem"
        for="inputGroupSelect01"
      >
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { collapsed, toggleList, listWidth, selectedMuscle, selectedSecondaryMuscle, selectedPrimaryMuscle } from '@/components/state';
import { Equipment, Exercise, Muscle, MUSCLE_OPTIONS } from '@/types';
import { readEquipment, readExercises } from '@/API';

export default defineComponent({
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { collapsed, toggleList, listWidth, selectedMuscle, selectedPrimaryMuscle, selectedSecondaryMuscle, MUSCLE_OPTIONS };
  },
  components: {},
  data() {
    return {
      exercises: [] as Exercise[],
      selectedExercise: null,
      equipments: [] as Equipment[],
      selectedDifficulty: 1,
    };
  },
  watch: { $route: 'loadExercises' },
  async mounted() {
    await this.loadExercises();
    this.equipments = await readEquipment();
  },
  methods: {
    async loadExercises() {
      try {
        this.exercises = await readExercises();
      } catch (e) {
        console.log("couldn't load Exercises", e);
      }
    },
    openExerciseDetail(exercise: Exercise) {
      this.$router.push({ name: 'ExerciseDetail', params: { data: JSON.stringify(exercise) } });
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
</style>
