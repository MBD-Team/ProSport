<template>
  <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open modal</a>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header" style="flex-direction: column">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          <h1 class="modal-title" id="exampleModalToggleLabel">{{ name }}</h1>
        </div>
        <div class="modal-body">
          <div class="row">
            <div style="width: 720px; height: 400px; margin: 0 1rem 1rem 0">
              <iframe
                width="720px"
                height="400px"
                :src="videoURL"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="col-6">
              <h5>Beanspruchte Muskeln:</h5>
              <p>{{ muscles.join() }}</p>
              <h5>Beschreibung:</h5>
              <p>{{ description }}</p>
            </div>
            <div>
              <h5>Hinweise:</h5>
              <p>{{ hints }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      id: '0',
      name: 'Baseball',
      description:
        'Baseball ipsum dolor sit amet cellar rubber win hack tossed. Slugging catcher slide bench league, left fielder nubber. Bullpen blue run rotation relief pitcher grass umpire. Forkball bullpen suicide squeeze club bush league field sport. Base cookie triple play blue hot dog relay rake starting pitcher inning.',
      hints: 'Baseball ipsum dolor sit amet cellar, rubber win hack tossed. Slugging catche, slide bench league, left fielder nubber. Bullpen blue',
      videoURL: 'https://www.youtube.com/embed/r_MpUP6aKiQ',
      img: 'https://www.sueddeutsche.de/image/sz.1.4349344/704x396?v=1551360900',
      difficulty: 'easy',
      muscles: ['Baseball', 'ipsum', 'dolor'],
      trainingDevices: ['sit amet', 'cellar rubber', 'win hack'],
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
