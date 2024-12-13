import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => ({
    surah: null
  }),

  getters: {
    // doubleCount: (state) => state.count * 2,
  },

  actions: {
    // toggleSidebar() {
    //   const status = this.admin.sidebar.status;
    //   this.admin.sidebar.status = !status;
    // },
  },
});
