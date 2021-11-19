<template>
  <div>
    <div class="d-flex justify-content-center" @click="closeList" :style="displaySize ? null : 'height:91vh'">
      <div class="front" style="margin-right: 8%" v-if="view == 'front' || displaySize"><HumanFront /></div>
      <div class="back" style="margin-left: 8%" v-if="view == 'back' || displaySize"><HumanBack /></div>
    </div>
    <button class="btn btn-success shadow-none" @click="switchView()">{{ textView }}</button>
    <List :direction="orientation" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HumanFront from '@/components/HumanInterface/HumanFront.vue';
import HumanBack from '@/components/HumanInterface/HumanBack.vue';

import List from '@/components/List.vue';
import { orientation, closeList, LIST_WIDTH } from '@/components/state';

export default defineComponent({
  computed: {
    direction() {
      console.log(orientation);
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
  components: { HumanFront, HumanBack, List },
  created() {
    if (window.innerWidth > 768) {
      LIST_WIDTH.value = 60;
    } else {
      LIST_WIDTH.value = 90;
    }
  },
  setup() {
    return { orientation, closeList, LIST_WIDTH };
  },
  data() {
    return {
      view: 'front',
    };
  },
  methods: {
    switchView() {
      this.view == 'front' ? (this.view = 'back') : (this.view = 'front');
    },
  },
});
</script>
<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}

.front {
  @media (max-width: 1200px) {
    margin-top: 10%;
    transform: scale(1.3) !important;
  }
  @media (max-width: 768px) {
    transform: scale(3) !important;
    margin-bottom: 100vh;
    margin-left: 10%;
  }
}
.back {
  @media (max-width: 1200px) {
    margin-top: 11%;
    transform: scale(1.3) !important;
  }
  @media (max-width: 768px) {
    transform: scale(3) !important;
    margin-bottom: 100vh;
    margin-right: 6%;
  }
}
.btn {
  @media (min-width: 768px) {
    display: none !important;
  }
  width: 20%;
  position: absolute;
  top: auto;
  left: 40%;
  right: auto;
  bottom: 10px;
}
</style>
