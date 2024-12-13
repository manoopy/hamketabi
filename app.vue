<script lang="ts" setup>
// If you want to use it in setup, import from the nuxtApp.
const { $pwa } = useNuxtApp();

const toast = useToast();

onMounted(() => {
  if ($pwa.offlineReady) toast.success("App ready to work offline");
});
</script>

<template>
  <div>
    <div v-show="$pwa.needRefresh">
      <span> New content available, click on reload button to update. </span>

      <button @click="$pwa.updateServiceWorker()">Reload</button>
    </div>

    <VitePwaManifest />

    <NuxtRouteAnnouncer />

    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* Blur */
.blur-enter-active,
.blur-leave-active {
  @apply transition-all;
}
.blur-enter-from,
.blur-leave-to {
  @apply opacity-0 blur-lg;
}
</style>
