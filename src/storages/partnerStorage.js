import {defineStore} from 'pinia'
import axios from 'axios'

export const usePartnerStorage = defineStore('partnerStore',{
    state: () =>({
        partners:[]
    }),
    actions:{
        setInst(partners){
            this.partners = partners
        },
        addInst(partners){
            this.partners.push(partners)
        },
        async setPartnersFromServer(page){
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
        async setPartnersFromServerWithCategory(category_id,page){
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