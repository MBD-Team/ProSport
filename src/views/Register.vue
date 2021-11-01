<template>
  <div class="container d-flex align-items-stretch justify-content-center flex-column" style="height: calc(100vh - 200px)">
    <div class="card card-default w-75" style="margin-left: 12.5%">
      <div class="card-header header">Anmeldung</div>
      <div class="card-body">
        <form @submit.prevent="register()" autocomplete="off">
          <div class="m-4 alert alert-danger text-center" v-if="error">{{ error }}</div>
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
          <div class="p-4 row">
            <label class="col-4" for="Password">Passwort bestätigen:</label>
            <div class="col-8">
              <input minlength="3" class="form-control" id="password" type="password" placeholder="passwort" v-model="confirmed" autocomplete="off" />
            </div>
          </div>
          <button class="loginBtn m-4 col-1" type="submit" v-if="!registering">Registrieren</button>
          <span v-if="registering" class="m-4 spinner-border spinner-border-sm text-primary"></span>
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
      confirmed: '',
      password: '',
      email: '',
      error: '',
      registering: false,
    };
  },
  methods: {
    async register() {
      if (this.confirmed !== this.password) this.error = 'Die passwörter stimmen nicht überein';
      this.registering = true;
      try {
        await API.register(this.email, this.password);
      } catch (e) {
        console.log("couldn't register", e);
        this.error = 'Der Account konnte leider nicht registriert werden';
      } finally {
        this.registering = false;
      }
    },
  },
});
</script>
<style lang="scss" scoped></style>
