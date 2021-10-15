<template>
  <div>
    <div class="d-flex justify-content-around" @click="closeList">
      <HumanFront />
      <HumanBack />
    </div>
    <List :direction="orientation" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HumanFront from '@/components/HumanInterface/HumanFront.vue';
import HumanBack from '@/components/HumanInterface/HumanBack.vue';
import List from '@/components/List.vue';
import { orientation, closeList } from '@/components/state';

export default defineComponent({
  computed: {
    direction() {
      console.log(orientation);
      return orientation;
    },
  },
  components: { HumanFront, HumanBack, List },
  setup() {
    return { orientation, closeList };
  },
  data() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped></style>
