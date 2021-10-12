<template>
  <div class="d-flex justify-content-around">
    <HumanFront />
    <HumanBack />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HumanFront from '@/components/humanInterface/HumanFront.vue';
import HumanBack from '@/components/humanInterface/HumanBack.vue';

export default defineComponent({
  components: { HumanFront, HumanBack },
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
