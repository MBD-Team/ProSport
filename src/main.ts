import { createApp } from 'vue';
import App from './App.vue';

import './main.scss';

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCo2ze05SBLKVG5xGPdkZUrpe3VACdKosc',
  authDomain: 'prosport-2e3be.firebaseapp.com',
  projectId: 'prosport-2e3be',
  storageBucket: 'prosport-2e3be.appspot.com',
  messagingSenderId: '103339976983',
  appId: '1:103339976983:web:e7dbb5d986bfafe81bef52',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
