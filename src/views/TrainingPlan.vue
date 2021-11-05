<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th class="text-center" style="width: 14.2%">Montag</th>
          <th class="text-center" style="width: 14.2%">Dienstag</th>
          <th class="text-center" style="width: 14.2%">Mittwoch</th>
          <th class="text-center" style="width: 14.2%">Donnerstag</th>
          <th class="text-center" style="width: 14.2%">Freitag</th>
          <th class="text-center" style="width: 14.2%">Samstag</th>
          <th class="text-center" style="width: 14.2%">Sonntag</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              <li v-for="exercise in trainingPlan.monday" :key="exercise" class="mb-4" @click="showExeriseDetail(exercise)">
                <div>{{ exercise.name }}</div>
                <div>Hauptmuskel:</div>
                <div>
                  {{
                    muscleOptions
                      .filter(m => exercise?.primaryMuscles.includes(m.value))
                      .map(p => p.name)
                      .join(', ')
                  }}
                </div>
                <div>Hilfsmuskel:</div>
                <div>
                  {{
                    muscleOptions
                      .filter(m => exercise.secondaryMuscles.includes(m.value))
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
import { Exercise, TrainingsPlan } from '@/types';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      trainingPlan: {
        monday: [
          {
            id: '',
            name: 'test',
            description: '',
            hints: '',
            videoURL: '',
            img: '',
            difficulty: 'easy',
            grossMuscles: [],
            primaryMuscles: ['fdf', 'fdyg'],
            secondaryMuscles: ['fdf', 'fdyg'],
            trainingDevices: [],
          },
          {
            id: '',
            name: 'test',
            description: '',
            hints: '',
            videoURL: '',
            img: '',
            difficulty: 'easy',
            grossMuscles: [],
            primaryMuscles: ['fdf', 'fdyg'],
            secondaryMuscles: ['fdf', 'fdyg'],
            trainingDevices: [],
          },
        ],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
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
</style>
