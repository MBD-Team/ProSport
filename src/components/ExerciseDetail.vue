<template>
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
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Exercise } from '@/types';
export default defineComponent({
  props: {
    exercise: Object,
  },
});
</script>
<style lang="scss" scoped>
</style>
