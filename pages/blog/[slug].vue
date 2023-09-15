<script setup>
import LightInkedLayout from "../../layouts/components/light/LightInkedLayout";

const route = useRoute();

const { data } = await useAsyncData(`post-${route.params.slug}`, () => queryContent(`/blog/${route.params.slug}`).findOne())
</script>

<template>

  <LightInkedLayout>

    <div class="bg-white py-10 min-h-screen">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20 prose prose-slate lg:prose-xl">
            <ContentRenderer :value="data" />
          </div>
        </div>
      </div>
    </div>

  </LightInkedLayout>

</template>