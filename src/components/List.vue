<template>
  <div :class="direction" id="list" :style="{ width: listWidth }">
    <div :class="selectedMuscle" id="task" v-for="exercise in filterex" v-bind:key="exercise.id" @click="openExerciseDetail(exercise)">
      <img :src="exercise.img" style="margin: 10px; width: 180px; height: 100px" />

      <span v-if="!collapsed">
        <b style="font-size: 35px">{{ exercise.name }}</b>
      </span>
      <b v-if="exercise.difficulty == 'easy'" style="color: #2da64f">Leicht</b>
      <b v-else-if="exercise.difficulty == 'medium'" style="color: #cfc22d">Mittel</b>
      <b v-else style="color: #ed4e4e">Schwer</b>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { collapsed, toggleList, listWidth, selectedMuscle } from '@/components/state';
import { Exercise } from '@/types';
import { getExercises } from '@/API';

export default defineComponent({
  props: {
    direction: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { collapsed, toggleList, listWidth, selectedMuscle };
  },
  components: {},
  data() {
    return {
      exercises: [] as Exercise[],
      selectedExercise: null,
    };
  },
  watch: { $route: 'getExercises' },
  async mounted() {
    await this.loadExercises();
  },
  methods: {
    async loadExercises() {
      try {
        this.exercises = await getExercises();
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
      return this.exercises.filter(e => e.primaryMuscles.includes(this.selectedMuscle));
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
  box-shadow: 0px 1px 22px 16px rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0px 1px 22px 16px rgba(0, 0, 0, 0.12) inset;
  -moz-box-shadow: 0px 1px 22px 16px rgba(0, 0, 0, 0.1) inset;
}
b {
  margin-left: 5px;
}
</style>
