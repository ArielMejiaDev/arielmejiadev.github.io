<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  }
});

const author = {
  name: 'Ariel Mejia',
  role: 'Senior Developer',
  avatar: '/images/avatar.png',
  to: '/about-me'
}
</script>

<template>

  <div class="p-10">

    <div class="relative group">
      <span class="absolute z-0 top-10 left-5 inline-block w-full h-20 mb-1 -ml-1 transform -skew-x-3 bg-indigo-300 group-hover:top-12 group-hover:left-7"></span>
      <div class="relative z-20 py-8 px-4 border-2 border-purple-800 text-xl text-purple-900 font-sans font-semibold leading-loose capitalize bg-white">
        Who is behind PHP
      </div>
    </div>

  </div>

  <article class="relative isolate flex flex-col gap-8 lg:flex-row">
    <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
      <div class="absolute inset-0 h-full w-full rounded-2xl object-cover flex items-center justify-center bg-pink-700/[50%] text-pink-900 font-bold text-xl text-center capitalize">
        {{ post.title }}
      </div>
<!--      <img v-if="post?.cover_image" :src="post.cover_image" :alt="post.title" class="absolute inset-0 h-full w-full rounded-2xl bg-purple-700/[50%] object-contain" />-->
      <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div>
      <div class="flex items-center gap-x-4 text-xs">
<!--        <time :datetime="post.datetime" class="text-gray-500">{{ post.date }}</time>-->
<!--        <NuxtLink :to="post.category.to" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</NuxtLink>-->
      </div>
      <div class="group relative max-w-xl">
        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <NuxtLink :to="post._path">
            <span class="absolute inset-0" />
            {{ post.id }} {{ post.title }}
          </NuxtLink>
        </h3>
        <p class="mt-5 text-sm leading-6 text-gray-600">{{ post.description }}</p>
      </div>
      <div class="mt-6 flex border-t border-gray-900/5 pt-6">
        <div class="relative flex items-center gap-x-4">
          <img :src="author.avatar" :alt="author.name" class="h-10 w-10 rounded-full bg-gray-50" />
          <div class="text-sm leading-6">
            <p class="font-semibold text-gray-900">
              <NuxtLink :href="author.to">
                <span class="absolute inset-0" />
                {{ author.name }}
              </NuxtLink>
            </p>
            <p class="text-gray-600">{{ author.role }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>