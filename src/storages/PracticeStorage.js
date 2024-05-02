import {defineStore} from 'pinia'
import axios from 'axios'

export const usePracticeStorage = defineStore('practiceStore',{
    state: () =>({
        practices:[],
        inst_id: 0,
    }),
    actions:{
        async getPracticeFromServer(){
            // console.log("получаем практики")
            axios.get("/api/out/base/practice",{
                params: {
                    faculty: await this.getInstId()
                }
            })
            .then((response) => {this.practices = response.data})
            .catch(err=>{this.practices = []})
            
        },
        setInstId(id){
            this.inst_id = id
        },
        getInstId(){
            return this.inst_id
        }


    }
})