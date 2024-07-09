// 防抖函数——只执行最后一次
function debounce(func: Function, delay: number): Function {
  let debounceTimer: ReturnType<typeof setTimeout>;
  return function (this: any): void {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

export function useWindowHeight() {
  const height = ref(0);

  const updateHeight = () => {
    height.value = window.innerHeight;
  };

  const debouncedHandleResize = debounce(updateHeight, 300);

  if (process.client) {
    onMounted(() => {
      updateHeight();
      window.addEventListener("resize", () => debouncedHandleResize());
    });

    onUnmounted(() => {
      window.removeEventListener("resize", () => debouncedHandleResize());
    });
  }

  return height;
}
