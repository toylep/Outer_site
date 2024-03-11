import axios from "axios";
import { defineStore } from "pinia";
export const useInstStorage = defineStore("instituteStore", {
  state: () => ({
    Insts: []

  }),
  actions: {
    async getInstsFromServer() {
      console.log("получаем институты")
      axios.get("/api/out/faculty/")
      .then((response) => {
          this.Insts = response.data;
          console.log(this.Insts);
        });
    },
  }
})
