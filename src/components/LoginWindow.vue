<script setup>
import { ref } from 'vue';
import { useUserStorage } from '@/storages/UserStorage';
import axios from 'axios';

const userStorage = ref(useUserStorage())

const authHolder = {
    username: '',
    password: '',
}


// const authUser = async () => {
//     try {
//          axios.post('/api/out/base/auth/', authHolder).then((response) => {
//           userStorage.value.user = response.data
//         })
  
        
//         console.log( userStorage.value.user)
//         localStorage.setItem('user', JSON.stringify(userStorage.value.user));
//         localStorage.setItem('auth', JSON.stringify(authHolder));

//         userStorage.value.setUser(JSON.parse(localStorage.getItem('user')))
//         userStorage.value.setAuth(JSON.parse(localStorage.getItem('auth')))
//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// }
</script>

<template>
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" >
                Авторизация
            </h5>
        </div>
        <div class="modal-body">
            <div class="form-group">
                <label >Username</label>
                <input class="form-control"  placeholder="Username"
                    v-model="authHolder.username" />
            </div>
            <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control"  placeholder="Password"
                    v-model="authHolder.password" />
            </div>
            <router-link :to="{ name: 'user' }">
            <button href="/" type="button" class="btn btn-primary" data-bs-target="#login" 
                @click="userStorage.authInputUser(authHolder)">
                Авторизоваться
            </button></router-link>
        </div>
    </div>
</template>