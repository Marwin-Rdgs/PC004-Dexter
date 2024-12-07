<script setup lang="ts">

defineProps({
    name: String,
    img: String,
    bio: String,
    tools: String,
    mission: String,
})

</script>

<template>
    <div class="bg-secondary-color bg-opacity-20 rounded-lg px-[3%] pb-[3%]">
        <h2 class="text-white-color font-Secondary text-3xl text-center mb-[2%] pt-[2%]">{{ name }}</h2>
        <div class="flex justify-center">
            <img :src="`/docs/Stages/${img}.jpg`" :alt="`Logo de l'entreprise ${name}`" class="w-[355px]">
        </div>
        <p class="text-grey-color font-Primary my-[2%]"><b>Entreprise spécialisée</b> en {{ bio }}</p>
        <p class="text-grey-color font-Primary my-[2%]"><b>Missions confiées</b> : {{ mission }}</p>
        <p class="bg-alert-color bg-opacity-10 rounded-lg text-center text-grey-color font-Primary"><b>Outils</b> : {{ tools }}</p>
    </div>
</template>