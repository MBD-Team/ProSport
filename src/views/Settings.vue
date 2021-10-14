<template>
  <div class="container mt-4">
    <AddExercise />
    <AddDevice />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AddExercise from '@/components/AddExercise.vue';
import AddDevice from '@/components/AddDevice.vue';

export default defineComponent({
  components: {
    AddExercise,
    AddDevice,
  },
});
</script>
<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
