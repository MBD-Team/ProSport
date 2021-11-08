<template>
  <div class="container d-flex align-items-stretch justify-content-center flex-column" style="height: calc(100vh - 200px)">
    <div class="card card-default w-75" style="margin-left: 12.5%">
      <div class="card-header header">Anmeldung</div>
      <div class="card-body">
        <form @submit.prevent="login()" autocomplete="off">
          <div class="m-4 alert alert-danger text-center" v-if="error">Username or password is not correct</div>
          <div class="p-4 row">
            <label class="col-4" for="email">Email:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" id="email" type="text" placeholder="email" v-model="email" autocomplete="off" />
            </div>
          </div>
          <div class="p-4 row">
            <label class="col-4" for="Password">Passwort:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" id="password" type="password" placeholder="passwort" v-model="password" autocomplete="off" />
            </div>
          </div>
          <button class="loginBtn" type="submit" v-if="!loggingIn">Anmelden</button>
          <span v-if="loggingIn" class="m-4 spinner-border spinner-border-sm text-primary"></span>
          <button class="loginBtn" type="button" @click="register()">Registrieren</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as API from '@/API';

export default defineComponent({
  data() {
    return {
      password: '',
      email: '',
      error: false,
      loggingIn: false,
    };
  },
  methods: {
    async login() {
      this.error = false;
      this.loggingIn = true;
      if (await API.login(this.email, this.password)) {
        console.log('admin logged in with:' + this.email);
        this.email = '';
        this.password = '';
        this.$router.push('/');
      } else {
        this.password = '';
        this.error = true;
      }
      this.loggingIn = false;
    },
    register() {
      this.$router.push('/register');
    },
  },
});
</script>
<style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
