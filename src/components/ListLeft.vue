<template>
  <div id="list" :style="{ width: listWidthLeft }">
    <div id="task" v-for="exercise in filterex" v-bind:key="exercise">
      <img :src="exercise.img" alt="" style="margin: 10px; width: 180px; height: 100px" />
      <span v-if="!collapsedLeft">
        <b style="font-size: 35px">{{ exercise.name }}</b>
      </span>
      <b v-if="exercise.difficulty == 'easy'" style="color: #2da64f">{{ exercise.difficulty }}</b>
      <b v-else-if="exercise.difficulty == 'medium'" style="color: #cfc22d">{{ exercise.difficulty }}</b>
      <b v-else style="color: #ed4e4e">{{ exercise.difficulty }}</b>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { collapsedLeft, toggleListLeft, listWidthLeft, selectedMuscleLeft } from '@/components/state';

export default defineComponent({
  computed: {
    filterex(): any {
      return this.exercises.filter(e => e.muscles.includes(this.selectedMuscleLeft));
    },
  },
  setup() {
    return { collapsedLeft, toggleListLeft, listWidthLeft, selectedMuscleLeft };
  },
  data() {
    return {
      exercises: [
        {
          id: '1',
          name: 'Kniebeuge',
          description: 'machen sie einfach Kniebeuge',
          hints: 'achte auf eine saubere Auführung, mache es ordentlich',
          videoURL: 'https://www.youtube.com/watch?v=DLzxrzFCyOs',
          img: 'https://i.ytimg.com/vi/DLzxrzFCyOs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCIQNo98lOynmjcVeFpFGv6hNvsvw',
          difficulty: 'easy',
          muscles: ['Bein'],
          trainingDevices: ['keine'],
        },
        {
          id: '2',
          name: 'Kniebeuge an den Armen',
          description: 'machen sie einfach Kniebeuge mit ihren Armen',
          hints: 'achte auf eine saubere Auführung, mache es ordentlich',
          videoURL: 'https://www.youtube.com/watch?v=DLzxrzFCyOs',
          img: 'https://i.ytimg.com/vi/DLzxrzFCyOs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCIQNo98lOynmjcVeFpFGv6hNvsvw',
          difficulty: 'hard',
          muscles: ['Arm'],
          trainingDevices: ['keine'],
        },
        {
          id: '3',
          name: 'Kniebeuge an den Rücken',
          description: 'machen sie einfach Kniebeuge mit ihren Armen',
          hints: 'achte auf eine saubere Auführung, mache es ordentlich',
          videoURL: 'https://www.youtube.com/watch?v=DLzxrzFCyOs',
          img: 'https://i.ytimg.com/vi/DLzxrzFCyOs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCIQNo98lOynmjcVeFpFGv6hNvsvw',
          difficulty: 'medium',
          muscles: ['Arm', 'Bein'],
          trainingDevices: ['keine'],
        },
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
* {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#list {
  color: rgb(0, 0, 0);
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
#task {
  background-color: rgba(255, 255, 255, 0.952);
  margin: 3px;
  border-radius: 10px;
  box-shadow: 0px 1px 22px 16px rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 0px 1px 22px 16px rgba(0, 0, 0, 0.12) inset;
  -moz-box-shadow: 0px 1px 22px 16px rgba(0, 0, 0, 0.1) inset;
}
b {
  margin-left: 5px;
}
</style>
