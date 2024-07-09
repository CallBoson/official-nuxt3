<template>
  <div class="relative bg-black sm:bg-white min-h-screen">
    <div class="custom-width w-auto fixed h-[68px] flex items-center z-10">
      <ChevronLeftIcon
        class="w-6 sm:hidden block text-white"
        @click="navigateBack"
      />
    </div>

    <div
      class="z-10 absolute left-0 top-[14vh] sm:top-[250px] text-white flex flex-col items-center justify-center w-full"
    >
      <IconLogo :fontControlled="false" class="sm:h-[60px] h-[30px]" />
      <span class="sm:tracking-[3px] sm:text-2xl text-sm sm:mt-5 mt-2"
        >全球光电护肤专家</span
      >
    </div>

    <picture>
      <source
        media="(max-width: 639px)"
        :srcset="
          makeImgHost('/mobile/coverage-banner.webp?imageMogr2/quality/60')
        "
      />
      <source
        media="(min-width: 640px)"
        :srcset="makeImgHost('/coverage-banner.jpg?imageMogr2/format/webp')"
      />
      <img
        class="sm:relative absolute left-0 top-0 w-full h-auto sm:h-[600px] object-cover object-center"
        :src="makeImgHost('/coverage-banner.jpg?imageMogr2/format/webp')"
        alt="全球光电护肤专家BANNER图片"
      />
    </picture>

    <!-- pc查询结果 -->
    <div
      id="result"
      class="relative sm:flex hidden custom-width flex-col items-center mt-28 mb-10 pb-32 border-b-2 border-black"
    >
      <h2 class="text-[50px] font-semibold mb-11">查询结果</h2>
      <div
        v-if="hasResult"
        class="flex flex-col justify-center items-center w-[1028px] bg-[#FAFAFA] py-[80px]"
      >
        <template v-if="verifyData.goods_sixnine_code">
          <img
            :src="verifyData.goods_main_img"
            class="w-[178px] h-[178px] object-cover object-center mb-10"
            alt="产品图"
          />
          <h3 class="text-[28px] leading-[28px] font-medium color-[#333] mb-7">
            该商品为正品
          </h3>
          <div class="text-[#666] text-lg flex flex-col">
            <span class="mb-1">机身编码：{{ verifyData.sn_code }}</span>
            <span>查询日期：{{ check_time }}</span>
          </div>
        </template>
        <template v-else>
          <h3
            class="text-[28px] leading-[28px] font-medium color-[#333] mb-7 mt-32"
          >
            暂无商品数据
          </h3>
          <span class="text-[#666] text-lg mb-32"
            >查询日期：{{ check_time }}</span
          >
        </template>
      </div>

      <!-- 二维码 -->
      <div class="fixed bottom-[10rem] custom-width flex justify-end">
        <div class="rounded-md bg-black flex flex-col items-center p-1">
          <img
            class="w-[80px] h-[80px] rounded-[3px]"
            src="/qr/wx.jpg"
            alt="了解更多二维码"
          />
          <span class="text-white text-[10px] mt-1">了解更多</span>
        </div>
      </div>
    </div>

    <!-- 移动查询结果 -->
    <div
      class="sm:hidden bg-white w-[330px] rounded-2xl h-[430px] absolute top-[250px] left-1/2 -translate-x-1/2 flex flex-col"
    >
      <div
        v-if="hasResult"
        class="bg-[#FAFAFA] rounded m-4 flex flex-col items-center h-[258px] box-border justify-center"
      >
        <template v-if="verifyData.goods_sixnine_code">
          <img
            :src="verifyData.goods_main_img"
            class="w-[119px] h-[119px] object-cover object-center mb-4"
            alt="产品图"
          />
          <h3 class="text-[15px] leading-[15px] font-medium color-black mb-4">
            该商品为正品
          </h3>
          <div class="text-[#666] text-[13px] flex flex-col">
            <span class="mb-1">机身编码：{{ verifyData.sn_code }}</span>
            <span>查询日期：{{ check_time }}</span>
          </div>
        </template>
        <template v-else>
          <h3 class="text-[15px] leading-[15px] font-medium color-black mb-4">
            暂无商品数据
          </h3>
          <span class="text-[#666] text-[13px]"
            >查询日期：{{ check_time }}</span
          >
        </template>
      </div>

      <div
        class="border-b border-dashed before:absolute after:absolute before:-translate-x-1/2 before:-translate-y-1/2 after:right-0 after:translate-x-1/2 after:-translate-y-1/2 before:block before:w-4 before:h-4 before:rounded-full before:bg-black after:block after:w-4 after:h-4 after:rounded-full after:bg-black"
      ></div>
      <div class="grow flex justify-between items-center px-9">
        <div>
          <h2 class="text-xs font-semibold">长按识别二维码</h2>
          <span class="text-xs font-normal">了解更多</span>
        </div>
        <div class="p-[2px] border rounded">
          <img class="w-[64px]" src="/qr/wx.jpg" alt="了解更多二维码" />
        </div>
      </div>
    </div>

    <Copyright class="hidden sm:block mb-20" />
  </div>
</template>

<script setup>
import Copyright from "~/components/Copyright.vue";
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { useSign } from "~/hooks/useSign";
import IconLogo from "~/assets/icons/logo.svg";
import useImgHost from "~/hooks/useImgHost";
const { makeImgHost } = useImgHost();
import { usePageNavigation } from "@/hooks/usePageNavigation";
const { goToPage } = usePageNavigation();

const { query } = useRoute();
const check_time = new Date().toLocaleString();
const verifyData = reactive({
  date_of_manufacture: "",
  goods_main_img: "",
  goods_name: "",
  sn_code: "",
  goods_sixnine_code: "",
});

definePageMeta({
  title: "真伪查验",
});

const hasResult = ref(false);

onMounted(async () => {
  if (query.sn) {
    const params = useSign({ sn_code: query.sn });
    const { data } = await $fetch("/api/goods/checkSnCode", {
      method: "GET",
      params,
    });
    for (const key in verifyData) {
      if (Object.hasOwn(data, key)) {
        verifyData[key] = data[key];
      } else {
        verifyData[key] = "";
      }
    }
    hasResult.value = true;

    // pc添加翻转效果
    document.querySelector("nav").classList.add("sm:mix-blend-difference");

    nextTick(() => {
      // pc滚动到查询结果
      if (window.innerWidth > 640) {
        const result = document.getElementById("result");
        result.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }
});

function navigateBack() {
  goToPage(1);
}
</script>
