import {defineStore} from 'pinia'
import axios from 'axios'
export const useUserStorage = defineStore('userStore',{
    state: ()=>({
        partner: {
            id:'',
            image: 'Не авторизован',
            name: 'Не авторизован',
            agreement: 'Не авторизован',
            practice_topics: 'Не авторизован',
        },
        auth:{
            username:'Не авторизован',
            password:'Не авторизован',
        },
        

    }),
    actions:{
       
        // setUser(partner){
        //     this.partner=partner
        // },
        // setAuth(auth){
        //     this.auth=auth
        // },
        // async setUserFromServer(){
        //     this.auth.username = JSON.parse(localStorage.getItem('auth')).username
        //     if (this.auth != null){
        //         await axios.get(
        //             '/api/users/'+this.auth.username
        //         ).then(res=>res.data)
        //          .then(data=>{
        //             this.user=data
        //             localStorage.setItem('user', JSON.stringify(data));
        //          })
        //     }
        //     else alert('Вы не авторизованы')
        // },
        // async getUserList(){
        //     axios.get('/api/users/')
        //     .then(resp=>resp.data)
        //     .then(data=>this.users=data)
        // },
        // async changeAuthority(id){
        //     axios.patch('api/users/'+id)
        //     .then(resp=>resp.data)
        //     .then(data => this.users.filter((el)=>el.id === data.id)[0] = data)
        // }
        

    }
})