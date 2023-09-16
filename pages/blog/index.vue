<script setup>
import LightInkedLayout from "../../layouts/components/light/LightInkedLayout";
import BlogPost from "~/pages/components/blog/BlogPost.vue";

const { data } = await useAsyncData('blog', () => queryContent('/blog').sort({ id: -1, $numeric: true }).find())
</script>

<template>

  <LightInkedLayout>

    <template v-slot:title>Blog</template>


    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <div class="space-y-20 lg:mt-20 lg:space-y-20">

            <div v-if="data" class="space-y-16">

              <div v-for="(post, index) in data" :key="index">
                <BlogPost :post="post" />
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>


    <template v-slot:footer>
      <NuxtLink to="/blog?page=2" class=" mx-4 leading-7 font-extrabold text-indigo-600 no-underline bg-transparent border-0 border-gray-900 border-solid cursor-pointer box-border hover:text-gray-900">
        Next Page →
      </NuxtLink>
    </template>


  </LightInkedLayout>

</template>