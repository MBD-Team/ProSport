<template>
  <div class="container d-flex align-items-stretch justify-content-center flex-column" style="height: calc(100vh - 200px)">
    <div class="card card-default w-75" style="margin-left: 12.5%">
      <div class="card-header">Login</div>
      <div class="card-body">
        <form @submit.prevent="login()" autocomplete="off">
          <div class="p-4 row">
            <label class="col-4" for="Username">Username:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" id="username" type="text" placeholder="username" v-model="username" autocomplete="off" />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="Password">Password:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" id="password" type="password" placeholder="password" v-model="password" autocomplete="off" />
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { loginAdmin } from '@/API';

export default defineComponent({
  data() {
    return {
      password: '',
      username: '',
    };
  },
  methods: {
    login() {
      if (loginAdmin(this.username, this.password)) {
        console.log('admin logged in as:' + this.username);
        this.username = '';
        this.password = '';
        this.$router.push('/');
      } else {
        this.password = '';
      }
    },
  },
});
</script>
<style lang="scss" scoped></style>
