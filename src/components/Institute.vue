<template>
    
        <a v-for="inst in instStorage.Insts" class = "block" >
            
                <button href="#" class="button"  style = "margin-left: 35px;" 
                    @click="() => { practiceStorage.setInstId(inst.id), practiceStorage.getPracticeFromServer() }">
                    <router-link :to="{ name: 'partner' }">
                        <div class="Institutes" :style="{ BackgroundImage: inst.image }">
                            <div class="textInst">
                                <div style="margin-left: 10px; margin-bottom: 15px;">{{ inst.name }}</div>

                                <div class="specText"><strong>Специальности:</strong>
                                    {{ inst.specialities.join(', ') }}
                                </div>

                                <!-- <div class="specText"><strong>Должности:</strong>{{ inst.works }}</div> -->

                            </div>
                        </div>
                    </router-link>
                </button>
            
            </a>
    
</template>
<script setup>
import { ref } from 'vue';
import { useInstStorage } from '@/storages/InstStorage'
import { onBeforeMount, onMounted } from 'vue';

import { usePracticeStorage } from '@/storages/PracticeStorage';
const instStorage = ref(useInstStorage())
const practiceStorage = ref(usePracticeStorage())
const instHolder = {
    image: '',
    name: '',
    specs: '',
    works: '',
    agreement: '',
}

onBeforeMount(() => {
    console.log("получаем институты")
    instStorage.value.getInstsFromServer()
    console.log(instStorage.value.getInstsFromServer())

})
</script>
