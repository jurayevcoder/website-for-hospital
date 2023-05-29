<script setup>
import { ref, reactive, onMounted } from 'vue'
import { db } from '@/main'
import { collection, onSnapshot, updateDoc, doc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { toast } from 'vue3-toastify'

let nowUser = reactive({
  fullname: '',
  address: '',
  age: '',
  phone: '',
  birthday: '',
  job: '',
  website: '',
  email: '',
  description: '',
  user_photo: ''
})

onMounted(() => {
  onSnapshot(collection(db, 'doctor'), (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (localStorage.getItem('more') == doc.data().uid) {
        nowUser.fullname = doc.data().fullname
        nowUser.address = doc.data().address
        nowUser.age = doc.data().age
        nowUser.phone = doc.data().phone
        nowUser.birthday = doc.data().birthday
        nowUser.job = doc.data().job
        nowUser.website = doc.data().website
        nowUser.email = doc.data().email
        nowUser.description = doc.data().description
        nowUser.user_photo = doc.data().user_photo
      }
    })
  })
})
</script>

<template>
  <div class="container py-10">
    <div class="mt-20 flex justify-between gap-7">
      <div class="flex flex-col items-center gap-4 border-r-2 border-gray-200 w-[400px]">
        <img :src="nowUser.user_photo" class="w-60 h-60 rounded-full" alt="" />
        <h1 class="text-[30px] text-black">{{ nowUser.fullname }}</h1>
        <p class="text-[20px] text-gray-700">{{ nowUser.job }}</p>
        <div class="flex flex-col items-start ml-5 gap-5">
          <div class="flex justify-center items-center gap-1">
            <i class="bx bx-location-plus text-[20px] text-red-600"></i>
            <p class="text-black">{{ nowUser.address }}</p>
          </div>
          <div class="flex flex-col items-start gap-1">
            <div class="flex justify-center items-center gap-1">
              <i class="bx bxl-instagram text-[20px]"></i>
              <p class="text-black hover:underline hover:cursor-pointer hover:text-blue-600">
                Instagram
              </p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <i class="bx bxl-youtube text-[20px]"></i>
              <p class="text-black hover:underline hover:cursor-pointer hover:text-blue-600">
                You Tube
              </p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <i class="bx bxl-tiktok text-[20px]"></i>
              <p class="text-black hover:underline hover:cursor-pointer hover:text-blue-600">
                TikTok
              </p>
            </div>
            <div class="flex justify-center items-center gap-1">
              <i class="bx bxl-linkedin-square text-[20px]"></i>
              <p class="text-black hover:underline hover:cursor-pointer hover:text-blue-600">
                LinkedIn
              </p>
            </div>
          </div>
          <div class="flex flex-col items-start gap-2">
            <h1 class="text-[20px]">Ishlagan joyi:</h1>
            <p class="text-black">
              118 - shifoxona, 32 - shifohona, Hususiy shifohona, Yoshlar klinikasi
            </p>
          </div>
          <div class="flex flex-col items-start gap-2">
            <h1 class="text-[20px]">Tajribasi:</h1>
            <p class="text-black">10 yilik tajriba</p>
          </div>
          <div class="flex flex-col items-start gap-2">
            <h1 class="text-[20px]">Bemorlari:</h1>
            <div class="flex items-center gap-2">
              <p class="text-black">Hamma bemorlar soni:</p>
              <p class="text-blue-700">360 ta</p>
            </div>
            <div class="flex items-center gap-2">
              <p class="text-black">Davolangan bemorlar soni:</p>
              <p class="text-green-700">300 ta</p>
            </div>
            <div class="flex items-center gap-2">
              <p class="text-black">Davolanmagan bemorlar soni:</p>
              <p class="text-red-600">60 ta</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col gap-5 mt-6">
        <div class="flex flex-col gap-3">
          <h1 class="text-[40px]">O'zi haqida ma'lumot:</h1>
          <p class="text-[20px]">
            {{ nowUser.description }}
          </p>
          <p class="text-[20px]">Birthday : {{ nowUser.birthday }}</p>
          <p class="text-[20px]">Website : {{ nowUser.website }}</p>
          <p class="text-[20px]">Yoshi : {{ nowUser.age }}</p>
          <p class="text-[20px]">Telefon : {{ nowUser.phone }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
