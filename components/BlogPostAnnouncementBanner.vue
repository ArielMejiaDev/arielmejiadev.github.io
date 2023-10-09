<script setup>
defineProps({
  data: Object
})
</script>

<template>
  <a :href="data.announcement_link" target="_blank">
    <img class="h-[500px] my-20 object-cover rounded-lg shadow-lg" :src="data.announcement_banner" alt="Announcement Banner">
  </a>
</template>