<template>
  <div id="navbar">
    <nav class="row g-2">
      <div class="col-4"></div>
      <a class="col-4" href="#">
        <img src="@/assets/PS_Logo_doublebizeps.svg" width="220" height="55" class="" alt="PS_Logo" />
      </a>
      <div class="col-4"></div>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import '@fortawesome/fontawesome-free/js/all.js';

export default defineComponent({});
</script>
<style scoped lang="scss">
#navbar {
  background: linear-gradient(180deg, rgb(180, 21, 21) 0%, rgba(200, 20, 20, 1) 88%, rgb(143, 22, 22) 97%);
  padding: 5px;
  box-shadow: 0px -8px 8px 10px rgba(0, 0, 0, 0.5);
}
img {
  text-align: center;
  padding-bottom: 5px;
}
a {
  text-align: center;
}
</style>
