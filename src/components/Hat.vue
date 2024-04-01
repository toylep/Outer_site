<template>


    <div class="Header">
        <a href="https://www.istu.edu/"><button class="logo"><img
                    src="https://www.istu.edu/upload/iblock/f55/logo_1.png" class="logo"></button></a>
        <div class="name">

            Производственные партнеры <br>
            ИРНИТУ

        </div>
        <div class="icons">
            <a href="https://t.me/ckirnitu"><button class="hat_butt"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1200px-Telegram_logo.svg.png"
                        style="height: 35px; width: 35px; "></button></a>
            <a href = "https://job.istu.edu/in"><button class="hat_butt"><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALBplMxySL51Y_dJZ5FTrLpa1rpD72FebJA&usqp=CAU"
                    style="height: 35px; width: 35px; margin-left: 7px;">
                
            </button></a>
        </div>
    </div>


</template>

<script setup>
import { RouterLink } from 'vue-router';
import LoginWindow from './LoginWindow.vue';
import { useUserStorage } from '@/storages/UserStorage';
import { ref, onBeforeMount } from 'vue';
const userStorage = ref(useUserStorage())
const user = {
    username: 'Не авторизован',
    name: 'Не авторизован',
    email: 'Не авторизован',
    is_staff: false,
    balance: 0,
}
const auth = {
    username: 'Не авторизован',
    password: 'Не авторизован',
}
const logout = () => {
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('auth', JSON.stringify(auth))
    userStorage.value.setUser(user)
    userStorage.value.setAuth(auth)
}
onBeforeMount(() => {
    if (JSON.parse(localStorage.getItem('user')) == user) {
        userStorage.value.setUserFromServer()
    }
})
</script>@/storages/UserStorage./LoginWindow.vue
