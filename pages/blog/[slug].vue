<script setup>
import LightInkedLayout from "../../layouts/components/light/LightInkedLayout";
import BlogPostBio from "../../components/BlogPostBio";
import NewsLetterBox from "../../components/NewsLetterBox";
import {DisqusComments, DisqusCount} from "vue3-disqus";

const route = useRoute();

const { data } = await useAsyncData(`post-${route.params.slug}`, () => queryContent(`/blog/${route.params.slug}`).findOne());

const disqusIdentifier = `/blog/${data?.id}`;
const disqusUrl = `https://arielmejia.dev/blog/${data?.slug}`;
</script>

<template>

  <LightInkedLayout>

    <div class="bg-white min-h-screen">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <div class="space-y-20 lg:mt-20 lg:space-y-20 prose lg:prose-xl prose-h1:text-center prose-h1:capitalize prose-a:no-underline prose-a:text-purple-700 hover:prose-a:text-purple-600 hover:prose-a:underline prose-code:bg-gray-200 prose-code:rounded prose-code:after:hidden prose-code:before:hidden prose-code:mx-1 prose-pre:shadow-lg prose-img:rounded prose-img:shadow-lg">
            <div class="font-bold text-sm tracking-tighter">
              <p class="text-purple-700">{{ data.date }}</p>
              <div class="flex space-x-2">
                <NuxtLink :to="`/blog/categories/${tag}`" v-for="(tag, index) in data.tags" :key="index" class="not-prose p-1 cursor-pointer rounded border border-indigo-400 bg-indigo-400 text-indigo-50 font-semibold hover:bg-indigo-500">
                  {{ tag }}
                </NuxtLink>
              </div>
              <p class="text-gray-700">{{ data.readingTime.text }}</p>
            </div>

            <ContentRenderer :value="data" />
            <BlogPostBio />
          </div>


          <NewsLetterBox />

          <ClientOnly>
            <DisqusComments shortname="arielmejia-dev" :identifier="disqusIdentifier" :url="disqusUrl" :title="data.title" />
          </ClientOnly>
        </div>
      </div>
    </div>

  </LightInkedLayout>

</template>