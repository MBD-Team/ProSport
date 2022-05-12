import { createApp } from 'vue';
import App from './App.vue';

import './main.scss';

import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all.js';

import './registerServiceWorker';

import router from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDw9tnK8hRsbSG7sfg_8YnwYUqG9Rh_oMg',
  authDomain: 'prosport-c559e.firebaseapp.com',
  projectId: 'prosport-c559e',
  storageBucket: 'prosport-c559e.appspot.com',
  messagingSenderId: '734931600540',
  appId: '1:734931600540:web:456f41cbc5a738138e5959',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
