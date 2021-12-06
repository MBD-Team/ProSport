<template>
  <div class="container d-flex align-items-stretch justify-content-center flex-column" style="margin-top: 20vh">
    <div class="card card-default w-75" style="margin-left: 12.5%; border: none">
      <div class="card-header header" style="border: 1px solid black; border-bottom: none">Anmeldung</div>
      <div class="card-body" style="border: 1px solid black; border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)">
        <form @submit.prevent="register()" autocomplete="off">
          <div class="m-4 alert alert-danger text-center" v-if="error">{{ error }}</div>
          <div class="m-4 alert alert-success text-center" v-if="success">{{ success }}</div>

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
          <div class="input-contain mb-4">
            <input
              type="password"
              id="fname"
              name="fname"
              autocomplete="off"
              aria-labelledby="placeholder-fname"
              v-model="confirmed"
              :class="{ dirty: confirmed }"
              required
            />
            <label class="placeholder-text" for="fname" id="placeholder-fname">
              <div class="text">bestätigen</div>
            </label>
          </div>
          <div class="row">
            <div class="col-6 col-lg-3">
              <button class="loginBtn" style="width: 100%; height: 2rem" type="submit" v-if="!registering">Registrieren</button>
              <span v-if="registering" class="m-4 spinner-border spinner-border-sm text-primary cursorDefault"></span>
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
      confirmed: '',
      password: '',
      email: '',
      error: '',
      success: '',
      registering: false,
    };
  },
  methods: {
    async register() {
      if (this.confirmed !== this.password) {
        this.error = 'Die Passwörter stimmen nicht überein';
        return;
      }
      this.registering = true;
      try {
        await API.register(this.email, this.password);
        this.success = 'Accout erfolgreich erstellt';
        this.confirmed = '';
        this.password = '';
        this.email = '';
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
