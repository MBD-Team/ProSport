<template>
  <div class="container d-flex align-items-stretch justify-content-center flex-column" style="height: calc(100vh - 200px)">
    <div class="card card-default w-75" style="margin-left: 12.5%">
      <div class="card-header header">Anmeldung</div>
      <div class="card-body">
        <form @submit.prevent="register()" autocomplete="off">
          <div class="m-4 alert alert-danger text-center" v-if="error">{{ error }}</div>

          <div class="mb-4 input-group">
            <span class="input-group-text col-4 col-lg-2" style="background-color: #f2f2f2">Email:</span>
            <input minlength="3" class="form-control" id="email" type="text" v-model="email" autocomplete="off" required />
          </div>

          <div class="mb-4 input-group">
            <span class="input-group-text col-4 col-lg-2" style="background-color: #f2f2f2">Passwort:</span>
            <input minlength="3" class="form-control" id="password" type="password" autocomplete="off" required />
          </div>
          <div class="mb-4 input-group">
            <span class="input-group-text col-4 col-lg-2" style="background-color: #f2f2f2">
              Passwort
              <br />
              bestätigen:
            </span>
            <input minlength="3" class="form-control" id="password" type="password" v-model="confirmed" autocomplete="off" required />
          </div>
          <div class="row">
            <div class="col-6 col-lg-2">
              <button class="loginBtn p-1" style="width: 100%" type="submit" v-if="!registering">Registrieren</button>
              <span v-if="registering" class="m-4 spinner-border spinner-border-sm text-primary"></span>
            </div>
          </div>
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
      if (this.confirmed !== this.password) {
        this.error = 'Die passwörter stimmen nicht überein';
        return;
      }
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
