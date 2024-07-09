<template>
  <div
    class="relative animate-show custom-width text-[#E9DFD6] h-full flex justify-between items-start sm:pt-40 pt-14"
  >
    <div class="delay-500">
      <h2 class="sm:text-[50px] text-[22px] font-semibold mb-1 sm:mb-3">
        {{ $t("s5_1") }}
      </h2>
      <h3 class="delay-150 sm:text-[24px] text-[14px] font-normal">
        {{ $t("s5_1_1") }}
      </h3>
    </div>

    <Popover class="delay-500" :type="isMobile ? 'dialog' : 'popover'">
      <button
        class="rounded-full sm:border-[6px] border-[3px] sm:text-[33px] 2xl:text-[50px] text-[24px] border-[#E9DFD6] font-semibold sm:px-11 sm:py-2 px-4 py-1"
      >
        {{ $t("s45_btn") }}
      </button>
      <template #content>
        <div class="bg-black w-[120px] p-2 rounded-md">
          <img
            class="sm:rounded-md rounded-[3px]"
            src="/qr/wx.jpg"
            alt="二维码"
          />
          <span class="block text-white text-center text-sm mt-2">{{
            $t("scan_wx")
          }}</span>
        </div>
      </template>
    </Popover>
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      :srcset="makeImgHost('/mobile/bg-5-20231127.jpg?imageMogr2/format/webp')"
    />
    <source
      media="(min-width: 640px)"
      :srcset="makeImgHost('/bg5-20231212.jpg?imageMogr2/format/webp')"
    />
    <img
      class="img-bg"
      :src="makeImgHost('/bg5-20231212.jpg?imageMogr2/format/webp')"
      alt="光子美容面罩背景图片"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";
import Popover from "~/components/Popover.vue";
import { useIsMobile } from "@/hooks/useIsMobile";
const isMobile = useIsMobile();

const { makeImgHost } = useImgHost();
</script>
