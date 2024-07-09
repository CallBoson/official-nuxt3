export function useIsMobile() {
  const isMobile = ref(false);

  onMounted(() => {
    isMobile.value = window.innerWidth < 640;
  });

  return isMobile;
}
