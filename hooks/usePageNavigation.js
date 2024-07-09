let totalPages = 0;
const currentPage = ref(1);

function getPageElement() {
  return document.querySelector("#fullpage");
}

export function usePageNavigation() {
  let isSwitchingPage = false;

  onMounted(() => {
    if (isInScrollPage.value) {
      const { page, jumped } = history.state;
      if (page && !jumped) {
        history.pushState({ jumped: true }, null, null);
        goToPage(page);
      }
    }
  });

  function setTotalPages(count) {
    if (isNaN(count)) {
      throw new Error("totalPages must be a number");
    }
    totalPages = count;
  }

  /**
   * @param {number} page 跳转到指定页
   */
  function goToPage(page) {
    if (!isInScrollPage.value) {
      // 带参数跳转到scroll页，scroll页再执行一次跳转
      const router = useRouter();
      router.replace({
        path: "/",
        state: { page, jumped: false },
      });
      return;
    }

    if (isSwitchingPage) return; // 防止重复跳转
    page = parseInt(page);

    // 在当前页或者页码不合法则不跳转
    if (
      page <= 0 ||
      page > totalPages ||
      currentPage.value === usePageNavigation
    ) {
      return;
    }

    isSwitchingPage = true;
    currentPage.value = page;

    // 通过transform滚动到指定页
    const pageElement = getPageElement();
    pageElement.style.transform = `translateY(-${
      (page - 1) * window.innerHeight
    }px)`;

    isSwitchingPage = false;
  }

  function adjustPagePosition() {
    // 解决调整窗口大小后页面位置不正确的问题
    const pageElement = getPageElement();
    if (!pageElement) {
      throw new Error("pageElement is not defined");
    }

    pageElement.style.transitionDuration = "0s";
    pageElement.style.transform = `translateY(-${
      (currentPage.value - 1) * window.innerHeight
    }px)`;
    setTimeout(() => {
      pageElement.style.transitionDuration = "500ms";
    }, 500);
  }

  const isInScrollPage = computed(() => {
    return useRoute().path === "/";
  });

  return {
    setTotalPages,
    goToPage,
    currentPage,
    isInScrollPage,
    adjustPagePosition,
  };
}
