<template>
  <div
    class="absolute top-1/2 -translate-y-[100%] left-1/2 -translate-x-1/2 text-white flex flex-col"
  >
    <div class="flex items-center justify-center sm:mb-7 mb-6">
      <span
        class="font-semibold sm:text-lg text-sm sm:tracking-[3px] tracking-[2px]"
        >OF&nbsp;COURSE</span
      >
      <span
        class="block rounded-full bg-white sm:w-1 sm:h-1 w-[2px] h-[2px] sm:mx-3 mx-2"
      ></span>
      <SvgoLogo
        :fontControlled="false"
        class="sm:h-[20px] h-[15px] text-white"
      />
    </div>
    <h1
      class="sm:text-[56px] text-[32px] sm:leading-[56px] leading-[32px] font-semibold flex space-x-6 items-center"
    >
      <span class="shrink-0">{{ $t("s1_1") }}</span>
      <span class="shrink-0">{{ $t("s1_2") }}</span>
    </h1>
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      width="750"
      height="1420"
      :srcset="
        makeImgHost(
          '/mobile/bg-1-20231127.jpg?imageMogr2/format/webp/quality/50/blur/3/resize/thumbnail/75x142'
        )
      "
    />
    <source
      media="(min-width: 640px)"
      width="1920"
      height="1080"
      :srcset="
        makeImgHost(
          '/bg1-20231212.jpg?imageMogr2/format/webp/quality/50/blur/3/resize/thumbnail/192x108'
        )
      "
    />
    <img
      class="img-bg"
      :src="
        makeImgHost(
          '/bg1-20231212.jpg?imageMogr2/format/webp/quality/50/blur/3/resize/thumbnail/192x108'
        )
      "
      alt="循光，自发光占位背景图片"
    />
  </picture>

  <picture>
    <source
      media="(max-width: 639px)"
      :srcset="makeImgHost('/mobile/bg-1-20231127.jpg?imageMogr2/format/webp')"
    />
    <source
      media="(min-width: 640px)"
      :srcset="makeImgHost('/bg1-20231212.jpg?imageMogr2/format/webp')"
    />
    <img
      class="img-bg"
      :src="makeImgHost('/bg1-20231212.jpg?imageMogr2/format/webp')"
      alt="循光，自发光背景图片"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";

const { makeImgHost } = useImgHost();
</script>
