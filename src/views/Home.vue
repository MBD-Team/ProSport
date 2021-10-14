<template>
  <div>
    <div class="d-flex justify-content-around" @click="closeList">
      <HumanFront />
      <HumanBack />
    </div>
    <ListItemRight />
    <ListItemLeft />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HumanFront from '@/components/humanInterface/HumanFront.vue';
import HumanBack from '@/components/humanInterface/HumanBack.vue';
import ListItemRight from '@/components/ListRight.vue';
import ListItemLeft from '@/components/ListLeft.vue';
import { closeListLeft, closeListRight } from '@/components/state';

export default defineComponent({
  components: { HumanFront, HumanBack, ListItemRight, ListItemLeft },
  setup() {
    return { closeListLeft, closeListRight };
  },
  data() {
    return {};
  },
  methods: {
    closeList() {
      closeListLeft();
      closeListRight();
    },
  },
});
</script>
<style lang="scss" scoped></style>
