<template>
  <div class="container d-flex align-items-stretch justify-content-center flex-column mt-4">
    <div class="card card-default w-75" style="margin-left: 12.5%">
      <div class="card-header">Add Exercise</div>
      <div class="card-body">
        <form @submit.prevent="addExe()" autocomplete="off">
          <div class="m-4 alert alert-danger text-center" v-if="error">{{ error }}</div>
          <div class="p-4 row">
            <label class="col-4" for="name">Name of Exercise:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" type="text" placeholder="name" v-model="exerciseName" autocomplete="off" required />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="description">Description:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" type="text" placeholder="description" v-model="description" autocomplete="off" required />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="hints">Hints:</label>
            <div class="col-8">
              <input
                minlength="3"
                class="form-control"
                type="text"
                placeholder="hints separated with comma"
                v-model="hints"
                autocomplete="off"
                required
              />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="videoURL">VideoURL:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" type="text" placeholder="url" v-model="videoURL" autocomplete="off" required />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="image">Image:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" type="text" placeholder="url" v-model="img" autocomplete="off" required />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="difficulty">Difficulty:</label>
            <div class="col-8">
              <div class="btn-group">
                <input type="radio" class="btn-check" name="difficulty" id="easy" autocomplete="off" @change="difficulty = 'easy'" />
                <label class="btn btn-outline-primary" for="easy">easy</label>

                <input type="radio" class="btn-check" name="difficulty" id="medium" autocomplete="off" @change="difficulty = 'medium'" />
                <label class="btn btn-outline-primary" for="medium">medium</label>

                <input type="radio" class="btn-check" name="difficulty" id="hard" autocomplete="off" @change="difficulty = 'hard'" />
                <label class="btn btn-outline-primary" for="hard">hard</label>
              </div>
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="muscles">primary muscles:</label>
            <div class="col-8">
              <Multiselect
                v-model="primaryMuscles"
                :options="musclesOptions.filter(p => !secondaryMuscles.includes(p))"
                mode="tags"
                :closeOnSelect="false"
                :searchable="true"
                noResultsText="no muscles found"
              />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="muscles">secondary muscles:</label>
            <div class="col-8">
              <Multiselect
                v-model="secondaryMuscles"
                :options="musclesOptions.filter(s => !primaryMuscles.includes(s))"
                mode="tags"
                :closeOnSelect="false"
                :searchable="true"
                noResultsText="no muscles found"
              />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="devices">used equipment:</label>
            <div class="col-8">
              <select class="form-control" placeholder="equipment" v-model="trainingDevices" autocomplete="off" require>
                <option v-for="e in 10" :key="e" :value="e"></option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary m-4 col-3" type="submit" v-if="!addingExercise">add Exercise</button>
          <span v-else class="m-4 spinner-border spinner-border-sm text-primary"></span>
          <button class="btn btn-primary m-4 col-3" type="button" @click="showExercises()">show Exercises</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { addExercise, MUSCLE_OPTIONS, getExercises } from '@/API';
import Multiselect from '@vueform/multiselect';

export default defineComponent({
  components: { Multiselect },
  data() {
    return {
      value: null,
      error: '',
      addingExercise: false,
      exerciseName: '',
      description: '',
      hints: '',
      videoURL: '',
      img: '',
      difficulty: '',
      muscles: [],
      trainingDevices: [] as string[],
      musclesOptions: MUSCLE_OPTIONS,
      primaryMuscles: [] as string[],
      secondaryMuscles: [] as string[],
    };
  },
  methods: {
    async showExercises() {
      let res = await getExercises();
      console.log(res);
    },
    addExe() {
      if (!this.difficulty || !this.primaryMuscles) {
        this.error = 'no difficulty or primary muscle chosen';
        return;
      }
      this.addingExercise = true;
      let newExercise = {
        name: this.exerciseName,
        description: this.description,
        hints: this.hints,
        videoURL: this.videoURL,
        img: this.img,
        difficulty: this.difficulty,
        trainingDevices: this.trainingDevices,
        primaryMuscles: this.primaryMuscles,
        secondaryMuscles: this.secondaryMuscles,
      };
      try {
        addExercise(newExercise);
      } catch (e) {
        console.error('Error adding document: ', e);
        this.error = "couldn't add exercise";
      }
      this.addingExercise = false;
    },
    test() {
      console.log('test');
    },
  },
});
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
