<script lang="ts" setup>
const authStore = useAuthStore();

const provinces = [
  {
    label: "قم",
    id: "۱",
  },
  {
    label: "تهران",
    id: "۲",
  },
  {
    label: "اصفهان",
    id: "۳",
  },
  {
    label: "مشهد",
    id: "۴",
  },
  {
    label: "تبریز",
    id: "۵",
  },
];

const state = reactive({
  phone: "09123456789",
  first_name: undefined,
  last_name: undefined,
  emai: undefined,
  age: undefined,
  province: undefined,
});
</script>

<template>
  <UContainer class="flex flex-col gap-y-4">
    <UAvatar
      src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="Avatar"
      size="3xl"
      class="mx-auto"
    />

    <span class="absolute left-0">
      <UButton
        @click="authStore.logout()"
        size="xs"
        color="red"
        variant="outline"
        icon="i-solar-logout-2-line-duotone"
      />
    </span>

    <div>
      <UForm
        :state="state"
        class="w-full flex flex-col gap-y-3"
        @submit="onSubmit"
      >
        <UFormGroup label="شماره تماس" name="phone">
          <UInput v-model="state.phone" size="xl" disabled class="opacity-50" />
        </UFormGroup>

        <UFormGroup label="نام" name="first_name">
          <UInput v-model="state.first_name" size="xl" />
        </UFormGroup>

        <UFormGroup label="نام خانوادگی" name="last_name">
          <UInput v-model="state.last_name" size="xl" />
        </UFormGroup>

        <UFormGroup label="ایمیل" name="emai">
          <UInput v-model="state.emai" type="email" size="xl" />
        </UFormGroup>

        <UFormGroup label="سن" name="code">
          <UInput v-model="state.age" type="tel" size="xl" />
        </UFormGroup>

        <UFormGroup label="استان" name="province">
          <USelectMenu
            v-model="state.province"
            :options="provinces"
            size="xl"
            value-attribute="id"
            placeholder="انتخاب کنید"
          />
        </UFormGroup>

        <UButton block type="submit" size="xl" label="ثبت" />
      </UForm>
    </div>
  </UContainer>
</template>

<style lang="scss" scoped></style>
