<template>
    <div>
        <div v-for="inst in instStorage.Insts">
            <button href="#" class="button">
                <router-link :to="{ name: 'partner' }">
                    <div class="Institutes" style="background-image: url(' {{ inst.image }}');">
                        <div class="textInst">
                            <div style="margin-left: 10px; margin-bottom: 15px;">{{ inst.name }}</div>

                            <div class="specText"><strong>Специальности:</strong>
                                 {{instStorage.Insts[0].specialities.map((el)=>el.name).join(" ")}}
                            </div>

                            <div class="specText"><strong>Должности:</strong>{{ inst.works }}</div>

                        </div>
                    </div>
                </router-link>
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useInstStorage } from '@/storages/InstStorage'
import { onBeforeMount } from 'vue';
import axios from 'axios';
let change_button = ref(true)

const instStorage = ref(useInstStorage())
const instHolder = {
    image: '',
    name: '',
    specs: '',
    works: '',
    agreement: '',
}
const instStorageChange = async (inst_id) => {
    try {
        const repsonce = await axios.put('/api/' + inst_id, instHolder, {
            auth: userStorage.value.auth,
            headers: {
                "Content-Type": "multipart/form-data"
            },

        })
        instStorage.value.setinstsFromServer()
    } catch (err) {
        console.log(err)
    }
}
const deleteInst = async (id) => {

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
    instStorage.value.setInstFromServer()
}
const changePic = (event) => {
    instStorage.picture = event.target.files[0]
    console.log(instHolder.picture)
}
const reg_button_click = (index) => {
    change_button.value *= -1
}

onBeforeMount(() => {
    // instStorage.value.setinstFromServer(2, 1)
   
})
</script>
