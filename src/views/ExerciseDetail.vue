<template>
  <div style="margin-top: 25px">
    <div style="margin-left: 1vw" @Click="exitExerciseDetail()">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
        />
      </svg>
    </div>
    <div class="d-flex">
      <div style="width: 720px; height: 400px; margin-left: 5vw">
        <iframe
          width="720px"
          height="400px"
          :src="exercise?.videoURL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div style="margin-left: 2vw">
        <h1>Name der Übung</h1>
        <p style="font-size: 25px">{{ exercise?.name }}</p>
        <h3>Beanspruchte Hauptmuskeln</h3>
        <p style="font-size: 20px">
          {{
            muscleOptions
              .filter(m => exercise?.primaryMuscles.includes(m.value))
              .map(p => p.name)
              .join(', ')
          }}
        </p>
        <h3>Beanspruchte Nebenmuskeln</h3>
        <p style="font-size: 20px">
          {{
            muscleOptions
              .filter(m => exercise?.secondaryMuscles.includes(m.value))
              .map(p => p.name)
              .join(', ')
          }}
        </p>
        <h3>Benötigte Geräte</h3>
        <p style="font-size: 20px">
          {{ equipment.join(', ') }}
        </p>
      </div>
    </div>
    <div style="margin-left: 5vw; margin-top: 2vh">
      <h3>Beschreibung</h3>
      <p style="font-size: 20px">{{ exercise?.description }}</p>
      <h3>Hinweise</h3>
      <p style="font-size: 20px">{{ exercise?.hints }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { Equipment, Exercise, MUSCLE_OPTIONS } from '@/types';
import { lastPage } from '@/router';
import * as API from '@/API';
export default defineComponent({
  created() {
    if (this.$route.params.data) {
      this.exercise = JSON.parse(this.$route.params.data as string);
      localStorage.setItem('lastExercise', JSON.stringify(this.exercise));
    } else if (localStorage.getItem('lastExercise')) {
      this.exercise = JSON.parse(localStorage.getItem('lastExercise')!);
    } else {
      this.$router.push('/');
    }
  },
  async mounted() {
    try {
      this.equipmentsLoads = await API.getEquipment();
    } catch (e) {
      alert('Geräte konnten nicht geladen werden');
      console.error({ "couldn't get Equipments": e });
    }
    this.equipmentsLoads.forEach(e => {
      this.exercise.trainingDevices.forEach(t => {
        if (e.id == t) {
          this.equipment.push(e.name);
        }
      });
    });
  },
  data() {
    return {
      lastPage: lastPage,
      equipment: [] as string[],
      equipmentsLoads: [] as Equipment[],
      muscleOptions: MUSCLE_OPTIONS,
      exercise: {
        id: '',
        name: '',
        description: '',
        hints: '',
        videoURL: '',
        img: '',
        difficulty: 'easy',
        grossMuscles: [],
        primaryMuscles: [],
        secondaryMuscles: [],
        trainingDevices: [],
      } as Exercise,
    };
  },
  methods: {
    exitExerciseDetail() {
      if (lastPage == 'Home') {
        this.$router.push('/');
      } else {
        this.$router.push('/TrainingPlan');
      }
    },
  },
});
</script>
<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
button {
  background: white;
}
svg:active {
  border-radius: 5px;
  background: rgb(206, 206, 206);
  transform: scale(0.9);
}
</style>
