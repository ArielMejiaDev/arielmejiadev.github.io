<script setup>
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import DarkNavbar from "../layouts/components/dark/DarkNavbar";

useSeoMeta({
  title: 'Ariel Mejia Dev - Home',
  ogTitle: 'Ariel Mejia Personal Site',
  description: 'Ariel Mejia Personal Site, You can check my blog, technical stuffs, experience & open source work',
  ogDescription: 'Ariel Mejia Personal Site, You can check my blog, technical stuffs, experience & open source work',
  ogImage: 'https://arielmejia.dev/images/preview.png',
  ogUrl: 'https://arielmejia.dev',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://arielmejia.dev/images/preview.png'
});
</script>

<template>
  <NuxtLayout>
    <section class="text-gray-700 body-font min-h-screen bg-cover bg-no-repeat relative" style="background: url('/images/splatters/splatter-dark.png')">

      <div class="hidden md:block absolute bottom-1 right-1 z-0">
        <img src="/images/assets/1.png" alt="floating purple triangle">
      </div>

      <div class="hidden md:block absolute -top-10 -left-20 z-0">
        <img src="/images/assets/2.png" alt="floating yellow triangle">
      </div>

      <!-- Navbar -->
      <DarkNavbar />

      <Hero />

    </section>

      <Testimonials />
  </NuxtLayout>
</template>