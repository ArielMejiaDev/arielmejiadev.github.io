<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="not-prose font-bold text-sm tracking-tighter">
    <div class="flex space-x-2">
      <NuxtLink :to="`/blog/categories/${tag}`" v-for="(tag, index) in data.tags" :key="index" class="not-prose p-1 cursor-pointer rounded border border-indigo-400 bg-indigo-400 text-indigo-50 font-semibold hover:bg-indigo-500">
        {{ tag }}
      </NuxtLink>
    </div>
    <h1 class="mx-0 my-4 text-3xl sm:text-4xl font-black text-left text-gray-900 capitalize lg:my-8 lg:text-6xl lg:leading-none">
      {{ data.title }}
    </h1>
    <div class="flex items-center space-x-4">
      <div class="flex flex-col">
        <p class="text-2xl font-black tracking-tight leading-tight">Ariel Mejia</p>
        <div class="not-prose flex space-x-4">
          <p class="text-gray-700 tracking-normal">
            <span class="text-purple-700">{{ data.date }}</span>
            - {{ data.readingTime.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>