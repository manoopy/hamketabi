<script lang="ts" setup></script>

<template>
  <UContainer class="flex flex-col gap-y-8">
    <div class="text-center">
      <img
        src="@/assets/images/b1.png"
        alt="book"
        class="w-full h-[190px] object-cover"
      />

      <h2 class="font-semibold mt-3">طرح کلی اندیشه اسلامی</h2>

      <p class="text-sm text-gray-600 mt-2">آیت الله خامنه ای</p>

      <UButton block variant="soft" label="مشارکت" size="lg" class="mt-4" />

      <div class="grid grid-cols-2 gap-x-2 gap-y-6 mt-4">
        <div>
          <p>قیمت کتاب</p>
          <UButton block variant="soft" color="red" label="300000 تومان" />
        </div>

        <div>
          <p>قیمت اشتراکی</p>
          <UButton block variant="soft" color="blue" label="110000 تومان" />
        </div>

        <div>
          <p>ظرفیت</p>
          <UButton
            block
            variant="soft"
            color="red"
            icon="i-solar-users-group-rounded-bold-duotone"
            label="3 نفر"
          />
        </div>

        <div>
          <p>تعداد مشارکت</p>
          <UButton
            block
            variant="soft"
            color="blue"
            icon="i-solar-users-group-rounded-bold-duotone"
            label="۱ نفر"
          />
        </div>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-4">طرح کلی اندیشه اسلامی</h3>
      <p>
        معرفی کتاب طرح کلی اندیشه‎ ی اسلامی در قرآن کتاب طرح کلی اندیشه اسلامی
        در قرآن سلسله جلسات آیت‌الله سید علی خامنه‌ای رهبر معظم انقلاب، با موضوع
        اندیشه اسلامی در قرآن در ماه رمضان سال ۱۳۵۳ است. این کتاب را انتشارات
        صهبا منتشر کرده و برای خرید و دانلود در طاقچه ارائه شده است. درباره کتاب
        طرح کلی اندیشه اسلامی در قرآن اثر سیدعلی خامنه ای سخن‌رانی‌های طرح کلی
      </p>
    </div>
  </UContainer>
</template>

<style lang="scss" scoped></style>
