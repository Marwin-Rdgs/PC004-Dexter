<script setup lang="ts">

defineProps({
    name: String,
    img: String,
    bio: String,
})

</script>

<template>
        <div class="container">
  
  <!-- Card 1 -->
  <div class="card">

      <div class="imgBx">

          <img :src="`/imgs/${img}.jpg`" alt="Image1">

      </div>

      <div class="content">
          <h2>{{ name }}</h2>
          <p>{{ bio }}</p>
      </div>

  </div>   

</div>    
</template>

<style>

.container .card {
    position: relative;
    max-width: 300px;
    height: 215px;
    background: #FFFF;
    /* margin: 30px 10px; */
    /* padding: 20px 15px; */
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0,0.5);
    transition: 0.3s ease-in-out;
}

.container .card:hover {
    height: 420px;
}

.container .card .imgBx {
    position: relative;
    width: 260px;
    height: 260px;
    top: -60px;
    left: 20px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0,0.2);
}

.container .card .imgBx img {
    max-width: 100%;
    border-radius: 4px;
}

.container .card .content {
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.container .card:hover .content {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
}
</style>