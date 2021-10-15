<template>
  <nav class="row p-1">
    <div class="col-4"></div>
    <a class="col-4 overflow-hidden" href="#">
      <img src="@/assets/PS_Logo_doublebizeps.svg" width="220" height="55" class="" alt="PS_Logo" />
    </a>
    <div class="col-4 d-flex align-items-center justify-content-end" v-if="user != null">
      <button class="mb-1 btn btn-outline-dark me-2" @click="settings()">
        <i class="fas fa-user-cog" style="font-size: 30px"></i>
      </button>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { currentUser } from '@/router';
export default defineComponent({
  setup() {
    return { user: currentUser };
  },

  methods: {
    settings() {
      this.$router.push('/Settings');
    },
  },
});
</script>
<style scoped lang="scss">
nav {
  background: linear-gradient(180deg, var(--navbarColor1) 0%, var(--navbarColor2) 88%, var(--navbarColor3) 97%);
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
