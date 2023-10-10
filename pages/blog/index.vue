<script setup>
import LightInkedLayout from "../../layouts/components/light/LightInkedLayout";
import BlogPost from "../../components/BlogPost";

const route = useRoute();

const router = useRouter();

const currentPage = ref(parseInt(route.query.page) || 1);

const paginationSizePerPage = 5;

const { data } = await useAsyncData('blog', () => queryContent('/blog')
    .sort({ id: -1, $numeric: true })
    .limit(paginationSizePerPage)
    .skip(currentPage.value * paginationSizePerPage)
    .find());

const nextPage = async function () {
  currentPage.value = currentPage.value + 1;

  router.replace({ path: route.fullPath, query: { page: currentPage.value}});

  data.data = await useAsyncData('blog', () => queryContent('/blog')
      .sort({ id: -1, $numeric: true })
      .limit(paginationSizePerPage)
      .skip(currentPage.value * paginationSizePerPage)
      .find());
}

const previousPage = async function () {
  currentPage.value = currentPage.value - 1;

  router.replace({ path: route.fullPath, query: { page: currentPage.value}});

  data.data = await useAsyncData('blog', () => queryContent('/blog')
      .sort({ id: -1, $numeric: true })
      .limit(paginationSizePerPage)
      .skip(currentPage.value * paginationSizePerPage)
      .find());
}

useSeoMeta({
  title: 'Ariel Mejia Dev - Blog',
  ogTitle: 'Ariel Mejia Dev - Blog',
  description: 'Check my technical stuffs, experience & open source work',
  ogDescription: 'Check my technical stuffs, experience & open source work',
  ogImage: 'https://arielmejia.dev/images/preview.png',
  ogUrl: 'https://arielmejia.dev/blog',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://arielmejia.dev/images/preview.png'
});
</script>

<template>

  <LightInkedLayout>

    <template v-slot:title>Blog</template>

    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <div class="space-y-20 lg:mt-20 lg:space-y-20">

            <div v-if="data.length > 0" class="space-y-16">

              <div v-for="(post, index) in data" :key="index">
                <BlogPost :post="post" />
              </div>

            </div>

            <div class="h-[500px] flex items-center justify-center" v-else>
              <h2 class="mx-0 mt-0 mb-4 text-4xl font-extrabold text-center text-gray-900 capitalize lg:mt-0 lg:mb-3 lg:text-5xl lg:leading-none">
                No More Posts Available
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>


    <template v-slot:footer>
      <div class="bg-white max-w-5xl w-full px-6 lg:px-8 flex items-center" :class="currentPage > 1 ? 'justify-between' : 'justify-end'">
        <button v-if="currentPage > 1" @click="previousPage" class="mx-4 leading-7 font-extrabold text-indigo-600 no-underline bg-transparent border-0 border-gray-900 border-solid cursor-pointer box-border hover:text-gray-900">
          &larr; Previous Page
        </button>
        <button v-if="data.length > 0" @click="nextPage" class="mx-4 leading-7 font-extrabold text-indigo-600 no-underline bg-transparent border-0 border-gray-900 border-solid cursor-pointer box-border hover:text-gray-900">
          Next Page &rarr;
        </button>
      </div>
    </template>


  </LightInkedLayout>

</template>