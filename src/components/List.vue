<template>
  <div id="list" :style="{ width: listWidth }">
    <div
      id="task"
      v-for="exercise in filterex"
      v-bind:key="exercise.id"
      data-bs-toggle="modal"
      href="#exampleModalToggle"
      role="button"
      @click="selectedExercise = exercise"
    >
      <img :src="exercise.img" style="margin: 10px; width: 180px; height: 100px" />
      <span v-if="!collapsed">
        <b style="font-size: 35px">{{ exercise.name }}</b>
      </span>
      <b v-if="exercise.difficulty == 'easy'" style="color: #2da64f">{{ exercise.difficulty }}</b>
      <b v-else-if="exercise.difficulty == 'medium'" style="color: #cfc22d">{{ exercise.difficulty }}</b>
      <b v-else style="color: #ed4e4e">{{ exercise.difficulty }}</b>
    </div>
  </div>
  <!-- MODAL -->
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header" style="flex-direction: column">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="background-color: var(--closeButton)"></button>
          <h1 class="modal-title" id="exampleModalToggleLabel"></h1>
        </div>
        <div class="modal-body">
          <div class="row" v-if="selectedExercise != null">
            <ExerciseDetail :exercise="selectedExercise" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { collapsed, toggleList, listWidth, selectedMuscle } from '@/components/state';
import { Exercise } from '@/types';
import { getExercises } from '@/API';
import ExerciseDetail from '@/components/ExerciseDetail.vue';

export default defineComponent({
  setup() {
    return { collapsed, toggleList, listWidth, selectedMuscle };
  },
  components: {
    ExerciseDetail,
  },
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
  --list-bg-color: rgba(48, 48, 48, 0.623);
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
  float: right;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: scroll;
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
