<template>
  <div class="container mt-4">
    <table class="table">
      <thead>
        <tr>
          <th style="width: 14.2%">Montag</th>
          <th style="width: 14.2%">Dienstag</th>
          <th style="width: 14.2%">Mittwoch</th>
          <th style="width: 14.2%">Donnerstag</th>
          <th style="width: 14.2%">Freitag</th>
          <th style="width: 14.2%">Samstag</th>
          <th style="width: 14.2%">Sonntag</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="day of trainingsPlanLocal" :key="day">
            <ul>
              <li v-for="exercise of day" :key="exercise" class="mb-4" @click="showExeriseDetail(exercise)">
                <div>{{ exercise.name }}</div>
                <div>Hauptmuskel:</div>
                <div>
                  {{
                    MUSCLE_OPTIONS.filter(m => exercise?.primaryMuscles.includes(m.value))
                      .map(p => p.name)
                      .join(', ')
                  }}
                </div>
                <div>Hilfsmuskel:</div>
                <div>
                  {{
                    MUSCLE_OPTIONS.filter(m => exercise.secondaryMuscles.includes(m.value))
                      .map(p => p.name)
                      .join(', ')
                  }}
                </div>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Exercise, TrainingsPlan, MUSCLE_OPTIONS, TrainingsPlanDataBase } from '@/types';
import { selectedExercise } from '@/components/state';
import { defineComponent } from 'vue';
import * as API from '@/API';
export default defineComponent({
  async mounted() {
    await this.loadExercises();
    await this.updateTrainingPlan();
  },
  setup() {
    return { selectedExercise };
  },
  watch: { selectedExercise: 'updateTrainingPlan' },
  data() {
    return {
      MUSCLE_OPTIONS: MUSCLE_OPTIONS,
      exercises: [] as Exercise[],

      trainingsPlanDataBase: {
        monday: [] as string[],
        tuesday: [] as string[],
        wednesday: [] as string[],
        thursday: [] as string[],
        friday: [] as string[],
        saturday: [] as string[],
        sunday: [] as string[],
      } as TrainingsPlan,

      trainingsPlanLocal: {
        monday: [] as Exercise[],
        tuesday: [] as Exercise[],
        wednesday: [] as Exercise[],
        thursday: [] as Exercise[],
        friday: [] as Exercise[],
        saturday: [] as Exercise[],
        sunday: [] as Exercise[],
      },
    };
  },

  methods: {
    async loadExercises() {
      try {
        this.exercises = await API.getExercises();
      } catch (e) {
        console.log("couldn't load Exercises", e);
      }
    },
    showExeriseDetail(exercise: Exercise) {
      this.$router.push({ name: 'ExerciseDetail', params: { data: JSON.stringify(exercise) } });
    },
    async updateTrainingPlan() {
      try {
        let result = await API.getTrainingPlans();
        if (result?.trainingsPlan) {
          this.trainingsPlanLocal = {
            monday: result.trainingsPlan.monday.map(id => this.exercises.find(e => e.id == id)).filter(e => e) as Exercise[],
            tuesday: result.trainingsPlan.tuesday.map(id => this.exercises.find(e => e.id == id)).filter(e => e) as Exercise[],
            wednesday: result.trainingsPlan.wednesday.map(id => this.exercises.find(e => e.id == id)).filter(e => e) as Exercise[],
            thursday: result.trainingsPlan.thursday.map(id => this.exercises.find(e => e.id == id)).filter(e => e) as Exercise[],
            friday: result.trainingsPlan.friday.map(id => this.exercises.find(e => e.id == id)).filter(e => e) as Exercise[],
            saturday: result.trainingsPlan.saturday.map(id => this.exercises.find(e => e.id == id)).filter(e => e) as Exercise[],
            sunday: result.trainingsPlan.sunday.map(id => this.exercises.find(e => e.id == id)).filter(e => e) as Exercise[],
          };
        }
      } catch (e) {
        console.error({ '': e });
      }
    },
  },
});
</script>

<style>
ul {
  list-style: none;
}
li {
  padding: 1px;
  border: 1px solid #999;
  cursor: pointer;
}

td {
  border: none !important;
}
</style>

