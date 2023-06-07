<script setup>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Header />
  <main class="dark min-h-screen">
    <section id="main" class="">
      <div>
        <router-view></router-view>
      </div>
    </section>
  </main>
  <Footer />
</template>
