<template>
    <div>
        <div v-for="partner in  instStorage.Insts[0].practices">

            <div class="card" style="width: 25rem;">
                <img src={{ partner.partner.image }} class="card-img-top" alt="тут должна быть картинка">
                <div class="card-body">
                    <h5 class="card-title">{{ partner.partner.name}}</h5>
                    <p class="card-text">{{partner.partner.agreement }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">{{ partner.link }}</a>
                    
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import { usePartnerStorage } from '@/storages/partnerStorage'
import { useInstStorage } from '@/storages/InstStorage'
import { onBeforeMount } from 'vue';
import axios from 'axios';
let change_button = ref(true)
const instStorage = ref(useInstStorage())
const partnerStorage = ref(usePartnerStorage())
const partnerHolder = {
    image: '',
    name: '',
    link: '',
    description: '',
    agreement: '',
    
}
const partnerStorageChange = async (inst_id) => {
    try {
        const repsonce = await axios.put('/api/' + partner_id, partnerHolder, {
            auth: userStorage.value.auth,
            headers: {
                "Content-Type": "multipart/form-data"
            },

        })
        partnerStorage.value.setPartnersFromServer()
    } catch (err) {
        console.log(err)
    }
}
const deletePartners = async (id) => {

    try {
        await axios.delete('/api/' + id, {
            auth: {
                username: userStorage.value.auth.username,
                password: userStorage.value.auth.password
            },
        })
    } catch (err) {
        alert('У вас нет прав админа')
        console.log(err)
    }
    partnerStorage.value.setPartnersFromServer()
}
const changePic = (event) => {
    partnerStorage.picture = event.target.files[0]
    console.log(partnerHolder.picture)
}
const reg_button_click = (index) => {
    change_button.value *= -1
}

onBeforeMount(() => {
    partnerStorage.value.setPartnersFromServer(2, 1)

})
</script>
