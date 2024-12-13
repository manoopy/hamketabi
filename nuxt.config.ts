// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  ssr: false,
  target: 'static',

  modules: ["@nuxt/icon", "@nuxt/ui", "@pinia/nuxt", '@vite-pwa/nuxt'],

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
    },
  },


  pinia: {
    storesDirs: ["./stores/**"],
  },


  icon: {
    customCollections: [
      {
        prefix: 's',
        dir: './assets/icons'
      },
    ],
  },

  colorMode: {
    preference: 'light'
  },

  css: ["~/assets/css/main.css"],

  app: {
    // pageTransition: { name: "blur", mode: "out-in" },
    // layoutTransition: { name: "blur", mode: "out-in" },

    head: {
      title: "هم کتابی",
      charset: "utf-8",
      htmlAttrs: {
        lang: "fa-IR",
        dir: "rtl",
      },
    },
  },
});