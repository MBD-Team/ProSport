<template>
  <nav class="d-flex unselectable">
    <div class="col-4"></div>
    <a class="col-4 overflow-hidden" style="padding: 5px">
      <img
        src="@/assets/PS_Logo_doublebizeps.svg"
        width="220"
        height="50"
        class=""
        alt="PS_Logo"
        @click="route()"
        @dblclick="$router.push('/admin')"
      />
    </a>

    <div class="col-4 d-flex align-items-center justify-content-end" v-if="user != null">
      <button class="" @click="traningsPlan()" style="height: 45px; width: 45px">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
          <path
            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
          />
        </svg>
      </button>
      <button class="" @click="settings()" style="height: 45px; width: 45px" v-if="userRole == 'admin'">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
          <path
            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
          />
        </svg>
      </button>
      <button class="" @click="logOut()" style="height: 45px; width: 45px">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
          />
          <path
            fill-rule="evenodd"
            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { currentUser } from '@/router';
import * as API from '@/API';
import { userRole } from '@/API';
import { closeList } from './state';
export default defineComponent({
  setup() {
    return { user: currentUser, userRole };
  },
  watch: { user: 'updateRole' },
  methods: {
    settings() {
      this.$router.push('/Settings');
    },
    traningsPlan() {
      this.$router.push('trainingPlan');
    },
    logOut() {
      API.logout();
      this.$router.push('/');
    },
    route() {
      closeList();
      this.$router.push('/');
    },
    async updateRole() {
      userRole.value = (await API.getRole()) as string;
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
button {
  background: linear-gradient(180deg, var(--adminButtons1) 0%, var(--adminButtons2) 85%, var(--adminButtons3) 100%);
  border-radius: 5px;
  margin-right: 0.8vw;
}

button:active {
  background: linear-gradient(180deg, var(--editButton) 0%, var(--editButton2) 75%, var(--editButton3) 97%);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;
  -webkit-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1) inset;

  border-radius: 6px;
  margin-right: 0.8vw;
  transform: scale(0.9);
}
</style>
