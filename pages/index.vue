<template>
  <main class="h-screen overflow-hidden">
    <div
      @wheel="handleWheel"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
      id="fullpage"
      style="
        transition: all 500ms cubic-bezier(0.7, 0.04, 0.51, 0.8) 0s;
        backface-visibility: hidden;
        perspective: 1000;
        transform-origin: center center;
      "
      class="touch-none"
    >
      <section
        v-for="(componentName, index) in scrollCompoents"
        :key="index"
        :id="`section-${index + 1}`"
        class="h-screen relative"
        :class="{ active: currentPage === index + 1 }"
        :style="{ height: innerHeight > 0 ? `${innerHeight}px` : '' }"
      >
        <component :is="componentName" />
      </section>
    </div>

    <div
      class="custom-width fixed left-1/2 -translate-x-1/2 bottom-[70px] flex justify-end pointer-events-none"
    >
      <IconUp
        @click="goToPage(1)"
        :fontControlled="false"
        class="sm:w-[40px] w-10 cursor-pointer transition pointer-events-auto relative left-0 lg:left-20"
        :class="[
          {
            visible: currentPage !== 1,
            invisible: currentPage === 1,
          },
          [3, 7].includes(currentPage) ? 'text-black' : 'text-white',
        ]"
      />
    </div>
  </main>
</template>

<script setup>
// 页面组件
import Main from "~/components/scrolls/Main.vue";
import Introduce from "~/components/scrolls/Introduce.vue";
import Technic from "~/components/scrolls/Technic.vue";
import AProduct from "~/components/scrolls/products/AProduct.vue";
import BProduct from "~/components/scrolls/products/BProduct.vue";
import Coverage from "~/components/scrolls/Coverage.vue";
import Footer from "~/components/scrolls/Footer.vue";

// 其它引入
import IconUp from "~/assets/icons/up.svg";
import { usePageNavigation } from "~/hooks/usePageNavigation";
import { useWindowHeight } from "~/hooks/useWindowHeight";
// const { locale } = useI18n();
const { setTotalPages, goToPage, currentPage, adjustPagePosition } =
  usePageNavigation();

const innerHeight = useWindowHeight();

const scrollCompoents = [
  Main,
  Introduce,
  Technic,
  AProduct,
  BProduct,
  Coverage,
  Footer,
];

// 设置页面总数
setTotalPages(scrollCompoents.length);

// 防抖函数——只执行最后一次
function debounce(func, delay) {
  let debounceTimer;
  return function (_this) {
    const context = _this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

const debouncedHandleResize = debounce(adjustPagePosition, 300);

onMounted(() => {
  window.addEventListener("resize", () => debouncedHandleResize());
});

onUnmounted(() => {
  window.removeEventListener("resize", () => debouncedHandleResize());
});

// 监听鼠标滚轮事件
let wheelTimerId;
function handleWheel(e) {
  const sign = Math.sign(e.deltaY);

  if (![1, -1].includes(sign)) {
    return;
  }

  const callNow = !wheelTimerId;

  clearTimeout(wheelTimerId);
  wheelTimerId = setTimeout(() => {
    wheelTimerId = null;
  }, 50);

  if (!callNow) {
    return;
  }

  if (sign === 1) {
    goToPage(currentPage.value + 1);
  } else if (sign === -1) {
    goToPage(currentPage.value - 1);
  }
}

// 监听touch事件
let startY = 0;
let endY = 0;
function handleTouchStart(e) {
  startY = e.touches[0].pageY;
}

function handleTouchEnd(e) {
  endY = e.changedTouches[0].pageY;
  let swipeDistance = endY - startY;
  if (Math.abs(swipeDistance) > 50) {
    if (swipeDistance > 0) {
      goToPage(currentPage.value - 1);
    } else {
      goToPage(currentPage.value + 1);
    }
  }
}
</script>

<style>
/* 此处没有用局部样式，请注意样式冲突 */

.img-bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
}

section.active .animate-show > * {
  transform: translateY(0);
  visibility: visible;
  opacity: 1;
}

section .animate-show > * {
  visibility: hidden;
  transition-duration: 500ms;
  opacity: 0;
  transition-property: all;
  transition-timing-function: ease-in;
  transform: translateY(150px);
}

.expander {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s;
  overflow: hidden;
}
.expander-content {
  min-height: 0;
  transition: visibility 0.5s;
  visibility: hidden;
}
.active-toggle .expander {
  grid-template-rows: 1fr;
}
.active-toggle .expander .expander-content {
  visibility: visible;
}

input::-webkit-search-cancel-button {
  opacity: 0.5;
}
</style>
