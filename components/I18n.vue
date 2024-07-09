<template>
  <div>
    <Popover :type="isMobile ? 'dialog' : 'popover'">
      <LanguageIcon
        class="w-6 text-white mt-4 z-10 cursor-pointer -translate-y-2"
      />
      <template #content>
        <div
          class="bg-[rgba(0,0,0,.7)] text-white border-2 border-white rounded-lg text-base flex flex-col justify-center items-center break-keep"
        >
          <button
            v-for="item in langList"
            :key="item.locale"
            class="py-2 hover:underline flex items-center px-5"
            @click="setLocale(item.locale)"
          >
            <span v-show="item.locale === locale">✔</span>
            <span class="pl-2">{{ item.name }}</span>
          </button>
        </div>
      </template>
    </Popover>
  </div>
</template>

<script setup>
import Popover from "./Popover.vue";
import { LanguageIcon } from "@heroicons/vue/24/outline";
import { useIsMobile } from "@/hooks/useIsMobile";
const isMobile = useIsMobile();
const { setLocale, locale } = useI18n();

const langList = [
  { name: "English", locale: "en" },
  { name: "简体中文", locale: "zh" },
];
</script>
