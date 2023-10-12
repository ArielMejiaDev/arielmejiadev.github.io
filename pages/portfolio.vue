<script setup>
import LightNavbar from "../layouts/components/light/LightNavbar";

const portfolio = [
  {
    url: 'https://github.com/ArielMejiaDev/recaudar',
    category: 'apps',
    image: 'recaudar.png',
    image_cover: false,
    name: 'Recaudar.org',
    technologies: 'Laravel, Vue, Inertia, Alpine, Tailwind',
    excerpt: 'SAAS platform for non profits to get online donations, profiles, subdomains, themes, subscription plans, etc.'
  },
  {
    url: 'https://play.google.com/store/apps/details?id=com.buildawow.losa_group&hl=es&gl=US',
    category: 'apps',
    image: 'losa_group_app.png',
    image_cover: false,
    name: 'Losa Group Mobile App & Web Admin Panel',
    technologies: 'PHP, MySQL, SQLite, Laravel, Dart, Flutter',
    excerpt: 'Mobile application for Android & IOS to handle properties reservations powder by a Laravel API.'
  },
  {
    url: 'https://empiremusicfestival.com/',
    category: 'apps',
    image: 'emf.jpg',
    image_cover: false,
    name: 'Empire Music Festival Website',
    technologies: 'SASS, Vue',
    excerpt: 'One of the biggest music festival around central & south america, site reflects the vibes and quality of this event.'
  },
  {
    url: 'https://larapex-charts.netlify.app/',
    category: 'own-packages',
    image: 'larapex.png',
    image_cover: true,
    name: 'Larapex Charts - Laravel Package',
    technologies: 'PHP, Javascript, Laravel',
    excerpt: 'Charts without writing a single line of Javascript, for blade templates & Vue components with inertiaJS.'
  },
  {
    url: 'https://json-api-auth.netlify.app/',
    category: 'own-packages',
    image: 'json_api_auth.png',
    image_cover: false,
    name: 'JSON API Authentication - Laravel Package',
    technologies: 'PHP, Laravel',
    excerpt: 'Authentication preset endpoints for APIs, (register, login, logout, etc), works for Laravel Passport or Laravel Sanctum.'
  },
  {
    url: 'https://laravel-pagalogt.netlify.app',
    category: 'own-packages',
    image: 'pagalo_gt.png',
    image_cover: false,
    name: 'PagaloGT Gateway - Laravel Package',
    technologies: 'PHP, Laravel',
    excerpt: 'Laravel package to simplify payments process with PagaloGT payment transactor.'
  },
  {
    url: 'https://github.com/bobbyiliev/laravel-tips-and-tricks-ebook/pulls?q=is%3Amerged+is%3Apr+author%3AArielMejiaDev+',
    category: 'open-source',
    image: 'laravel_tips_and_tricks_ebook.png',
    image_cover: false,
    name: 'Add 6 chapters to the Ebook - Laravel Tips & Tricks',
    technologies: 'PHP, Laravel',
    excerpt: 'I contributed writing six chapters to resolve common requirements using Laravel Framework.'
  },
  {
    url: 'https://github.com/laravel/breeze/pull/82',
    category: 'open-source',
    image: 'laravel.png',
    image_cover: false,
    name: 'Fix CORS Policy Errors - Laravel Breeze',
    technologies: 'PHP, Laravel, Javascript',
    excerpt: 'It fixes an issue when Laravel Breeze had Webpack & Laravel Mix.'
  },
  {
    url: 'https://github.com/laravel/jetstream/pull/797',
    category: 'open-source',
    image: 'laravel.png',
    image_cover: false,
    name: 'Fix CORS Policy Errors - Laravel Jetstream',
    technologies: 'PHP, Laravel, Javascript',
    excerpt: 'It fixes an issue when Laravel Jetstream had Webpack & Laravel Mix.'
  },
  {
    url: 'https://github.com/laravel/spark-next-docs/pull/34',
    category: 'open-source',
    image: 'laravel.png',
    image_cover: false,
    name: 'Spark for paddle Docs - Laravel Spark',
    technologies: 'PHP, Laravel, Javascript',
    excerpt: 'It avoids a duplicate value for a UserFactory, at least for 1,000 users & is easy to override if more subscriptions are required.'
  },
  {
    url: 'https://github.com/spatie/laravel-package-tools/pull/103',
    category: 'open-source',
    image: 'spatie.png',
    image_cover: true,
    name: 'Add new Feature to Laravel Package Tools - Spatie',
    technologies: 'PHP, Laravel',
    excerpt: 'Adds an option to publish inertia components (jsx/vue) files this package is used for +28,000 developers.'
  },
  {
    url: 'https://github.com/tailwindlabs/tailwindcss.com/pull/1677',
    category: 'open-source',
    image: 'tailwindcss.png',
    image_cover: false,
    name: 'Form Plugin Docs Page - TailwindLabs',
    technologies: 'PHP, Laravel, Javascript',
    excerpt: 'It adds a documentation site with examples for the official form plugin (resets form element styles).'
  },
  {
    url: 'https://github.com/thedevdojo/tails-components/pulls?q=is%3Amerged+is%3Apr+author%3AArielMejiaDev+',
    category: 'open-source',
    image: 'tails.png',
    image_cover: true,
    name: 'Add set of new components - Dev Dojo',
    technologies: 'Javascript, AlpineJS, TailwindCSS',
    excerpt: 'It adds a set of components (accordion, checkout form & Hero section) those are used in tails a tailwindcss website builder.'
  },
  {
    url: 'https://adevait.com/laravel/security-in-laravel?fbclid=IwAR0mV-JAxYMHc83rNxKDyNqPQTLKEhiEb7dGrZRdkDORNTjFAgm4jokmaQY',
    category: 'open-source',
    image: 'adeva.png',
    image_cover: true,
    name: 'Contribute to Adeva\'s Technical Writers Program',
    technologies: 'PHP, Laravel, MySQL',
    excerpt: 'I create an article for adeva blog (developers platform) about Security in Laravel.'
  },
  {
    url: 'https://github.com/thedevdojo/tails-components/pulls?q=is%3Amerged+is%3Apr+author%3AArielMejiaDev+',
    category: 'products',
    image: 'tails.png',
    image_cover: true,
    name: 'Laravel Clean Code Tips Book',
    technologies: 'Javascript, AlpineJS, TailwindCSS',
    excerpt: 'Book full of great strategies to get cleaner and readable code using multiple code patterns.'
  },
  {
    url: 'https://github.com/thedevdojo/tails-components/pulls?q=is%3Amerged+is%3Apr+author%3AArielMejiaDev+',
    category: 'products',
    image: 'tails.png',
    image_cover: true,
    name: 'Full Stack UI',
    technologies: 'Laravel, NativePHP, ReactJS, VueJS, InertiaJS, NuxtJS, NextJS',
    excerpt: 'UI generator for Laravel  and multiple javascript frameworks for monoliths or multi-service projects.'
  }
];

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

useSeoMeta({
  title: 'Ariel Mejia Dev - Portfolio',
  ogTitle: 'Ariel Mejia Dev - Portfolio',
  description: 'Check my technical stuffs, experience & open source work',
  ogDescription: 'Check my technical stuffs, experience & open source work',
  ogImage: 'https://arielmejia.dev/images/preview.png',
  ogUrl: 'https://arielmejia.dev/portfolio',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://arielmejia.dev/images/preview.png'
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