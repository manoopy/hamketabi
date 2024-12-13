<script lang="ts" setup></script>

<template>
  <div class="w-[9.5rem] bg-white border overflow-hidden rounded-lg">
    <ULink to="/books/1">
      <img
        src="@/assets/images/b1.png"
        alt="Book"
        class="w-full h-[190px] object-cover"
      />
    </ULink>

    <div class="text-center pt-2 px-1">
      <ULink to="/books/1">
        <h2 class="text-xs font-semibold">طرح کلی اندیشه اسلامی</h2>
      </ULink>

      <p class="text-xs text-gray-600 mt-2">آیت الله خامنه ای</p>

      <p class="text-xs text-center my-2">
        در انتظار
        <span class="text-[#2ecd71] font-bold">2</span>
        نفر
      </p>
    </div>

    <UButton block variant="soft" label="مشارکت" />
  </div>
</template>

<style lang="scss" scoped></style>
