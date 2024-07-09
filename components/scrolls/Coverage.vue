<template>
  <div
    class="relative custom-width sm:text-6xl font-bold text-3xl text-white flex flex-col justify-center items-center h-full animate-show"
  >
    <h2 class="font-semibold sm:mb-6 mb-4 delay-500 sm:text-[50px] text-2xl">
      {{ $t("s6_hero") }}
    </h2>
    <div class="relative sm:w-[406px] w-[280px] delay-700">
      <form @submit.prevent="handleSearch">
        <input
          @focus="adjustPagePosition"
          @blur="handleInputBlur"
          class="text-xs p-3 pr-20 bg-white rounded-[24px] w-full sm:h-[48px] h-[43px] text-black outline-none border-4 focus:border-[#DAC7B7] border-white"
          type="search"
          v-model="codeInput"
          :placeholder="$t('s6_placeholder')"
          required
        />

        <button
          type="submit"
          :class="codeInput ? 'text-white' : 'text-[rgba(255,255,255,0.5)]'"
          class="placeholder:font-normal placeholder:text-sm text-sm bg-black h-[32px] sm:px-5 px-4 absolute sm:right-3 right-2 sm:top-8 top-2 cursor-pointer rounded-[17px]"
        >
          确定
        </button>
      </form>
    </div>

    <span class="absolute bottom-[5.5vh] text-xs tracking-[1px] font-normal">{{
      $t("s6_note")
    }}</span>
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      :srcset="makeImgHost('/mobile/bg6-20240126.jpg?imageMogr2/format/webp')"
    />
    <source
      media="(min-width: 640px)"
      :srcset="makeImgHost('/bg6-20240126.jpg?imageMogr2/format/webp')"
    />
    <img
      class="img-bg"
      :src="makeImgHost('/bg6-20240126.jpg?imageMogr2/format/webp')"
      alt="产品真伪背景图片"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";
import { usePageNavigation } from "~/hooks/usePageNavigation";

const { makeImgHost } = useImgHost();
const { adjustPagePosition } = usePageNavigation();

const codeInput = ref("");

function handleSearch() {
  window.location.href = "/coverage?sn=" + codeInput.value;
}

function handleInputBlur() {
  // 移动端输入框失焦时，恢复移位
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
