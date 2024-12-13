<script lang="ts" setup>
const authStore = useAuthStore();

definePageMeta({
  layout: "empty",
  middleware: "auth",
});

const step = ref(0);

const state = reactive({
  phone: undefined,
  code: undefined,
});

const onSubmit = () => {
  authStore.authenticate();
};
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center bg-green-50">
    <UContainer>
      <ULink to="/">
        <img src="@/assets/images/logo.png" alt="logo" class="size-72" />
      </ULink>

      <p class="text-xl text-center mt-4">جایی برای راحتی شما کتابخونا</p>

      <UForm
        :state="state"
        class="w-full flex flex-col gap-y-8 mt-12"
        @submit="onSubmit"
      >
        <UFormGroup label="شماره تماس" name="phone">
          <UInput v-model="state.phone" size="xl" type="tel" />
        </UFormGroup>

        <template v-if="step">
          <UFormGroup label="کد پیامک شده" name="code">
            <UInput v-model="state.code" type="tel" size="xl" />
          </UFormGroup>

          <UButton block type="submit" size="xl" label="ورود" />
        </template>

        <template v-else>
          <UButton block @click="step++" size="xl" label="دریافت کد" />
        </template>
      </UForm>
    </UContainer>
  </div>
</template>

<style lang="scss" scoped></style>
