import { defineStore } from "pinia";
import axios from "axios";
export const useUserStorage = defineStore("userStore", {
  state: () => ({
    user: {
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      is_staff: true,
      is_superuser: true,
    },
    auth: {
      username: "Не авторизован",
      password: "Не авторизован",
    },
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setAuth(auth) {
      this.auth = auth;
    },
    async addUser() {
      axios.post("/api/out/base/user/add", this.user).then((res) => {});
    },
  },
});
