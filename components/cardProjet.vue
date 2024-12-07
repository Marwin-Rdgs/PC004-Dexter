<script setup lang="ts">

defineProps({
    titre: String,
    img: String,
    tools: String,
    bio: String,
    link: String,
})
</script>

<template>

    <div class="grid gap-[3%]">
        <h2 class="text-white-color font-Secondary font-light text-center text-2xl">{{titre}}</h2>
        <div class="flex justify-center">
            <a :href="`/docs/projet/${link}.pdf`" target="_blank"> <img :src="`/docs/projet/${img}.jpg`" :alt="`Miniature du projet ${titre}`" class="w-[355px] rounded-xl scale-100 hover:scale-105 border-[0px] border-white-color hover:border-2"> </a>
        </div>
        <p class="bg-alert-color bg-opacity-10 rounded-lg text-center text-grey-color font-Primary">Outils : {{ tools }}</p>
        <p class="text-secondary-color font-Primary">{{ bio }}</p>
    </div>

</template>