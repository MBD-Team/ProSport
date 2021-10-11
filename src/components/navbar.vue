<template>
  <nav class="d-flex">
    <div>
      <a class="" href="#">
        <img src="@/assets/PS_Logo.svg" width="60" height="60" class="" alt="PS_Logo" />
      </a>
    </div>
    <div class="d-flex align-items-center" v-if="JSON.parse(admin)">
      <button class="btn btn-outline-dark me-2" @click="settings()">
        <i class="fas fa-user-cog" style="font-size: 30px"></i>
      </button>
    </div>
  </nav>
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
nav {
  background-color: red;
  padding: 5px;
  justify-content: space-between;
}

img {
  margin-left: 25px;
}
</style>
