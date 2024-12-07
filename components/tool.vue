<script setup lang="ts">

defineProps({
    img: String,
    titre: String,
})

</script>

<template>
<div class="group">
    <div class="flex justify-center">
        <img :src="`/docs/CV/${img}.png`" alt="" class="w-[64px] scale-100 group-hover:scale-110">
    </div>
    <h3 class="text-center text-white-color opacity-0 group-hover:opacity-100">{{ titre }}</h3>
</div>

</template>