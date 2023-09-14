<script setup>
import testimonials from "../scripts/testimonials";

const randomTestimonials = ref([]);

const randomizeArray = function (array, items) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, items);
}

onMounted(() => {
  randomTestimonials.value = randomizeArray(testimonials, 3);
})
</script>

<template>
  <!-- Testimonials -->
  <section class="relative min-h-screen py-4 md:py-16 px-4 mx-auto max-w-6xl leading-6 text-gray-900 border-0 border-gray-900 border-solid box-border bg-cover bg-no-repeat" style="background: url('/images/splatters/splatter.jpeg')">

    <div class="hidden md:block absolute -top-10 -left-20 z-0">
      <img src="/images/assets/5.png" alt="floating dark triangles">
    </div>

    <div class="hidden md:block absolute bottom-10 -right-20 z-0">
      <img src="/images/assets/6.png" alt="floating dark triangle" loading="lazy">
    </div>

    <div class="flex justify-center mb-4 md:mb-20">
      <h2 style="right: -1rem; bottom: -1.5rem; text-shadow: rgb(138,124,174) 3px 3px; line-height: 72px;transform: translateX(0px) translateY(0px) rotate(-2deg) skewX(0deg) skewY(0deg) scaleX(1) scaleY(1);" class="inline-block py-1 px-10 my-8 mx-0 text-4xl md:text-5xl lg:text-7xl leading-none text-center uppercase font-extrabold tracking-tighter text-center text-gray-50 bg-purple-700 bg-opacity-50 border-0 border-gray-900 border-solid box-border">
        How I add value to teams
      </h2>
    </div>

    <div class="flex content-center flex-wrap text-gray-900 border-0 border-gray-900 border-solid box-border">

      <div v-for="testimonial in randomTestimonials" class="relative mx-5 py-4 px-6 w-full font-mono bg-indigo-100 border border-gray-900 border-solid shadow-md lg:flex-1 lg:w-1/3" style="border: 1px solid;padding: 10px;box-shadow: 10px 10px rgba(83, 223, 255, 0.3);">

        <span class="absolute text-5xl font-bold border-0 border-gray-900 border-solid box-border" style="left: -1rem; top: -1.5rem; text-shadow: rgb(184, 255, 243) 3px 3px; line-height: 72px;">“</span>

        <div class="flex flex-col justify-between h-full">
          <p class="m-0 border-0 border-gray-900 border-solid box-border">{{ testimonial.comment }}</p>

          <div class="inline-flex items-center mt-6 italic no-underline bg-transparent border-0 border-gray-900 border-solid mb-4">
            <img :src="'/images/testimonials/' + testimonial.avatar_url" :alt="testimonial.name" loading="lazy" height="48" width="48" class="block mr-4 max-w-full h-auto italic align-middle rounded-full border border-gray-900 border-solid box-border shadow-xs" />
            <p class="m-0 text-sm italic leading-5 border-0 border-gray-900 border-solid box-border">
              <span class="block italic font-bold border-0 border-gray-900 border-solid box-border hover:text-pink-600">
                {{ testimonial.name }}
              </span>
              {{ testimonial.position }}
            </p>
          </div>
        </div>

        <span class="absolute text-5xl font-bold border-0 border-gray-900 border-solid box-border" style="right: -1rem; bottom: -1.5rem; text-shadow: rgb(184, 255, 243) 3px 3px; line-height: 72px;">”</span>

      </div>

    </div>

    <div class="mx-auto mt-4 max-w-6xl text-right border-0 border-gray-900 border-solid box-border relative z-10">
      <NuxtLink to="/portfolio" class="text-lg leading-7 font-extrabold text-indigo-600 no-underline bg-transparent border-0 border-gray-900 border-solid cursor-pointer box-border hover:text-gray-900">My
        Portfolio →
      </NuxtLink>
    </div>
  </section>
</template>