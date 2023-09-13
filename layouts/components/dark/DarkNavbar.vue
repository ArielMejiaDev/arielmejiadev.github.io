<script setup>
</script>

<template>
  <!-- Navbar -->
  <div class="text-gray-50 bg-transparent body-font relative z-10">
    <div class="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
      <div class="lg:pl-6 focus:outline-none md:mr-auto mx-auto mb-10 md:mb-0 w-full md:w-auto">
        <div class="w-full inline-flex items-center justify-between">
          <NuxtLink to="/" class="font-semibold tracking-tighter transition duration-1000 ease-in-out transform text-gray-50 lg:text-md text-bold lg:mr-8">
            Ariel Mejia Dev
          </NuxtLink>
          <a download href="./Software_Developer_Ariel_Mejia Resume.pdf" class="md:hidden ml-auto items-center text-sm px-2 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold focus:outline-none transition duration-500 ease-in-out">Download
            CV
          </a>
        </div>
      </div>
      <nav class="flex flex-wrap items-center justify-between sm:justify-center sm:mx-auto">
        <NuxtLink to="/portfolio" class="sm:mx-5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white my-1">Portfolio</NuxtLink>
        <NuxtLink to="/about-me" class="sm:mx-5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white my-1">About Me</NuxtLink>
        <NuxtLink to="/blog" class="sm:mx-5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white my-1">Blog</NuxtLink>
        <a href="https://open.spotify.com/show/4t6vLTMNvuCWnbAvNISILQ?si=0c72521c08a9430e" target="_blank" rel="noreferrer" class="sm:mx-5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white my-1">Podcast</a>
        <NuxtLink href="/contact-me" class="sm:mx-5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white my-1">Contact me</NuxtLink>
      </nav>
      <a download href="/Software_Developer_Ariel_Mejia_Resume.pdf" class="hidden md:block ml-auto items-center text-sm px-2 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 font-semibold focus:outline-none transition duration-500 ease-in-out">
        Download Resume
      </a>
    </div>
  </div>
</template>