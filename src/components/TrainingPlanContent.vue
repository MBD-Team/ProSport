<template>
  <div class="container" v-if="displaySize">
    <table class="table">
      <thead>
        <tr style="text-align: center">
          <th
            v-for="day of ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']"
            :key="day"
            :style="`width:${100 / 7}%`"
          >
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="(day, dayIndex) of trainingsPlanLocal" :key="day">
            <ul style="padding: 0">
              <li
                v-for="(exercise, exerciseIndex) of day"
                :key="exercise"
                class="mb-3"
                @click="showExeriseDetail(exercise)"
                style="text-align: center"
              >
                <div
                  :class="MUSCLE_OPTIONS.find(m => m.value == exercise.primaryMuscles[0])?.grossMuscle"
                  style="font-size: 15px; border-radius: 5px 5px 0px 0px; justify-content: center"
                >
                  {{ exercise.name }}
                </div>
                <div>
                  {{
                    MUSCLE_OPTIONS.filter(m => exercise?.primaryMuscles.includes(m.value))
                      .map(p => p.name)
                      .join(', ')
                  }}
                </div>
                <div style="border-top: 1px solid grey" class="text-center" @click.stop="deleteExercise(dayIndex, exerciseIndex)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <div>
      <a></a>
      <div class="fluid-container" v-if="!displaySize">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="0">
          <div class="carousel-inner text-center">
            <div
              class="carousel-item text-center mt-5"
              :class="dayIndex == new Date().getDay() ? 'active' : null"
              v-for="(day, dayIndex) of [
                { name: 'Sonntag', value: 'sunday' },
                { name: 'Montag', value: 'monday' },
                { name: 'Dienstag', value: 'tuesday' },
                { name: 'Mittwoch', value: 'wednesday' },
                { name: 'Donnerstag', value: 'thursday' },
                { name: 'Freitag', value: 'friday' },
                { name: 'Samstag', value: 'saturday' },
              ]"
              :key="day"
            >
              <h1>{{ day.name }}</h1>
              <div
                v-for="(exercise, exerciseIndex) of trainingsPlanLocal[day.value]"
                :key="exercise"
                class="mt-3"
                @click="showExeriseDetail(exercise)"
              >
                <div
                  :class="MUSCLE_OPTIONS.find(m => m.value == exercise.primaryMuscles[0])?.grossMuscle"
                  style="width: 60vw; margin-left: 20vw; justify-content: center"
                >
                  {{ exercise.name }}
                </div>

                <div>
                  {{
                    MUSCLE_OPTIONS.filter(m => exercise?.primaryMuscles.includes(m.value))
                      .map(p => p.name)
                      .join(', ')
                  }}
                </div>
                <div class="text-center" @click.stop="deleteExercise(day.value, exerciseIndex)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path
                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
            style="background-color: none; width: 20vw; height: 91vh; opacity: 1"
          >
            <span aria-hidden="true" style="width: 100%; color: black">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
            style="background-color: none; width: 20vw; height: 91vh; opacity: 1"
          >
            <span aria-hidden="true" style="width: 100%; color: black">
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Exercise, TrainingsPlan, MUSCLE_OPTIONS } from '@/types';
import { selectedExercise } from '@/components/state';
import { defineComponent } from 'vue';
import * as API from '@/API';
import { getRole } from '@/API';
export default defineComponent({
  async mounted() {
    await this.loadExercises();
    await this.updateTrainingPlan();
  },
  setup() {
    return { selectedExercise };
  },
  computed: {
    displaySize() {
      if (window.innerWidth > 768) {
        return true;
      } else {
        return false;
      }
    },
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
    deleteExercise(day: string, exerciseIndex: number) {
      console.log(day);
      console.log(exerciseIndex);
      if (
        !confirm(
          `Möchtest du ${this.trainingsPlanLocal[day as keyof TrainingsPlan][exerciseIndex].name} wirklich aus deinem Trainingsplan entfernen?`
        )
      )
        return;
      this.trainingsPlanLocal[day as keyof TrainingsPlan].splice(exerciseIndex, 1);
      this.trainingsPlanDataBase = {
        monday: this.trainingsPlanLocal.monday.map(e => e.id),
        tuesday: this.trainingsPlanLocal.tuesday.map(e => e.id),
        wednesday: this.trainingsPlanLocal.wednesday.map(e => e.id),
        thursday: this.trainingsPlanLocal.thursday.map(e => e.id),
        friday: this.trainingsPlanLocal.friday.map(e => e.id),
        saturday: this.trainingsPlanLocal.saturday.map(e => e.id),
        sunday: this.trainingsPlanLocal.sunday.map(e => e.id),
      };
      try {
        API.addTrainingsPlan(this.trainingsPlanDataBase);
      } catch (e) {
        alert('Trainingsplan konnte nicht geladen werden.');
        console.error({ "couldn't add TrainingsPlan": e });
      }
      this.updateTrainingPlan();
    },
    async loadExercises() {
      try {
        this.exercises = await API.getExercises();
      } catch (e) {
        alert('Übungen konnten nicht geladen werden.');
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
        alert('Trainingsplan konnte nicht gespeichert werden.');
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
