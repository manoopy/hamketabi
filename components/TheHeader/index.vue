<script lang="ts" setup></script>

<template>
  <header class="sticky top-0 inset-x-0 z-50 bg-white shadow-md py-3 mb-8">
    <UContainer>
      <div class="flex items-center justify-between gap-2">
        <ULink to="/">
          <img
            src="~/assets/images/logo.png"
            class="size-10 mx-auto"
            alt="logo"
          />
        </ULink>

        <UInput
          icon="i-solar-magnifer-line-duotone"
          size="sm"
          color="white"
          variant="none"
          :trailing="false"
          placeholder="جستجو..."
          class="bg-gray-100 rounded-xl"
        />

        <span class="relative flex">
          <UButton
            variant="link"
            color="black"
            icon="i-solar-streets-outline"
            :padded="false"
            size="xl"
            to="/account"
          />
          <span class="absolute -top-1 -left-1">
            <span
              class="text-xs text-white flex items-center justify-center size-4 rounded-full bg-green-500"
              >5</span
            >
          </span>
        </span>
      </div>
    </UContainer>
  </header>
</template>

<style lang="scss" scoped></style>
