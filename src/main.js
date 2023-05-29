import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD-CwO2f7_iA0RCFKS3u2HhGk3_hq8RqcM',
  authDomain: 'soglomlashtirish.firebaseapp.com',
  projectId: 'soglomlashtirish',
  storageBucket: 'soglomlashtirish.appspot.com',
  messagingSenderId: '887365633771',
  appId: '1:887365633771:web:2da4f22f3a148c79aa60ae',
  measurementId: 'G-96NH1JGKRB'
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

export { db, firebaseApp }
