<template>
  <div id="list" :style="{ width: listWidth }">
    <div id="task" v-for="task in tasks" v-bind:key="task">
      <span v-if="!collapsed">
        <b>{{ task.taskName }}</b>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { collapsed, toggleList, listWidth } from '@/components/state';

export default defineComponent({
  setup() {
    return { collapsed, toggleList, listWidth };
  },
  data() {
    return {
      tasks: [
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
        { taskName: 'doppelter Hüftschwung' },
        { taskName: 'Hampelmann' },
        { taskName: 'Bibabutzemann' },
      ],
    };
  },
});
</script>
<style>
:root {
  --list-bg-color: rgba(48, 48, 48, 0.623);
  --list-item-hover: rgb(95, 95, 95);
  --list-item-active: rgb(141, 141, 141);
}
</style>

<style scoped lang="scss">
#list {
  color: rgb(255, 255, 255);
  background-color: var(--list-bg-color);
  float: right;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}
</style>
