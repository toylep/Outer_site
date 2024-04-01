<template>
    
        <div>
            <div class="container-fluid" style="text-align: center;">

                
                    <IntitituteTest />
                
            </div>
        </div>
    

</template>
<script setup>
import IntitituteTest from '@/components/Institute.vue';
onBeforeMount(() => {
    console.log("страничка грузится")


})
</script>
