export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  if (authStore.isLoggedIn && to.name === "auth") {
    return navigateTo("/");
  } else if (!authStore.isLoggedIn && to.name !== "auth") {
    return navigateTo("/auth");
  }
});
