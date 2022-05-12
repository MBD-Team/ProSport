<template>
  <div class="container mt-4">
    <AddExercise />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AddExercise from '@/components/AddExercise.vue';
import * as API from '@/API';
export default defineComponent({
  async beforeMount() {
    if ((await API.getRole()) != 'admin') {
      this.$router.push('/');
    }
  },
  components: {
    AddExercise,
  },
});
</script>
<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
h2 {
  text-align: center;
}
</style>
