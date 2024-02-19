import axios from "axios";
import { defineStore } from "pinia";
export const useInstStorage = defineStore("instituteStore", {
  state: () => ({
    Insts: [
      {
        id: 1,
        specialities: [
          {
            id: 1,
            name: "ИСТ",
            institute: 1,
          },
          {
            id: 2,
            name: "АСУ",
            institute: 1,
          },
          {
            id: 3,
            name: "ЭВМ",
            institute: 1,
          },
          {
            id: 4,
            name: "ИБ",
            institute: 1,
          },
        ],
        practices: [
          {
            id: 1,
            doc_links: [],
            partner: {
              id: 1,
              name: "ФГБУН Институт динамики систем и теории управления имени В.А. Матросова СО РАН",
              image:
                "https://open.istu.edu/pluginfile.php/96891/mod_label/intro/%D0%BC%D0%B0%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2.png",
              agreement: "Договор с ИрНИТУ №ДД-2021/142 от 23.04.2021",
            },
            practice_topics: [],
            institute: 1,
          },
        ],
        name: "ИиТИАД",
      },
    ],
    change_id: 0,
  }),
  actions: {
    setInst(Insts) {
      this.Insts = Insts;
    },
    addInst(Insts) {
      this.Insts.push(Insts);
    },
    async setinstFromServer(page) {
      try {
        const response = await axios.get("/api/", {
          params: {
            page: page,
          },
        });
        console.log(response.data);
        this.Insts = response.data.results;
      } catch (err) {
        alert("Нет соединения с сервером :(");
        console.log(err);
      }
    },
    async setInstFromServerWithCategory(category_id, page) {
      try {
        const response = await axios.get("/api/", {
          params: {
            category: category_id,
            page: page,
          },
        });
        console.log(response.data);
        this.Insts = response.data.results;
      } catch (err) {
        alert("Нет соединения с сервером :(");
        console.log(err);
      }
    },
    setChangeId(id) {
      alert("сhanged");
      this.change_id = id;
    },
  },
});
