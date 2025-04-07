<template>
  <div class="container pt-5 flex justify-center mx-auto">
<div class="desktop:flex phone:grid justify-center gap-52">

  <!-- PRO -->
  <div class="col-md-6 wow fadeInRight desktop:w-1/3" data-wow-delay="200ms">
    <ul class="timeline mt-4 pr-md-5">
      <li>
        <div class="title">4 mars 2025</div>
        <div class="details">
          <div class="flex justify-center">
            <img src="/public/imgs/veilles/UE.jpg" class="w-[355px] rounded-lg" alt="">
          </div>
          <h5 class="my-5"><b>Danger voiture autonome</b></h5>
          <a href="https://www.zonebourse.com/cours/action/ALPHABET-INC-24203373/actualite/L-UE-prevoit-d-autoriser-les-groupes-de-services-automobiles-a-acceder-aux-donnees-des-vehicule-49234708/" target="_blank" class="bg-primary-color text-white-color px-4 py-1 rounded-lg border-2 border-primary-color hover:bg-white-color hover:text-primary-color hover:font-bold"><button class="mt-5">Lire</button></a>
        </div>
      </li>
      <li>
        <div class="title">10 janvier 2025</div>
        <div class="details">
          <div class="flex justify-center">
            <img src="/public/imgs/veilles/lg.jpg" class="w-[355px] rounded-lg" alt="">
          </div>
          <h5 class="my-5"><b>Danger voiture autonome</b></h5>
          <a href="https://www.servicesmobiles.fr/ces-2025-voiture-concept-ai-qui-analyse-tout-de-vous-jusqua-votre-humeur-102934" target="_blank" class="bg-primary-color text-white-color px-4 py-1 rounded-lg border-2 border-primary-color hover:bg-white-color hover:text-primary-color hover:font-bold"><button class="mt-5">Lire</button></a>
        </div>
      </li>
      <li>
        <div class="title">21 novembre 2024</div>
        <div class="details">
          <div class="flex justify-center">
            <img src="/public/imgs/veilles/Veille1.png" class="w-[355px] rounded-lg" alt="">
          </div>
          <h5 class="my-5"><b>Problème sécurité données personnelles</b></h5>
          <a href="https://www.lemondeinformatique.fr/actualites/lire-le-cyber-resilience-act-un-texte-europeen-essentiel-pour-la-cybersecurite-95358.html" target="_blank" class="bg-primary-color text-white-color px-4 py-1 rounded-lg border-2 border-primary-color hover:bg-white-color hover:text-primary-color hover:font-bold"><button class="mt-5">Lire</button></a>
        </div>
      </li>
      <li>
        <div class="title">17 novembre 2023</div>
        <div class="details">
          <div class="flex justify-center">
            <img src="/public/imgs/veilles/Veille2.jpg" class="w-[355px] rounded-lg" alt="">
          </div>
          <h5 class="my-5"><b>Opportunités de l’intelligence artificielle pour l’industrie automobile</b></h5>
          <a href="https://www.sneci.com/l-intelligence-artificielle-une-revolution-dans-l-industrie-automobile/" target="_blank" class="bg-primary-color text-white-color px-4 py-1 rounded-lg border-2 border-primary-color hover:bg-white-color hover:text-primary-color hover:font-bold"><button class="mt-5">Lire</button></a>
        </div>
      </li>
      <li>
        <div class="title">23 septembre 2021</div>
        <div class="details">
          <div class="flex justify-center">
            <img src="/public/imgs/veilles/Veille3.png" class="w-[355px] rounded-lg" alt="">
          </div>
          <h5 class="my-5"><b>Cybersécurité pour les voitures</b></h5>
          <a href="https://www.lemondeinformatique.fr/actualites/lire-avec-cybellum-lg-se-renforce-dans-la-cybersecurite-automobile-84262.html" target="_blank" class="bg-primary-color text-white-color px-4 py-1 rounded-lg border-2 border-primary-color hover:bg-white-color hover:text-primary-color hover:font-bold"><button class="mt-5">Lire</button></a>
        </div>
      </li>
      <li>
        <div class="title">22 novembre 2017</div>
        <div class="details">
          <div class="flex justify-center">
            <img src="/public/imgs/veilles/Veille4.jpg" class="w-[355px] rounded-lg" alt="">
          </div>
          <h5 class="my-5"><b>Comprendre la voiture autonome</b></h5>
          <a href="https://www.cea.fr/comprendre/Pages/nouvelles-technologies/essentiel-sur-voiture-autonome.aspx" target="_blank" class="bg-primary-color text-white-color px-4 py-1 rounded-lg border-2 border-primary-color hover:bg-white-color hover:text-primary-color hover:font-bold"><button class="mt-5">Lire</button></a>
        </div>
      </li>
      <li>
        <div class="title">7 décembre 2015</div>
        <div class="details">
          <div class="flex justify-center">
            <img src="/public/imgs/veilles/veille5.png" class="w-[355px] rounded-lg" alt="">
          </div>
          <h5 class="my-5"><b>Danger voiture autonome</b></h5>
          <a href="https://www.lemondeinformatique.fr/actualites/lire-voitures-autonomes-quand-l-ennui-devient-un-danger-pour-le-conducteur-63196.html" target="_blank" class="bg-primary-color text-white-color px-4 py-1 rounded-lg border-2 border-primary-color hover:bg-white-color hover:text-primary-color hover:font-bold"><button class="mt-5">Lire</button></a>
        </div>
      </li>
    </ul>
  </div>
</div>
</div>
</template>

<style scoped>


/* CURSUS */
.timeline {
position: relative;
list-style: none;
padding-left: 0;
}

.timeline::before {
content: '';
position: absolute;
top: 0;
bottom: 0;
left: 0;
margin: auto;
width: 2px;
height: 95%;
background-color: #ddff00;
}

.timeline li {
position: relative;
display: block;
padding-left: 30px;
margin-bottom: 20px;
}

.timeline li::before {
content: '';
position: absolute;
top: 8px;
left: -8px;
width: 18px;
height: 18px;
background-color: #ddff00;
border: 3px solid #fff;
border-radius: 50%;
}

.timeline li .title {
width: 150px;
padding: 6px 20px;
color: #0d0d0d;
font-weight: 500;
background-color: #ddff00;
border-width: 2px;
border-color: #000000;
border-radius: 30px 0 60px 30px;
}

.timeline li .details {
background-color: #f4f5f8;
margin-top: 8px;
padding: 20px;
border-radius: 4px;
}

.timeline li .details h5,
.timeline li .details p {
margin-bottom: 0;
}

.timeline li .details small {
display: block;
font-weight: 500;
font-size: 14px;
margin-top: 5px;
margin-bottom: 10px;
}


</style>