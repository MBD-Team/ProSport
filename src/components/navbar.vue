<template>
  <div id="navbar">
    <nav class="row g-2">
      <div class="col-4"></div>
      <a class="col-4" href="#">
        <img src="@/assets/PS_Logo_doublebizeps.svg" width="220" height="55" class="" alt="PS_Logo" />
      </a>
      <div class="col-4"><div class="d-flex align-items-center" v-if="admin">
      <button class="btn btn-outline-dark me-2" @click="settings()">
        <i class="fas fa-user-cog" style="font-size: 30px"></i>
      </button>
    </div></div>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { isAdmin } from '@/API';

export default defineComponent({
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      admin: false,
    };
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    fetchData() {
      isAdmin();
      console.log('test');
      this.admin = isAdmin();
      console.log(this.admin);
    },
    settings() {
      this.$router.push('/Settings');
    },
  },
});
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
