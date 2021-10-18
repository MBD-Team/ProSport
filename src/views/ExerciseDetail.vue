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
        <p style="font-size: 20px">{{ exercise?.primaryMuscles.join() }}</p>
        <h3>Beanspruchte Nebenmuskeln</h3>
        <p style="font-size: 20px">{{ exercise?.secondaryMuscles.join() }}</p>
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
import { Exercise } from '@/types';
export default defineComponent({
  created() {
    if (this.$route.params.data) {
      this.exercise = JSON.parse(this.$route.params.data as string);
    } else {
      this.$router.push('/');
    }
  },
  data() {
    return {
      exercise: {
        id: '',
        name: '',
        description: '',
        hints: '',
        videoURL: '',
        img: '',
        difficulty: '',
        primaryMuscles: [],
        secondaryMuscles: [],
        trainingDevices: [],
      } as Exercise,
    };
  },
  methods: {
    exitExerciseDetail() {
      this.$router.go(-1);
    },
  },
});
</script>
<style lang="scss" scoped>
button {
  background: white;
}
svg:active {
  border-radius: 5px;
  background: rgb(206, 206, 206);
  transform: scale(0.9);
}
</style>
