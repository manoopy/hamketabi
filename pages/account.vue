<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});

const items = [
  {
    label: "پروفایل",
    icon: "i-solar-user-rounded-line-duotone",
    slot: "profile",
  },
  {
    label: "پویش های من",
    icon: "i-solar-user-hand-up-bold-duotone",
    slot: "campaign",
  },
];
</script>

<template>
  <div class="-mt-5 mx-3">
    <UTabs :items="items">
      <template #profile="{ item }">
        <Profile />
      </template>

      <template #campaign="{ item }">
        <div class="flex flex-col gap-y-4">
          <template v-for="(item, index) in 5" :key="index">
            <Campaign />
          </template>
        </div>
      </template>
    </UTabs>
  </div>
</template>

<style lang="scss" scoped></style>
