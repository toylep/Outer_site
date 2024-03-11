<template>
    
    <div class="card">
        <h1 style="text-align: center;">Профиль</h1>
        <div class="card-body">
            <h3 class="card-title">{{ userStorage.partner.image }}</h3>
            <hr>
            <h3 class="card-title">Название компании: {{ userStorage.partner.username }}</h3>
            <hr>
            <h3 class="card-title">Договор: {{ userStorage.partner.agreement }}</h3>
            <hr>
            <h3 class="card-title">Темы заданий на практику: {{ userStorage.partner.practice_topics }}</h3>
            <hr>
            <hr>
            <h3 class="card-title">Сфера деятельности: {{  }}</h3>
            <hr>
            <hr>
            <h3 class="card-title">Контактное лицо: {{  }}</h3>
            <hr>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue'
import { useUserStorage } from '@/storages/UserStorage';
import { onBeforeMount } from 'vue'
import axios from 'axios'
const userStorage = ref(useUserStorage())
let change_button = ref(true)
const changeUser = async () => {
    console.log(userStorage.value.id)
    await axios.patch('/api/users/' + userStorage.value.id,
    )
        .then(res => userStorage.value.setAuth({
            username: userHolder.username,
            password: userStorage.value.password
        }))
        .then(res => userStorage.value.setUserFromServer())
}
const on_change_click = () => {
    change_button.value *= -1
}
const userHolder = {
    image: '',
    username: '',
    agreement: '',
    practice_topics: ''


}

onBeforeMount(() => {
    if (!(JSON.parse(localStorage.getItem('user')) === null)) {
        userStorage.value.setUser(JSON.parse(localStorage.getItem('user')))
        userStorage.value.setAuth(JSON.parse(localStorage.getItem('auth')))
    }
})
</script>@/storages/UserStorage