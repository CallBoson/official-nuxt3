<!-- hover弹出层 -->
<template>
  <component :is="as" class="relative hover-container" @click="openDialog">
    <slot></slot>
    <!-- pc端显示hover -->
    <div
      v-if="type === 'popover'"
      class="popover-content opacity-0 transition-all duration-300 absolute z-10 invisible right-1/2 translate-x-1/2 pt-2"
    >
      <slot name="content"></slot>
    </div>

    <!-- 小屏则显示一个Dialog -->
    <Teleport to="body">
      <div
        v-if="type === 'dialog'"
        class="fixed left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-50"
        :class="isDialogOpened ? 'block' : 'hidden'"
      >
        <div class="h-full flex flex-col justify-center items-center">
          <slot name="content"></slot>
          <!-- 关闭按钮 -->
          <XCircleIcon
            class="w-10 text-white mt-4"
            @click.stop="isDialogOpened = false"
          />
        </div>
      </div>
    </Teleport>
  </component>
</template>

<script setup lang="ts">
import { XCircleIcon } from "@heroicons/vue/24/outline";
const props = defineProps({
  as: {
    type: String,
    default: "div",
  },
  type: {
    type: String,
    default: "popover", // popover, dialog
  },
});

const isDialogOpened = ref(false);
function openDialog() {
  if (props.type === "dialog") {
    isDialogOpened.value = true;
  }
}
</script>

<style scoped>
.hover-container:hover .popover-content {
  visibility: visible;
  opacity: 1;
}
</style>
