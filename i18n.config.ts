export default defineI18nConfig(() => ({
  fallbackLocale: "zh", // 访问不存在的语言时，会自动回退到 fallbackLocale
  legacy: false,
}));
