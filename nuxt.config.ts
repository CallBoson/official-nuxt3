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
    url: "https://ugloss.com",
  },
  i18n: {
    // vueI18n: "./i18n.config.ts",
    strategy: "prefix_except_default",
    defaultLocale: "zh",
    lazy: true,
    langDir: "locales/",
    locales: [
      {
        code: "zh",
        iso: "zh-CN",
        file: "zh.json",
      },
      // {
      //   code: "en",
      //   iso: "en-US",
      //   file: "en.json",
      // },
    ],
    // detectBrowserLanguage: {
    //   alwaysRedirect: true,
    //   useCookie: true,
    //   cookieKey: "i18n_redirected",
    //   redirectOn: "root", // recommended
    // },
  },
  nitro: {
    routeRules: {
      // 开发环境跨域代理
      "/api/goods/checkSnCode": {
        proxy: "http://192.168.0.6:8600/api/goods/checkSnCode",
      },
    },
  },
});
