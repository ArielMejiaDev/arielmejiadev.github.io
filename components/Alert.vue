<script setup>
</script>

<template>
  <div class="not-prose bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
    <strong v-if="$slots.title" class="font-bold text-red-700">
      <slot name="title"></slot>
    </strong>
    <span class="block sm:inline text-red-700">
      <slot />
    </span>
  </div>
</template>