import axios from 'axios'
import {defineStore} from 'pinia'
export const useInstStorage = defineStore('instituteStore',{
    state: () => ({
        Insts:[{name:"inst", specs: "test", works:"test",img: "F:/komp.png",}],
        change_id:0
    }),
    actions:{
        setInst(Insts){
            this.Insts = Insts
        },
        addInst(Insts){
            this.Insts.push(Insts)
        },
        async setinstFromServer(page){
            try {
                const response = await axios.get(
                    '/api/',{
                        params:{
                            page:page
                        }
                    }
                    )
                console.log(response.data)
                this.Insts = response.data.results

            } catch (err){
                alert('Нет соединения с сервером :(')
                console.log(err)
            }
        },
        async setInstFromServerWithCategory(category_id,page){
            try {
                const response = await axios.get(
                    '/api/',{
                        params:{
                            category:category_id,
                            page:page
                        }
                    }
                    )
                console.log(response.data)
                this.Insts = response.data.results

            } catch (err){
                alert('Нет соединения с сервером :(')
                console.log(err)
            }
        },
        setChangeId(id){
            alert('сhanged')
            this.change_id=id
        }

    }
})