<template>
  <div class="container d-flex align-items-stretch justify-content-center flex-column" style="height: calc(100vh - 200px)">
    <div class="card card-default w-75" style="margin-left: 12.5%">
      <div class="card-header header">Anmeldung</div>
      <div class="card-body">
        <form @submit.prevent="login()" autocomplete="off">
          <div class="m-4 alert alert-danger text-center" v-if="error">Username or password is not correct</div>

          <div class="input-contain mb-4">
            <input
              type="text"
              id="fname"
              name="fname"
              autocomplete="off"
              aria-labelledby="placeholder-fname"
              v-model="email"
              :class="{ dirty: email }"
              required
            />
            <label class="placeholder-text" for="fname" id="placeholder-fname">
              <div class="text">Email</div>
            </label>
          </div>
          <div class="input-contain mb-4">
            <input
              type="password"
              id="fname"
              name="fname"
              autocomplete="off"
              aria-labelledby="placeholder-fname"
              v-model="password"
              :class="{ dirty: password }"
              required
            />
            <label class="placeholder-text" for="fname" id="placeholder-fname">
              <div class="text">Passwort</div>
            </label>
          </div>
          <div class="row">
            <div class="col-6 col-lg-2">
              <button class="loginBtn p-1" style="width: 100%" type="submit" v-if="!loggingIn">Anmelden</button>
              <span v-else class="spinner-border spinner-border-sm text-primary cursorDefault" style="height: 2 rem; width: 2 rem"></span>
            </div>
            <div class="col-6 col-lg-2">
              <button class="loginBtn p-1" style="width: 100%" type="button" v-if="!loggingIn" @click="register()">Registrieren</button>
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
  mounted() {
    let input_elements = document.querySelectorAll('input');
    for (let input_element of input_elements) {
      input_element?.setAttribute('value', '');
      if (input_element) {
        input_element.addEventListener('keyup', () => {
          input_element!.setAttribute('value', input_element!.value);
        });
      }
    }
  },
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
      try {
        await API.login(this.email, this.password);
        console.log('admin logged in with:' + this.email);
        this.email = '';
        this.password = '';
        this.$router.push('/');
      } catch (e) {
        this.error = true;
        console.error({ "couldn't login": e });
      } finally {
        this.password = '';
        this.loggingIn = false;
      }
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
