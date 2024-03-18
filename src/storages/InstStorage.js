import axios from "axios";
import { defineStore } from "pinia";
export const useInstStorage = defineStore("instituteStore", {
  state: () => ({
    Insts: [
      {
      "id": 1,
      "specialities": [
      {
      "name": "ИСТ",
      "institute": 1
      },
      {
      "name": "АСУ",
      "institute": 1
      },
      {
      "name": "ЭВМ",
      "institute": 1
      },
      {
      "name": "ИБ",
      "institute": 1
      }
      ],
      "name": "ИиТИАД"
      },
      {
        "id": 1,
        "specialities": [
        {
        "name": "ИСТ",
        "institute": 1
        },
        {
        "name": "АСУ",
        "institute": 1
        },
        {
        "name": "ЭВМ",
        "institute": 1
        },
        {
        "name": "ИБ",
        "institute": 1
        }
        ],
        "name": "ИиТИАД"
        },
        {
          "id": 1,
          "specialities": [
          {
          "name": "ИСТ",
          "institute": 1
          },
          {
          "name": "АСУ",
          "institute": 1
          },
          {
          "name": "ЭВМ",
          "institute": 1
          },
          {
          "name": "ИБ",
          "institute": 1
          }
          ],
          "name": "ИиТИАД"
          },
          {
            "id": 1,
            "specialities": [
            {
            "name": "ИСТ",
            "institute": 1
            },
            {
            "name": "АСУ",
            "institute": 1
            },
            {
            "name": "ЭВМ",
            "institute": 1
            },
            {
            "name": "ИБ",
            "institute": 1
            }
            ],
            "name": "ИиТИАД"
            },
            {
              "id": 1,
              "specialities": [
              {
              "name": "ИСТ",
              "institute": 1
              },
              {
              "name": "АСУ",
              "institute": 1
              },
              {
              "name": "ЭВМ",
              "institute": 1
              },
              {
              "name": "ИБ",
              "institute": 1
              }
              ],
              "name": "ИиТИАД"
              },
              {
                "id": 1,
                "specialities": [
                {
                "name": "ИСТ",
                "institute": 1
                },
                {
                "name": "АСУ",
                "institute": 1
                },
                {
                "name": "ЭВМ",
                "institute": 1
                },
                {
                "name": "ИБ",
                "institute": 1
                }
                ],
                "name": "ИиТИАД"
                },
                {
                  "id": 1,
                  "specialities": [
                  {
                  "name": "ИСТ",
                  "institute": 1
                  },
                  {
                  "name": "АСУ",
                  "institute": 1
                  },
                  {
                  "name": "ЭВМ",
                  "institute": 1
                  },
                  {
                  "name": "ИБ",
                  "institute": 1
                  }
                  ],
                  "name": "ИиТИАД"
                  },
                  {
                    "id": 1,
                    "specialities": [
                    {
                    "name": "ИСТ",
                    "institute": 1
                    },
                    {
                    "name": "АСУ",
                    "institute": 1
                    },
                    {
                    "name": "ЭВМ",
                    "institute": 1
                    },
                    {
                    "name": "ИБ",
                    "institute": 1
                    }
                    ],
                    "name": "ИиТИАД"
                    },
                    {
                      "id": 1,
                      "specialities": [
                      {
                      "name": "ИСТ",
                      "institute": 1
                      },
                      {
                      "name": "АСУ",
                      "institute": 1
                      },
                      {
                      "name": "ЭВМ",
                      "institute": 1
                      },
                      {
                      "name": "ИБ",
                      "institute": 1
                      }
                      ],
                      "name": "ИиТИАД"
                      },
                      {
                        "id": 1,
                        "specialities": [
                        {
                        "name": "ИСТ",
                        "institute": 1
                        },
                        {
                        "name": "АСУ",
                        "institute": 1
                        },
                        {
                        "name": "ЭВМ",
                        "institute": 1
                        },
                        {
                        "name": "ИБ",
                        "institute": 1
                        }
                        ],
                        "name": "ИиТИАД"
                        },
                        {
                          "id": 1,
                          "specialities": [
                          {
                          "name": "ИСТ",
                          "institute": 1
                          },
                          {
                          "name": "АСУ",
                          "institute": 1
                          },
                          {
                          "name": "ЭВМ",
                          "institute": 1
                          },
                          {
                          "name": "ИБ",
                          "institute": 1
                          }
                          ],
                          "name": "ИиТИАД"
                          },
                          {
                            "id": 1,
                            "specialities": [
                            {
                            "name": "ИСТ",
                            "institute": 1
                            },
                            {
                            "name": "АСУ",
                            "institute": 1
                            },
                            {
                            "name": "ЭВМ",
                            "institute": 1
                            },
                            {
                            "name": "ИБ",
                            "institute": 1
                            }
                            ],
                            "name": "ИиТИАД"
                            }
      ]

  }),
  actions: {
    async getInstsFromServer() {
      console.log("получаем институты")
      axios.get("/api/out/legacy/faculty")
      .then((response) => {
          this.Insts = response.data;
          console.log(this.Insts);
        });
    },
  }
})
