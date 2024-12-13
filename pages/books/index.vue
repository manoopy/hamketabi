<script lang="ts" setup></script>

<template>
  <UContainer class="flex flex-col gap-y-8">
    <p class="text-center text-xl font-bold">لیست کتاب ها</p>

    <div class="grid grid-cols-2 gap-4">
      <template v-for="(item, index) in 24" :key="index">
        <BookCard />
      </template>
    </div>
  </UContainer>
</template>

<style lang="scss" scoped></style>
