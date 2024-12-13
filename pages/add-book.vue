<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const state = reactive({
  title: undefined,
  wirter: undefined,
  price: undefined,
  cover: undefined,
  descritpion: undefined,
});
</script>

<template>
  <UContainer class="flex flex-col gap-y-6">
    <p class="text-xl font-bold">درخواست کتاب</p>

    <div>
      <UForm
        :state="state"
        class="w-full flex flex-col gap-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="عنوان کتاب" name="phone">
          <UInput v-model="state.title" size="xl" />
        </UFormGroup>

        <UFormGroup label="نام نویسنده" name="code">
          <UInput v-model="state.wirter" size="xl" />
        </UFormGroup>

        <UFormGroup label="قیمت" name="code">
          <UInput v-model="state.price" size="xl" />
        </UFormGroup>

        <UFormGroup label="عکس کتاب" name="code">
          <UInput v-model="state.cover" type="file" size="xl" />
        </UFormGroup>

        <UFormGroup label="توضیحات" name="code">
          <UTextarea v-model="state.descritpion" :rows="7" />
        </UFormGroup>

        <UButton block type="submit" size="xl" label="ثبت" />
      </UForm>
    </div>
  </UContainer>
</template>

<style lang="scss" scoped></style>
