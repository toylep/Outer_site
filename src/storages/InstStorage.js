import axios from "axios";
import { defineStore } from "pinia";
export const useInstStorage = defineStore("instituteStore", {
  state: () => ({
    Insts: []

  }),
  actions: {
    async getInstsFromServer() {
      axios.get("/api/out/faculty/")
      .then((response) => {
          this.Insts = response.data;
        });
    },
  }
})
