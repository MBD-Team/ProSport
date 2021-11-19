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
    <div class="container">
      <div class="row">
        <div style="height: 40vh" class="col-12 col-lg-8">
          <iframe
            width="100%"
            height="100%"
            :src="exercise?.videoURL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="col-12 col-lg-4 mt-1 mt-lg-0">
          <h1>Name der Übung</h1>
          <p style="font-size: 1.5em">{{ exercise?.name }}</p>
          <h3>Beanspruchte Hauptmuskeln</h3>
          <p style="font-size: 1.3em">
            {{
              muscleOptions
                .filter(m => exercise?.primaryMuscles.includes(m.value))
                .map(p => p.name)
                .join(', ')
            }}
          </p>
          <h3>Beanspruchte Nebenmuskeln</h3>
          <p style="font-size: 1.3em">
            {{
              muscleOptions
                .filter(m => exercise?.secondaryMuscles.includes(m.value))
                .map(p => p.name)
                .join(', ')
            }}
          </p>
          <h3>Benötigte Geräte</h3>
          <p style="font-size: 1.3em">
            {{ equipment.join(', ') }}
          </p>
        </div>
      </div>
      <div class="mt-1">
        <h3>Beschreibung</h3>
        <p style="font-size: 1.3em">{{ exercise?.description }}</p>
        <h3>Hinweise</h3>
        <p style="font-size: 1.3em">{{ exercise?.hints }}</p>
      </div>
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
