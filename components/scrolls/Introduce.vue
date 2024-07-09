<template>
  <div
    class="animate-show custom-width font-normal text-sm sm:text-[24px] flex flex-col text-white translate-y-20 sm:translate-y-40"
  >
    <SvgoLogo
      :fontControlled="false"
      class="sm:w-[200px] sm:h-[46px] w-[90px] h-[20px] delay-500 sm:mb-16 mb-8"
    />

    <h2 class="delay-[600ms] sm:mb-20 mb-8">
      {{ $t("s2_1") }}
    </h2>

    <h2 class="delay-700 sm:mb-8 mb-2">{{ $t("s2_2") }}</h2>
    <h2 class="delay-[800ms] sm:mb-8 mb-2">{{ $t("s2_3") }}</h2>
    <h2 class="delay-[900ms] sm:mb-20 mb-8">{{ $t("s2_4") }}</h2>

    <h2 class="delay-1000 sm:mb-8 mb-2">{{ $t("s2_5") }}</h2>
    <h2 class="delay-[1100ms]">{{ $t("s2_6") }}</h2>
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      :srcset="makeImgHost('/mobile/bg-2-20231127.jpg?imageMogr2/format/webp')"
    />
    <source
      media="(min-width: 640px)"
      :srcset="makeImgHost('/bg2-20231124.jpg?imageMogr2/format/webp')"
    />
    <img
      class="img-bg"
      :src="makeImgHost('/bg2-20231124.jpg?imageMogr2/format/webp')"
      alt="UGLOSS简介背景图片"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";

const { makeImgHost } = useImgHost();
</script>
