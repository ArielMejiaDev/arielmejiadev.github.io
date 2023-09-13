<script setup>
import DarkNavbar from "../layouts/components/dark/DarkNavbar";

const subject = ref('');
const message = ref('');
const error = ref(null);

const submit = function () {

  if (subject.value.length === 0) {
    error.value = 'subject is required';
    console.log(error.value);
    return;
  }

  if (subject.value.length < 5) {
    error.value = 'subject minimum length is 5 characters';
    console.log(error.value);
    return;
  }

  if (message.value.length === 0) {
    error.value = 'message is required';
    console.log(error.value);
    return;
  }

  if (message.value.length < 20) {
    error.value = 'message minimum length is 20 characters';
    console.log(error.value);
    return;
  }

  error.value = '';

  const link = `mailto:arielmejiadev@gmail.com?subject=${subject.value}&body=${message.value}`

  window.open(link, '_blank', 'noreferrer');
}
</script>

<template>
  <NuxtLayout>

    <section class="text-gray-600 body-font relative min-h-screen bg-cover bg-no-repeat relative overflow-hidden" style="background: url('images/splatters/splatter-dark.png')">

      <div class="hidden md:block absolute top-0 -left-10 z-0 transform rotate-45">
        <img src="images/assets/5.png" alt="floating dark triangles">
      </div>

      <div class="hidden md:block absolute bottom-0 right-0 z-0 transform rotate-90">
        <img src="images/assets/2.png" alt="floating yellow triangle">
      </div>

      <div class="hidden md:block absolute bottom-24 left-0 z-0 transform rotate-90">
        <img src="images/assets/10.png" alt="floating purple liquid">
      </div>

      <!-- Navbar -->
      <DarkNavbar />

      <div class="container px-5 md:py-24 mx-auto">

        <div class="flex justify-center my-4 lg:my-20 mx-4">
          <h2 style="right: -1rem; bottom: -1.5rem; text-shadow: rgb(138,124,174) 3px 3px; line-height: 72px;transform: translateX(0px) translateY(0px) rotate(-2deg) skewX(0deg) skewY(0deg) scaleX(1) scaleY(1);" class="w-full sm:w-auto inline-block py-1 px-10 my-8 mx-0 text-4xl md:text-5xl lg:text-7xl leading-none text-center uppercase font-extrabold tracking-tighter text-gray-50 bg-purple-700 bg-opacity-50 border-0 border-gray-900 border-solid box-border">
            Contact Me
          </h2>
        </div>

        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <form @submit.prevent="submit" class="flex flex-wrap -m-2">

            <div class="p-2 w-full">
              <div class="relative" data-children-count="1">
                <label for="subject" class="hidden">Subject</label>
                <input v-model="subject" type="text" id="subject" class="w-full bg-gray-50 border border-gray-300 focus:bg-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Subject">
              </div>
            </div>

            <div class="p-2 w-full">
              <div class="relative" data-children-count="1">
                <label for="message" class="hidden">Message</label>
                <textarea v-model="message" id="message" class="w-full bg-gray-50 border border-gray-300 focus:bg-white h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Message"></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <p class="text-white text-xs font-bold mt-1" v-show="error" v-text="error"></p>
              <button type="submit" class="flex mx-auto text-black bg-white font-extrabold border-0 py-4 px-16 focus:outline-none hover:bg-gray-200 focus:bg-gray-200 uppercase tracking-tighter text-xl">Send</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  </NuxtLayout>
</template>