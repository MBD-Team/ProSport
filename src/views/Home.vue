<template>
  <div class="d-flex justify-content-around">
    <HumanFront />
    <HumanBack />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HumanFront from '@/components/HumanInterface/HumanFront.vue';
import HumanBack from '@/components/HumanInterface/HumanBack.vue';

export default defineComponent({
  components: { HumanFront, HumanBack },
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
