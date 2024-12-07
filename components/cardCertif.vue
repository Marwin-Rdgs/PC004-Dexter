<script setup lang="ts">

defineProps({
    name: String,
    img: String,
    link: String,
})

</script>

<template>
    <div class="bg-secondary-color bg-opacity-30 rounded-xl p-[2%] group">
        <div class="flex justify-center">
            <a :href="`/docs/certif/${link}.pdf`" target="_blank">
            <img :src="`/docs/certif/${img}.jpg`" :alt="`certification de ${name}`" class="h-[355px] scale-100 group-hover:scale-105 z-0 rounded-xl">
            </a>
        </div>
        <div class="flex justify-center z-10 px-[10%] mt-[4%]">
            <h3 class="font-Secondary font-bold text-white-color">{{ name }}</h3>
        </div>
    </div>
</template>