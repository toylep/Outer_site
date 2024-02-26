<template>
    <div>
        <div v-if="practiceStorage.practices.length === 0" style="background-color: crimson;">
            <h2>Ошибка - не указан институт, перейдите на главную страницу и нажмите на нужный институт</h2>
        </div>
        <div v-for="practice in  practiceStorage.practices">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">{{ practice.partner.name }}</h5>
                </div>
                <img :src="practice.partner.image" class="card-img-top" alt="тут должна быть картинка"
                    style="width: 15rem;">
                <div class="card-body">
                    <p class="card-text">{{ practice.partner.agreement }}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="link in practice.doc_links">
                        <div v-if="link.type === 'Веб-сайт'">
                            <i class="bi bi-globe"><a :href="link.url">{{ " " + link.type }}</a></i>
                        </div>
                        <div v-else>
                            <i class="bi bi-file-earmark-arrow-down-fill">{{ link.type }}</i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import { usePracticeStorage } from '@/storages/PracticeStorage'
import { onBeforeMount } from 'vue';
import axios from 'axios';

const practiceStorage = ref(usePracticeStorage())
const partnerHolder = {
    image: '',
    name: '',
    link: '',
    description: '',
    agreement: '',

}


onBeforeMount(() => {
    // practiceStorage.value.getPracticeFromServer()
})
</script>
