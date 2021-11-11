<template>
  <div class="container" style="">
    <table class="table">
      <thead>
        <tr style="text-align: center">
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
            <ul style="padding: 0">
              <li v-for="exercise of day" :key="exercise" class="mb-3" @click="showExeriseDetail(exercise)" style="text-align: center">
                <div :class="exercise.grossMuscles[0]" style="font-size: 15px; border-radius: 5px 5px 0px 0px">
                  {{ exercise.name }}
                </div>
                <div>
                  {{
                    MUSCLE_OPTIONS.filter(m => exercise?.primaryMuscles.includes(m.value))
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

<style scoped>
ul {
  list-style: none;
}
li {
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: var(--addButton);
}

td {
  border: none !important;
}
.shoulder {
  color: #000000 !important;
  background-color: var(--selectedShoulderColor) !important;
}
.neck {
  color: #000000 !important;
  background-color: var(--selectedNeckColor) !important;
}
.chest {
  color: #000000 !important;
  background-color: var(--selectedChestColor) !important;
}
.back {
  color: #000000 !important;
  background-color: var(--selectedBackColor) !important;
}
.belly {
  color: #000000 !important;
  background-color: var(--selectedBellyColor) !important;
}
.butt {
  color: #000000 !important;
  background-color: var(--selectedButtColor) !important;
}
.leg {
  color: #000000 !important;
  background-color: var(--selectedLegColor) !important;
}
.arm {
  color: #000000 !important;
  background-color: var(--selectedArmColor) !important;
}
</style>
