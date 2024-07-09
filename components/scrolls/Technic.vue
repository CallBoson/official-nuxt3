<template>
  <div
    class="relative animate-show custom-width text-[rgb(131,95,56)] h-full sm:pt-32 pt-14 lg:-translate-y-10 2xl:translate-y-0"
  >
    <div class="delay-500 flex justify-between items-center">
      <h2 class="sm:text-[50px] text-[22px] font-semibold">
        {{ $t("s3_1") }}
      </h2>
      <span
        class="rounded-full sm:border-[6px] border-[3px] sm:text-[33px] 2xl:text-[50px] text-[22px] border-[rgb(131,95,56)] font-semibold sm:px-9 sm:py-2 px-4 py-1"
      >
        {{ $t("s3_2") }}
      </span>
    </div>

    <!-- pc主体 -->
    <div
      class="delay-700 mt-[8vh] sm:flex hidden animate-show h-[52vh] bg-white text-[rgb(131,95,56)] rounded-3xl overflow-hidden"
    >
      <ul class="animate-show grow flex flex-col justify-center p-10 3xl:px-20">
        <li
          class="delay-[900ms] border-b-2 border-[rgb(131,95,56)]"
          :class="{ 'active-toggle': s3_active_idx === 1 }"
          @click="s3_active_idx = 1"
        >
          <div class="flex justify-between items-center mb-8">
            <span class="text-2xl font-medium">强脉冲光(IPL)</span>
            <ChevronUpIcon
              class="w-6 transition"
              :class="{ 'rotate-180': s3_active_idx !== 1 }"
            />
          </div>
          <div class="expander">
            <div class="expander-content text-lg leading-8">
              {{ $t("s3_3_1") }}
              <div class="mb-8"></div>
            </div>
          </div>
        </li>

        <li
          class="delay-[1000ms]"
          :class="{ 'active-toggle': s3_active_idx === 2 }"
          @click="s3_active_idx = 2"
        >
          <div class="flex justify-between items-center my-8">
            <span class="text-2xl font-medium">LED光</span>
            <ChevronUpIcon
              class="w-6 transition"
              :class="{ 'rotate-180': s3_active_idx !== 2 }"
            />
          </div>
          <div class="expander">
            <div class="expander-content text-lg leading-8">
              {{ $t("s3_4_1") }}
            </div>
          </div>
        </li>
      </ul>

      <img
        loading="lazy"
        class="w-[380px] md:w-[450px] xl:w-[800px] 2xl:w-auto h-full object-cover object-center"
        :src="
          makeImgHost(
            `/s3-${
              s3_active_idx === 1 ? 'ipl' : 'led'
            }-20231214.jpg?imageMogr2/format/webp`
          )
        "
        alt="强脉冲光和 LED 光的描述图片"
      />
    </div>

    <!-- 移动主体 -->
    <div
      class="delay-700 sm:hidden block animate-show bg-white rounded-2xl px-6 py-11 mt-12"
    >
      <ul
        class="flex flex-col justify-center items-center text-[19px] font-medium"
      >
        <li
          class="border-b-2 border-[rgb(131,95,56)] pb-4 mb-8"
          :class="{ 'active-toggle': s3_active_idx === 1 }"
          @click="s3_active_idx = 1"
        >
          <div class="flex justify-between items-center">
            <span>强脉冲光(IPL)</span>
            <ChevronUpIcon
              class="w-6 transition"
              :class="{ 'rotate-180': s3_active_idx !== 1 }"
            />
          </div>
          <div class="expander mt-4">
            <div
              class="expander-content text-[13px] font-normal leading-[21px]"
            >
              {{ $t("s3_3_1") }}
              <img
                loading="lazy"
                class="w-full mt-6 mb-3"
                :src="
                  makeImgHost(
                    `/mobile/s3-ipl-20231212.webp?imageMogr2/quality/50`
                  )
                "
                alt="强脉冲光的描述图片"
              />
            </div>
          </div>
        </li>

        <li
          :class="{ 'active-toggle': s3_active_idx === 2 }"
          @click="s3_active_idx = 2"
        >
          <div class="flex justify-between items-center">
            <span>LED光</span>
            <ChevronUpIcon
              class="w-6 transition"
              :class="{ 'rotate-180': s3_active_idx !== 2 }"
            />
          </div>
          <div class="expander">
            <div
              class="expander-content text-[13px] font-normal leading-[21px]"
            >
              <div class="pt-4"></div>
              {{ $t("s3_4_1") }}
              <img
                loading="lazy"
                class="w-full mt-6"
                :src="
                  makeImgHost(
                    `/mobile/s3-led-20231212.webp?imageMogr2/quality/50`
                  )
                "
                alt="LED光的描述图片"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      :srcset="makeImgHost('/mobile/bg-3-20231212.webp')"
    />
    <source
      media="(min-width: 640px)"
      :srcset="makeImgHost('/bg3-20231212.jpg?imageMogr2/format/webp')"
    />
    <img
      class="img-bg"
      :src="makeImgHost('/bg3-20231212.jpg?imageMogr2/format/webp')"
      alt="凭借光，重现光背景图片"
    />
  </picture>
</template>

<script setup>
import { ChevronUpIcon } from "@heroicons/vue/24/outline";
import useImgHost from "~/hooks/useImgHost";

const { makeImgHost } = useImgHost();

const s3_active_idx = ref(1);
</script>
