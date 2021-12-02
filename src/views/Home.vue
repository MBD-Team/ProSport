<template>
  <div class="d-flex justify-content-center" id="main" @click.stop="closeList()">
    <div class="front" style="margin-right: 8%" v-if="displaySize"><HumanFront /></div>
    <div class="back" style="margin-left: 8%" v-if="displaySize"><HumanBack /></div>
    <div class="fluid-container" v-if="!displaySize" v-show="viewCarousel" style="height: 91vh">
      <div id="carouselExampleControls" class="carousel slide pointer-event" data-bs-interval="0">
        <div class="carousel-inner text-center" style="height: 91vh; width: 99vw">
          <div class="carousel-item">
            <div class="front" style="margin-right: 8%"><HumanFront /></div>
          </div>
          <div class="carousel-item active">
            <div class="front" style="margin-right: 8%"><HumanBack /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="btn btn-success shadow-none" @click="next()">{{ textView }}</button>
  <List :direction="orientation" />
  <div v-show="false">
    <button
      class="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-bs-slide="prev"
      style="background-color: none; width: 0vw; height: 0vh"
      id="prev"
    >
      <span aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="0%" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
        </svg>
      </span>
      <span class="sr-only">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-bs-slide="next"
      style="background-color: none; width: 0vw; height: 0vh"
      id="next"
    >
      <span aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="0%" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
        </svg>
      </span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HumanFront from '@/components/HumanInterface/HumanFront.vue';
import HumanBack from '@/components/HumanInterface/HumanBack.vue';
import List from '@/components/List.vue';
import { orientation, closeList, LIST_WIDTH } from '@/components/state';

export default defineComponent({
  components: { HumanFront, HumanBack, List },
  created() {
    window.innerWidth > 768 ? (LIST_WIDTH.value = 60) : (LIST_WIDTH.value = 90);
  },
  mounted() {
    document.getElementById('next')?.click();
    this.viewCarousel = true;
    document.getElementById('carouselExampleControls')?.addEventListener('slide.bs.carousel', () => {
      this.switchView();
    });
  },
  setup() {
    return { orientation, closeList, LIST_WIDTH };
  },
  data() {
    return {
      view: 'front',
      viewCarousel: false,
    };
  },
  methods: {
    switchView() {
      this.view == 'front' ? (this.view = 'back') : (this.view = 'front');
    },
    next() {
      document.getElementById('next')?.click();
    },
  },
  computed: {
    direction() {
      if (window.innerWidth > 768) {
        return orientation;
      } else {
        return 'front';
      }
    },
    displaySize() {
      if (window.innerWidth > 768) {
        return true;
      } else {
        return false;
      }
    },

    textView() {
      if (this.view == 'front') {
        return 'Vorne';
      } else {
        return 'Hinten';
      }
    },
  },
});
</script>
<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
#main {
  width: 100vw;
  height: 91vh;
}
.front {
  margin-top: 1%;
  @media (max-width: 1200px) {
    margin-bottom: 100vh;
    margin-top: 10vh;
    transform: scale(1.3);
  }
  @media (max-width: 768px) {
    transform: scale(3);
    margin-top: 30vh;
    margin-left: 10%;
  }
}
.back {
  margin-top: 2%;
  @media (max-width: 1200px) {
    margin-bottom: 100vh;
    margin-top: 11vh;
    transform: scale(1.3);
  }
  @media (max-width: 768px) {
    transform: scale(3);
    margin-top: 30vh;
    margin-right: 6%;
  }
}
.btn {
  @media (min-width: 768px) {
    display: none;
  }
  width: 20%;
  position: absolute;
  top: auto;
  left: 40%;
  right: auto;
  bottom: 10px;
}
</style>
