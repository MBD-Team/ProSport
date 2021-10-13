<template>
  <div>
    <div class="d-flex justify-content-around" @click="closeList">
      <HumanFront />
      <HumanBack />
    </div>
    <ListItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HumanFront from '@/components/HumanInterface/HumanFront.vue';
import HumanBack from '@/components/HumanInterface/HumanBack.vue';
import ListItem from '@/components/List.vue';
import { closeList } from '@/components/state';

export default defineComponent({
  components: { HumanFront, HumanBack, ListItem },
  setup() {
    return { closeList };
  },
  data() {
    return {};
  },
});
</script>
<style lang="scss" scoped></style>
