import {defineStore} from 'pinia'
import axios from 'axios'

export const usePracticeStorage = defineStore('practiceStore',{
    state: () =>({
        practices:[],
        inst_id: 0,
    }),
    actions:{
        async getPracticeFromServer(){
            console.log("получаем практики")
            axios.get("api/out/base/practice/",{
                params: {
                    faculty: this.inst_id
                }
            })
            .then((response) => {this.practices = response.data})
            .catch(err=>{this.practices = []})
            
        },
        async setInstId(id){
            this.inst_id = id
        }


    }
})