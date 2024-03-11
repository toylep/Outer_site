<script setup>
import { ref } from 'vue';
import { useUserStorage } from '@/storages/UserStorage';
import axios from 'axios';
let change_button = ref(true)
const on_change_click = () => {
    change_button.value *= -1;
    console.log(change_button.value)
}
const userStorage = ref(useUserStorage())
const userHolder = {
    id:'',
    image: '',
    username: '',
    agreement: '',
    practice_topics: '',
    password: ''
}

const authHolder = {
    username: '',
    password: '',
}
const regUser = async () => {
    try {
        console.log(userHolder)
        await axios.post('/api/users/reg/', userHolder)
    } catch (error) {
        console.error('Error registering user:', error)
    }
}

const authUser = async () => {
    console.log('fdkjg')
    try {

        console.log('/api/users/get/' + authHolder.username)
        const response = await axios.get(
            '/api/users/get/' + authHolder.username
        );
        const userData = response.data;

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('auth', JSON.stringify(authHolder));

        userStorage.value.setUser(JSON.parse(localStorage.getItem('user')))
        userStorage.value.setAuth(JSON.parse(localStorage.getItem('auth')))



    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
</script>

<template>
    <div>
        <a class="nav-link active" aria-current="page" data-bs-toggle="modal" data-bs-target="#login">
            Авторизоваться
        </a>

        <!-- Modal for Login -->
        <div>
            <form>
                <div class="modal fade" id="login" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                    aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog" v-if="change_button == true">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">
                                    Авторизация
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="exampleInputUsername">Login</label>
                                    <input class="form-control" id="exampleInputUsername" placeholder="Username"
                                        v-model="authHolder.username" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        placeholder="Password" v-model="authHolder.password" />
                                </div>
                                <!-- ... Other form elements ... -->
                                <button href="/" type="button" class="btn btn-primary" data-bs-target="#login"
                                    data-bs-dismiss="modal" @click="authUser">
                                    Авторизоваться
                                </button>
                            </div>
                            <button class="btn btn-primary" @click="on_change_click"> Еще нет аккаунта?
                            </button>
                            <!-- ... Modal footer ... -->
                        </div>
                    </div>
                    <!--  -->
                    <div class="modal-dialog" v-else>
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">
                                    Регистрация
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="exampleInputName">Логотип компании</label>
                                    <input class="form-control" id="exampleInputName" placeholder="Username"
                                        v-model="userHolder.image" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername">Login</label>
                                    <input class="form-control" id="exampleInputUsername" placeholder="Ваш username"
                                        v-model="userHolder.username" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername">Договор</label>
                                    <input class="form-control" id="exampleInputEmail" placeholder="Username"
                                        v-model="userHolder.agreement" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword"
                                        placeholder="Password" v-model="userHolder.password" />
                                    <!-- ... Rest of the form elements for registration ... -->
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword">Предлагаемые практики</label>
                                    <input type="password" class="form-control" id="exampleInputPassword"
                                        placeholder="Password" v-model="userHolder.practice_topics" />
                                    <!-- ... Rest of the form elements for registration ... -->
                                </div>
                                <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                    @click="regUser">Зарегистрироваться
                                </button>
                            </div>
                            <!-- ... Modal footer ... -->
                            <button class="btn btn-primary" @click="on_change_click"> Уже есть аккаунт?
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>@/storages/UserStorage