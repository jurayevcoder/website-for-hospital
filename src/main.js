import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBW9kvsvZUkA5CQXVck45rM3_df5ch6x9M",
  authDomain: "hospital-ec6dd.firebaseapp.com",
  projectId: "hospital-ec6dd",
  storageBucket: "hospital-ec6dd.appspot.com",
  messagingSenderId: "699477188670",
  appId: "1:699477188670:web:b4037e4e5e76b5f99d716f",
  measurementId: "G-PD7EVS3QNP"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

export { db, firebaseApp }
