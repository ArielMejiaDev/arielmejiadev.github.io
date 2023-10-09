<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <div class="font-bold text-sm tracking-tighter">
    <div class="flex space-x-2">
      <NuxtLink :to="`/blog/categories/${tag}`" v-for="(tag, index) in data.tags" :key="index" class="not-prose p-1 cursor-pointer rounded border border-indigo-400 bg-indigo-400 text-indigo-50 font-semibold hover:bg-indigo-500">
        {{ tag }}
      </NuxtLink>
    </div>
    <h1 class="not-prose mx-0 my-4 text-4xl font-extrabold text-left text-gray-900 capitalize lg:my-8 lg:text-5xl lg:leading-none">{{ data.title }}</h1>
    <div class="not-prose flex items-center space-x-4">
      <img src="/images/avatar.png" alt="Ariel Mejia Illustration" class="h-20 w-20 rounded-full border border-purple-500 self-start" />
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