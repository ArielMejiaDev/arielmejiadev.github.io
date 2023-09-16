<script setup>

import LightNavbar from "./LightNavbar";
</script>

<template>
  <NuxtLayout>

    <section class="overflow-hidden text-gray-700 body-font bg-cover bg-no-repeat relative" style="background: url('/images/splatters/splatter.jpeg')">

    <LightNavbar />

    <div class="hidden md:block absolute top-10 -left-5 z-0">
      <img src="/images/assets/8.png" alt="floating purple liquid">
    </div>

    <div class="hidden md:block absolute bottom-0 -left-5 z-0">
      <img src="/images/assets/9.png" alt="floating purple liquid">
    </div>

    <div class="hidden md:block absolute top-24 right-0 z-0">
      <img src="/images/assets/10.png" alt="floating dark triangle">
    </div>

    <div class="container mx-auto">

      <div v-if="$slots.title" class="flex justify-center my-4 lg:mt-20 lg:mb-10 mx-4">
        <h2 style="right: -1rem; bottom: -1.5rem; text-shadow: rgb(138,124,174) 3px 3px; line-height: 72px;transform: translateX(0px) translateY(0px) rotate(-2deg) skewX(0deg) skewY(0deg) scaleX(1) scaleY(1);" class="w-full sm:w-auto inline-block py-1 px-10 my-8 mx-0 text-4xl md:text-5xl lg:text-7xl leading-none text-center uppercase font-extrabold tracking-tighter text-center text-gray-50 bg-purple-700 bg-opacity-50 border-0 border-gray-900 border-solid box-border">
          <slot name="title" />
        </h2>
      </div>

      <slot />

      <div class="p-6 mx-auto text-right text-sm lg:text-lg">

        <slot name="footer" />

      </div>

    </div>

  </section>

  </NuxtLayout>
</template>