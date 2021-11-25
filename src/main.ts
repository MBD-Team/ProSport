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
if (process.env.NODE_ENV === 'production') {
  const firebaseConfig = {
    apiKey: 'AIzaSyDxATvr8y_oSKxYWUATFshWPd1MKY_7Pok',
    authDomain: 'prosportlive-2986b.firebaseapp.com',
    projectId: 'prosportlive-2986b',
    storageBucket: 'prosportlive-2986b.appspot.com',
    messagingSenderId: '843803455202',
    appId: '1:843803455202:web:9647466f0cab0e7587f8bb',
    measurementId: 'G-MV4JGDQS2F',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
} else {
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
}

createApp(App).use(router).mount('#app');
