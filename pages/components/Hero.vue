<script setup>

</script>

<template>
  <!-- Hero -->
  <main class="flex items-center">

    <div class="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 xl:flex-row">

      <div class="w-6/6 mb-10 lg:max-w-lg lg:w-full xl:w-1/2 xl:mb-0">
        <img class="transform hover:rotate-2" alt="Me as a head in a jar" src="images/avatar.png">
      </div>

      <div class="relative z-10 flex flex-col items-center text-center lg:flex-grow xl:w-1/2 py-10 lg:px-24 px-4 md:items-start md:text-left transform -rotate-0 sm:-rotate-2 bg-cover bg-no-repeat" style="background: url('images/splatters/splatter.jpeg')">
        <h1 class="text-4xl md:text-5xl lg:text-7xl leading-none text-center uppercase font-extrabold tracking-tighter text-center text-gray-800 lg:text-left" style="right: -1rem; bottom: -1.5rem; text-shadow: rgb(80,223,255) 3px 3px; line-height: 72px;transform: translateX(0px) translateY(0px) rotate(-2deg) skewX(0deg) skewY(0deg) scaleX(1) scaleY(1);">
          Ariel Mejia Dev
        </h1>

        <h2 class="w-full inline-block py-1 px-10 my-8 mx-0 text-2xl leading-none text-center text-white bg-purple-700 bg-opacity-50 border-0 border-gray-900 border-solid box-border" style='transform: translateX(0px) translateY(0px) rotate(-2deg) skewX(0deg) skewY(0deg) scaleX(1) scaleY(1);'>
          Laravel Developer
        </h2>

        <p class="mb-8 text-base leading-relaxed text-center text-gray-700 lg:text-left lg:text-1xl">
          Hi! I am a software developer with <span id="experience"></span>+ years of experience
          working with
          backend and frontend technologies, such as <span class="text-purple-500 font-bold">PHP,
                                Laravel, Symfony, Javascript, VueJS</span> and other technologies.
          <!--                I seek to collaborate in a position that allows me to create software with these technologies. -->
        </p>

        <div class="flex items-center flex-wrap w-full -mt-4 -mx-4 text-center lg:text-left ">
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <img src="images/technologies/laravel.svg" class="h-16 w-16 sm:h-20 sm:w-20" alt="Laravel logo">
          </div>
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <img src="images/technologies/vue_logo.svg" class="h-16 w-16 sm:h-20 sm:w-20" alt="Vue logo">
          </div>
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <img src="images/technologies/tailwindcss_logo.svg" class="h-16 w-16 sm:h-20 sm:w-20" alt="Tailwind logo">
          </div>
          <div class="w-1/4 p-4 mt-4 sm:w-1/4">
            <img src="images/technologies/inertia_logo.svg" class="h-16 w-16 sm:h-20 sm:w-20" alt="InertiaJS logo">
          </div>
        </div>
      </div>
    </div>

  </main>
</template>