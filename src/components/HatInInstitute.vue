<template>
    <div class="card" :style="{ backgroundImage: 'url(' + HatImg + ')' }">
        <div class="card-body">
            <h2 style="width: fit-content; background-color: skyblue; border-radius: 3px;">
                Промышленные партнеры
            </h2>

            <div>
                <button href="#" class="btn btn-light">
                    <router-link :to="{ name: 'home' }">На главную </router-link>
                </button>
            </div>
        </div>


    </div>
</template>
<script setup>
import HatImg from '@/assets/pics/hat.jpeg';

</script>