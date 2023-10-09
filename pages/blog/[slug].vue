<script setup>
import LightInkedLayout from "../../layouts/components/light/LightInkedLayout";
import BlogPostBio from "../../components/BlogPostBio";
import NewsLetterBox from "../../components/NewsLetterBox";
import {DisqusComments, DisqusCount} from "vue3-disqus";
import BlogPostHeader from "../../components/BlogPostHeader";
import BlogPostAnnouncementBanner from "../../components/BlogPostAnnouncementBanner";

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
          <div class="space-y-20 lg:mt-20 lg:space-y-20 prose lg:prose-xl prose-a:text-purple-700 hover:prose-a:text-purple-800 hover:prose-a:underline prose-code:bg-gray-200 prose-code:rounded prose-code:after:hidden prose-code:before:hidden prose-code:mx-1 prose-pre:mt-8 prose-pre:shadow-lg prose-img:mt-8 prose-img:rounded prose-img:shadow-lg prose-h2:mt-14 prose-h2:mb-2 prose-h2:tracking-tight prose-h2:leading-tight prose-h2:text-2xl prose-h2:font-bold prose-h3:mt-14 prose-h3:mb-2 prose-h3:tracking-tight prose-h3:leading-tight prose-h3:text-xl prose-h3:font-bold prose-p:my-8 prose-p:mx-0 prose-p:text-base prose-p:font-normal prose-p:text-left prose-p:border-0 prose-p:border-solid prose-p:md:text-lg prose-p:md:leading-7 prose-p:border-neutral-300 prose-p:text-gray-800">
            <BlogPostHeader :data="data" />
            <ContentRenderer :value="data" />
            <hr>
          </div>

          <BlogPostAnnouncementBanner v-if="data?.announcement_banner" :data="data" />

          <BlogPostBio />

          <NewsLetterBox />

          <ClientOnly>
            <DisqusComments shortname="arielmejia-dev" :identifier="disqusIdentifier" :url="disqusUrl" :title="data.title" />
          </ClientOnly>
        </div>
      </div>
    </div>

  </LightInkedLayout>

</template>