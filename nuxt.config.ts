// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content',
  ],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'dracula'
    },
    markdown: { anchorLinks: false, remarkPlugins: ['remark-reading-time'] },
  },
  runtimeConfig: {
    public: {
      gtagId: 'UA-160385795-1',
    }
  },
})
