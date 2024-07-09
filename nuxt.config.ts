export default defineNuxtConfig({
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
  ],
  css: ["~/assets/global.css"],
  tailwindcss: {
    exposeConfig: true,
  },
  site: {
    // nuxt-simple-sitemap - 自动生成sitemap的配置
    // url: "https://ugloss.com",
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    strategy: "no_prefix",
    defaultLocale: "zh",
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        code: "zh",
        iso: "zh-CN",
        file: "zh.json",
      },
      {
        code: "en",
        iso: "en-US",
        file: "en.json",
      },
    ],
    detectBrowserLanguage: {
      alwaysRedirect: true,
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
});
