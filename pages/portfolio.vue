<script setup>
import portfolio from "../content/scripts/portfolio";
import LightNavbar from "../layouts/components/light/LightNavbar";

const selectedPortfolio = ref([]);

const currentFilter = ref('apps');

const selectFilter = function (filter) {
  currentFilter.value = filter;

  selectedPortfolio.value = portfolio.filter(function (portfolioItem) {
    return portfolioItem.category === currentFilter.value;
  })
};

onMounted(() => {
  selectFilter(currentFilter.value);
});
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

      <div class="flex justify-center my-4 lg:mt-20 lg:mb-10 mx-4">
        <h2 style="right: -1rem; bottom: -1.5rem; text-shadow: rgb(138,124,174) 3px 3px; line-height: 72px;transform: translateX(0px) translateY(0px) rotate(-2deg) skewX(0deg) skewY(0deg) scaleX(1) scaleY(1);" class="w-full sm:w-auto inline-block py-1 px-10 my-8 mx-0 text-4xl md:text-5xl lg:text-7xl leading-none text-center uppercase font-extrabold tracking-tighter text-center text-gray-50 bg-purple-700 bg-opacity-50 border-0 border-gray-900 border-solid box-border">
          Portfolio
        </h2>
      </div>

      <div class="flex space-x-1 rounded-xl bg-white border-2 border-purple-500 p-1 mx-8">
        <button @click="selectFilter('apps')" :class="currentFilter === 'apps' ? 'bg-purple-300 shadow' : 'hover:bg-purple-300/[0.50]'" class="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700">
          Apps
        </button>
        <!--        <button @click="selectFilter('products')" :class="currentFilter === 'products' ? 'bg-purple-300 shadow' : 'hover:bg-purple-300/[0.50]'" class="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700">-->
        <!--          Products-->
        <!--        </button>-->
        <button @click="selectFilter('own-packages')" :class="currentFilter === 'own-packages' ? 'bg-purple-300 shadow' : 'hover:bg-purple-300/[0.50]'" class="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700">
          Own Packages
        </button>
        <button @click="selectFilter('open-source')" :class="currentFilter === 'open-source-contributions' ? 'bg-purple-300 shadow' : 'hover:bg-purple-300/[0.50]'" class="w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-purple-700">
          Open Source Contributions
        </button>
      </div>

      <div class="min-h-screen flex">

        <div class="flex flex-wrap m-4 relative z-10">

          <div v-for="(portfolio, index) in selectedPortfolio" :key="index" class="xl:w-1/3 md:w-1/2 p-4">
            <div class="bg-gray-100 rounded p-6 space-y-4">
              <a :href="portfolio.url" target="_blank" rel="noreferrer">
                <img class="h-56 w-full bg-white mb-6 rounded" :class="portfolio.image_cover ? 'object-cover' : null" :src="`/images/portfolio/${portfolio.image}`" :alt="portfolio.name">
              </a>
              <div class="flex">
                <h3 class="text-purple-600 text-xs font-semibold title-font my-2">
                  {{ portfolio.technologies }}
                </h3>
              </div>
              <a :href="portfolio.url" target="_blank" rel="noreferrer" class="text-lg text-gray-900 font-medium title-font mb-4">
                {{ portfolio.name }}
              </a>
              <p class="leading-relaxed text-sm font-medium text-gray-700">{{ portfolio.excerpt }}</p>
            </div>
          </div>

        </div>
      </div>

      <div class="p-6 mx-auto text-right text-sm lg:text-lg">
        <a href="https://github.com/ArielMejiaDev?tab=repositories" target="_blank" rel="noreferrer" class=" mx-4 leading-7 font-extrabold text-indigo-600 no-underline bg-transparent border-0 border-gray-900 border-solid cursor-pointer box-border hover:text-gray-900">
          More in my github account →
        </a>
      </div>

    </div>

  </section>
</NuxtLayout>
</template>