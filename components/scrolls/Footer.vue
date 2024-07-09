<template>
  <!-- pc footer -->
  <div
    class="md:flex hidden custom-width flex-col h-full justify-between animate-show pt-20 pb-8"
  >
    <span
      class="delay-500 text-[26px] font-medium flex items-center before:flex-grow after:flex-grow before:h-[2px] before:bg-black after:h-[2px] after:bg-black before:mr-[58px] after:ml-[58px]"
    >
      {{ $t("footer_title_pc") }}</span
    >

    <div class="grow mt-10 mb-10">
      <ul
        class="w-full gap-8 h-full animate-show"
        style="
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: auto auto;
        "
      >
        <Popover
          as="li"
          class="delay-700 flex flex-col items-center bg-[#FAFAFA] justify-center"
          style="grid-column: span 2"
        >
          <img src="/footer-ks.webp" alt="快手旗舰店" class="w-[72px] mb-10" />
          <span class="text-sm font-semibold">快手旗舰店</span>
          <template #content>
            <div
              class="flex flex-col items-center bg-black p-1 rounded relative bottom-[140px]"
            >
              <img
                src="/qr/wx.jpg"
                alt="快手旗舰店二维码"
                class="w-[80px] mb-[6px] rounded-[3px]"
              />
              <span class="text-[10px] font-normal text-white"
                >打开快手扫一扫</span
              >
            </div>
          </template>
        </Popover>

        <Popover
          as="li"
          class="delay-700 flex flex-col items-center bg-[#FAFAFA] justify-center"
          style="grid-column: span 2"
        >
          <img src="/footer-dy.webp" alt="抖音旗舰店" class="w-[72px] mb-10" />
          <span class="text-sm font-semibold">抖音旗舰店</span>

          <template #content>
            <div
              class="flex flex-col items-center bg-black p-1 rounded relative bottom-[140px]"
            >
              <img
                src="/qr/wx.jpg"
                alt="抖音旗舰店二维码"
                class="w-[80px] mb-[6px] rounded-[3px]"
              />
              <span class="text-[10px] font-normal text-white"
                >打开抖音扫一扫</span
              >
            </div>
          </template>
        </Popover>

        <Popover
          as="li"
          class="delay-700 flex flex-col items-center bg-[#FAFAFA] justify-center"
          style="grid-column: span 2"
        >
          <img src="/footer-tm.webp" alt="天猫旗舰店" class="w-[72px] mb-10" />
          <span class="text-sm font-semibold">天猫旗舰店</span>

          <template #content>
            <div
              class="flex flex-col items-center bg-black p-1 rounded relative bottom-[140px]"
            >
              <img
                src="/qr/wx.jpg"
                alt="天猫旗舰店二维码"
                class="w-[80px] mb-[6px] rounded-[3px]"
              />
              <span class="text-[10px] font-normal text-white"
                >打开淘宝扫一扫</span
              >
            </div>
          </template>
        </Popover>

        <Popover
          as="li"
          class="delay-[900ms] flex flex-col items-center bg-[#FAFAFA] justify-center"
          style="grid-column: 1 / span 3"
        >
          <img
            src="/footer-wx.webp"
            alt="UGLOSS公众号"
            class="w-[72px] mb-10"
          />
          <span class="text-sm font-semibold mb-2">{{
            $t("footer_icon_wx_title")
          }}</span>
          <span class="text-sm font-normal">{{
            $t("footer_icon_wx_subtitle")
          }}</span>

          <template #content>
            <div
              class="flex flex-col items-center bg-black p-1 rounded relative bottom-[140px]"
            >
              <img
                src="/qr/wx.jpg"
                alt="微信公众号二维码"
                class="w-[80px] mb-[6px] rounded-[3px]"
              />
              <span class="text-[10px] font-normal text-white"
                >打开微信扫一扫</span
              >
            </div>
          </template>
        </Popover>

        <li
          class="delay-[900ms] flex flex-col items-center bg-[#FAFAFA] justify-center"
          style="grid-column: 4 / span 3"
        >
          <img
            src="/footer-dh.webp"
            alt="服务热线 4000 688 666"
            class="w-[72px] mb-10"
          />
          <span class="text-sm font-semibold mb-2">{{
            $t("footer_icon_dh_title")
          }}</span>
          <span class="text-sm font-normal">{{
            $t("footer_icon_dh_subtitle")
          }}</span>
        </li>
      </ul>
    </div>

    <div class="delay-1000 h-[2px] bg-black mb-3"></div>

    <Copyright class="delay-1000 w-full" />
  </div>

  <!-- 小屏 footer -->
  <div
    class="md:hidden absolute custom-width py-14 animate-show h-full flex flex-col"
  >
    <span
      class="delay-500 text-base font-semibold flex items-center before:flex-grow after:flex-grow before:h-[1px] before:bg-black after:h-[1px] after:bg-black before:mr-[12px] after:ml-[12px]"
    >
      {{ $t("footer_title_1_mobile") }}</span
    >

    <div class="grow flex items-center delay-700">
      <ul class="flex justify-between w-full">
        <Popover as="li" type="dialog" class="flex flex-col items-center">
          <img class="w-[44px] mb-4" src="/footer-ks.webp" alt="快手旗舰店" />
          <span class="text-[13px] font-semibold">快手旗舰店</span>

          <template #content>
            <div class="bg-black w-[160px] p-2 rounded-md">
              <img class="rounded-[3px]" src="/qr/wx.jpg" alt="快手二维码" />
              <span class="block text-white text-center text-base mt-2"
                >打开快手扫一扫</span
              >
            </div>
          </template>
        </Popover>

        <Popover as="li" type="dialog" class="flex flex-col items-center">
          <img class="w-[44px] mb-4" src="/footer-dy.webp" alt="抖音旗舰店" />
          <span class="text-[13px] font-semibold">抖音旗舰店</span>

          <template #content>
            <div class="bg-black w-[160px] p-2 rounded-md">
              <img class="rounded-[3px]" src="/qr/wx.jpg" alt="抖音二维码" />
              <span class="block text-white text-center text-base mt-2"
                >打开抖音扫一扫</span
              >
            </div>
          </template>
        </Popover>

        <Popover as="li" type="dialog" class="flex flex-col items-center">
          <img class="w-[44px] mb-4" src="/footer-tm.webp" alt="天猫旗舰店" />
          <span class="text-[13px] font-semibold">天猫旗舰店</span>

          <template #content>
            <div class="bg-black w-[160px] p-2 rounded-md">
              <img class="rounded-[3px]" src="/qr/wx.jpg" alt="天猫二维码" />
              <span class="block text-white text-center text-base mt-2"
                >打开天猫扫一扫</span
              >
            </div>
          </template>
        </Popover>
      </ul>
    </div>

    <span
      class="mb-5 delay-[800ms] text-base font-semibold flex items-center before:flex-grow after:flex-grow before:h-[1px] before:bg-black after:h-[1px] after:bg-black before:mr-[12px] after:ml-[12px]"
    >
      {{ $t("footer_title_2_mobile") }}</span
    >

    <div class="flex items-center grow mb-2">
      <ul class="h-full flex flex-col w-full gap-[15px] animate-show">
        <Popover
          as="li"
          type="dialog"
          class="delay-[900ms] grow flex flex-col items-center justify-center bg-[#F5F5F7] rounded-[17px] w-full"
        >
          <img src="/footer-wx.webp" alt="UGLOSS公众号" class="w-[44px] mb-5" />
          <span class="text-sm font-semibold mb-2">{{
            $t("footer_icon_wx_title")
          }}</span>
          <span class="text-xs font-normal">{{
            $t("footer_icon_wx_subtitle")
          }}</span>

          <template #content>
            <div class="bg-black w-[160px] p-2 rounded-md">
              <img
                class="rounded-[3px]"
                src="/qr/wx.jpg"
                alt="微信公众号二维码"
              />
              <span class="block text-white text-center text-base mt-2"
                >获取变美最新资讯</span
              >
            </div>
          </template>
        </Popover>

        <li
          class="delay-1000 grow flex flex-col items-center justify-center bg-[#F5F5F7] rounded-[17px] w-full"
        >
          <img
            src="/footer-dh.webp"
            alt="服务热线 4000 688 666"
            class="w-[44px] mb-5"
          />
          <span class="text-sm font-semibold mb-2">{{
            $t("footer_icon_dh_title")
          }}</span>
          <span class="text-xs font-normal">{{
            $t("footer_icon_dh_subtitle")
          }}</span>
        </li>
      </ul>
    </div>

    <Copyright class="delay-[1100ms] relative top-10" />
  </div>
</template>

<script setup>
import Copyright from "~/components/Copyright.vue";
import Popover from "~/components/Popover.vue";
</script>
