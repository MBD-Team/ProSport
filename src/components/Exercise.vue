<template>
  <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open modal</a>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header" style="flex-direction: column">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <h1 class="modal-title" id="exampleModalToggleLabel">{{ exercise?.name }}</h1>
        </div>
        <div class="modal-body">
          <div class="row">
            <div style="width: 720px; height: 400px; margin: 0 1rem 1rem 0">
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
            <div class="col-6">
              <h5>Beanspruchte Hauptmuskeln:</h5>
              <p>{{ exercise?.primaryMuscles.join() }}</p>
              <h5>Beanspruchte Nebenmuskeln</h5>
              <p>{{ exercise?.secondaryMuscles.join() }}</p>
              <h5>Beschreibung:</h5>
              <p>{{ exercise?.description }}</p>
            </div>
            <div>
              <h5>Hinweise:</h5>
              <p>{{ exercise?.hints }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
