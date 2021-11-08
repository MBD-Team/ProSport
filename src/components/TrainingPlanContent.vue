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
          <td v-for="day of trainingPlan" :key="day">
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
import { Exercise, TrainingsPlan, MUSCLE_OPTIONS } from '@/types';
import { selectedExercise } from '@/components/state';
import { defineComponent } from 'vue';
import * as API from '@/API';
export default defineComponent({
  mounted() {
    this.updateTrainingPlan();
  },
  setup() {
    return { selectedExercise };
  },
  watch: { selectedExercise: 'updateTrainingPlan' },
  data() {
    return {
      MUSCLE_OPTIONS: MUSCLE_OPTIONS,
      trainingPlan: {
        monday: [] as Exercise[],
        tuesday: [] as Exercise[],
        wednesday: [] as Exercise[],
        thursday: [] as Exercise[],
        friday: [] as Exercise[],
        saturday: [] as Exercise[],
        sunday: [] as Exercise[],
      } as TrainingsPlan,
    };
  },

  methods: {
    showExeriseDetail(exercise: Exercise) {
      this.$router.push({ name: 'ExerciseDetail', params: { data: JSON.stringify(exercise) } });
    },
    updateTrainingPlan() {
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

