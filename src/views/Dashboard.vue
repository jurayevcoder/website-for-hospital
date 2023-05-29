<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <main class="dark">
    <section id="main" class="">
      <Header />
      <div>
        <router-view></router-view>
      </div>
      <Footer />
    </section>
  </main>
</template>
