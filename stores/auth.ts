import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    status: ref(useCookie("login_status") || false)
  }),

  getters: {
    isLoggedIn: (state) => state.status,
  },

  actions: {
    authenticate() {
      const _token = useCookie("login_status");
      _token.value = true;
      useRouter().push("/");
    },

    logout() {
      const _login = useCookie("login_status")
      _login.value = null
      useRouter().push("/");
    },
  },
});
