<template>
  <div>
    <TrainingPlanContent />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TrainingPlanContent from '@/components/TrainingPlanContent.vue';

export default defineComponent({
  components: {
    TrainingPlanContent,
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