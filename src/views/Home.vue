<template>
  <div>
    <humanFront />
    <humanBack />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import humanFront from '@/components/humanInterface/humanFront.vue';
import humanBack from '@/components/humanInterface/humanBack.vue';

export default defineComponent({
  components: { humanFront, humanBack },
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
