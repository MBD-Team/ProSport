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
          <td v-for="day in trainingPlan" :key="day">
            <ul class="p-0">
              <li v-for="exercise in day" :key="exercise" class="mb-4" @click="showExeriseDetail(exercise)" :class="exercise.grossMuscles[0]">
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
import { defineComponent } from 'vue';
export default defineComponent({
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