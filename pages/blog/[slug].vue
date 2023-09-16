<script setup>
import LightInkedLayout from "../../layouts/components/light/LightInkedLayout";

const route = useRoute();

const { data } = await useAsyncData(`post-${route.params.slug}`, () => queryContent(`/blog/${route.params.slug}`).findOne())
</script>

<template>

  <LightInkedLayout>

    <div class="bg-white min-h-screen">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <div class="space-y-20 lg:mt-20 lg:space-y-20 prose lg:prose-xl prose-h1:text-center prose-a:no-underline prose-a:text-purple-700 hover:prose-a:text-purple-600 hover:prose-a:underline prose-code:bg-gray-200 prose-code:rounded prose-code:after:hidden prose-code:before:hidden prose-code:mx-1 prose-pre:shadow-lg prose-img:rounded prose-img:shadow-lg">
            <ContentRenderer :value="data" />
          </div>
        </div>
      </div>
    </div>

  </LightInkedLayout>

</template>