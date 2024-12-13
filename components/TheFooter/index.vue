<script lang="ts" setup>
const authStore = useAuthStore();

const isLoggedIn = computed(() => {
  return authStore.isLoggedIn ? "/account" : "/auth";
});
</script>

<template>
  <footer
    class="fixed bottom-0 inset-x-0 z-50 bg-white border-t rounded-t-xl py-3"
  >
    <UContainer>
      <div class="flex justify-evenly gap-4">
        <UButton
          variant="none"
          icon="i-solar-add-circle-line-duotone"
          :padded="false"
          size="xl"
          active-class="scale-150 transition duration-150"
          to="/add-book"
        />

        <UButton
          variant="link"
          icon="i-solar-home-angle-2-line-duotone"
          :padded="false"
          size="xl"
          to="/"
          active-class="scale-150 transition duration-150"
        />

        <UButton
          variant="none"
          icon="i-solar-user-circle-line-duotone"
          :padded="false"
          size="xl"
          active-class="scale-150 transition duration-150"
          :to="isLoggedIn"
        />
      </div>
    </UContainer>
  </footer>
</template>

<style lang="scss" scoped></style>
