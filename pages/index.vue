<script lang="ts" setup></script>

<template>
  <UContainer class="flex flex-col gap-y-8">
    <div
      class="rounded-lg flex flex-col justify-center items-center text-center bg-gradient-to-r from-emerald-200 to-emerald-500 px-2 py-2"
    >
      <h2 class="text-white text-2xl font-bold mb-2">با هم بخوانیم</h2>
      <p class="text-white text-sm text-center">
        هم کتابی اولین و بزرگترین پلتفرم خرید اشتراکی کتاب
      </p>
    </div>

    <div>
      <div class="flex items-center justify-between mb-4">
        <p class="text-xl font-bold">پرطرفدارترین ها</p>

        <UButton
          variant="link"
          icon="i-solar-arrow-left-line-duotone"
          label="مشاهده بیشتر"
          trailing
          size="xs"
          to="/books"
        />
      </div>

      <div class="no-scrollbar -ml-4" style="overflow: scroll">
        <div class="flex gap-x-2 w-max">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between mb-4">
        <p class="text-xl font-bold">تازه‌ترین ها</p>

        <UButton
          variant="link"
          icon="i-solar-arrow-left-line-duotone"
          label="مشاهده بیشتر"
          trailing
          size="xs"
          to="/books"
        />
      </div>

      <div class="no-scrollbar -ml-4" style="overflow: scroll">
        <div class="flex gap-x-2 w-max">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between mb-4">
        <p class="text-xl font-bold">پرفروش‌ترین ها</p>

        <UButton
          variant="link"
          icon="i-solar-arrow-left-line-duotone"
          label="مشاهده بیشتر"
          trailing
          size="xs"
          to="/books"
        />
      </div>

      <div class="no-scrollbar -ml-4" style="overflow: scroll">
        <div class="flex gap-x-2 w-max">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style lang="scss" scoped></style>
