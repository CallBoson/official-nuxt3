<template>
  <div class="custom-width">
    <!-- pc -->
    <div class="hidden sm:flex items-center justify-between text-xs text-black">
      <div class="flex space-x-5">
        <span
          >Copyright &copy; 2023 UGLOSS 广东火猩未来网络有限公司 版权所有</span
        >
        <a href="https://beian.miit.gov.cn/" target="_blank"
          >粤ICP备2022088305号-2</a
        >
        <div class="flex space-x-1 items-center">
          <img
            loading="lazy"
            class="w-[18px] relative"
            src="/copyright.webp"
            alt="粤公网安备44011302004172号"
          />
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302004172"
            >粤公网安备44011302004172号</a
          >
        </div>
      </div>

      <div>
        <a href="/privacy">
          <span>隐私协议</span>
        </a>
        <span class="mx-1">|</span>
        <a href="/protocol">
          <span>用户协议</span>
        </a>
      </div>
    </div>

    <!-- 移动 -->
    <div class="sm:hidden flex flex-col items-center text-[10px]">
      <div class="text-black mb-5">
        <a href="/privacy">
          <span>隐私协议</span>
        </a>
        <span class="mx-1">|</span>
        <a href="/protocol">
          <span>用户协议</span>
        </a>
      </div>

      <span class="text-black opacity-50 mb-3"
        >Copyright &copy; 2023 UGLOSS 广东火猩未来网络有限公司 版权所有</span
      >

      <div class="text-[rgba(0,0,0,.5)] flex space-x-3">
        <a href="https://beian.miit.gov.cn/" target="_blank"
          >粤ICP备2022088305号-2</a
        >
        <div class="flex space-x-1 items-center">
          <img
            loading="lazy"
            class="w-[11px] relative"
            src="/copyright.webp"
            alt="粤公网安备44011302004172号"
          />
          <a
            target="_blank"
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302004172"
            >粤公网安备44011302004172号</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
