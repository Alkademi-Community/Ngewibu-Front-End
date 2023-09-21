// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon",
    "nuxt-vitest"
  ],

  pinia: {
    autoImports: ["storeToRefs", "defineStore"]
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.ts",
    viewer: false
  },

  imports: {
    dirs: ["stores"]
  },

  headlessui: {
    prefix: "Headless"
  }
})
