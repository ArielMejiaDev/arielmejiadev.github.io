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

  <NuxtLink :to="post._path" class="relative group">
    <span class="absolute z-0 top-10 left-5 inline-block w-full h-20 mb-1 -ml-1 transform -skew-x-3 bg-indigo-700/[50%] group-hover:top-12 group-hover:left-7 group-hover:transition group-hover:transition-all"></span>
    <div class="relative z-20 py-8 px-4 border-2 border-purple-800 text-xl text-purple-900 font-sans font-semibold leading-loose capitalize bg-white group-hover:transition-all">
      <p class="group-hover:ml-4 group-hover:transition-all">
        {{ post.title }}
      </p>
    </div>
  </NuxtLink>

</template>