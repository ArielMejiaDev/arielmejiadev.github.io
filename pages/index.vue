<script setup>
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import DarkNavbar from "../layouts/components/dark/DarkNavbar";
</script>

<template>
  <NuxtLayout>
    <section class="text-gray-700 body-font min-h-screen bg-cover bg-no-repeat relative" style="background: url('images/splatters/splatter-dark.png')">

      <div class="hidden md:block absolute bottom-1 right-1 z-0">
        <img src="images/assets/1.png" alt="floating purple triangle">
      </div>

      <div class="hidden md:block absolute -top-10 -left-20 z-0">
        <img src="images/assets/2.png" alt="floating yellow triangle">
      </div>

      <!-- Navbar -->
      <DarkNavbar />

      <Hero />

    </section>

      <Testimonials />
  </NuxtLayout>
</template>