<template>
        <footer>

<!-- NE PAS TOUCHER -->
<div class="waves">
    <div class="wave" id="wave1"></div>
    <div class="wave" id="wave2"></div>
    <div class="wave" id="wave3"></div>
    <div class="wave" id="wave4"></div>
</div>

<!-- Liste des icônes pour les réseaux sociaux -->
<!-- IMPORTANT : N'oubliez d'insérer les liens de vos réseaux à la place des "#" -->

    <!-- Si vous souhaitez retirer un réseau, supprimer entière une ligne ci-dessous -->

    <!-- Si vous souhaitez ajouter un réseau, rajouter une ligne comme celles ci-dessous, en remplaçant les balises "ion-icon" par des balises
                            trouvables sur ce site : https://ionic.io/ionicons (Vous cherchez une icône, cliquez sur une, puis coller le code) -->
<ul class="social_icon">

    <!-- Icône Github -->
    <li><a href="https://github.com/DeiD0" target="_blank"> <img src="/public/icons/github.svg" alt="logo github" class="w-[32px]"> </a></li>

    <!-- Icône Mail -->
    <li><a href="https://www.linkedin.com/in/anthony-hecquet-460702331/" target="_blank"> <img src="/public/icons/linkedin.svg" alt="logo Linkedin" class="w-[32px]"> </a></li>

    <!-- Icône Linkedin -->
    <li><a href="mailto:anthony.hecquet78@gmail.com"> <img src="/public/icons/mail.svg" alt="logo Mail" class="w-[32px]"> </a></li>

</ul>


<!-- liste des pages, représentant alors un menu du Footer -->
<!-- IMPORTANT : N'oubliez d'insérer les liens de vos pages à la place des "#" -->
<ul class="menu">
    <li><a href="#Home">Accueil</a></li>
    <li><a href="#Pres">Présentation</a></li>
    <li><a href="#Certif">Certifications</a></li>
    <li><a href="#CV">Mon CV</a></li>
    <li><a href="#Veille">Veille Technologique</a></li>
    <li><a href="#Projet">Projets</a></li>
    <li><a href="#Stage">Stage</a></li>
</ul>

<!-- Vous trouverez ici la "mention légale" -->
<!-- <p>Projet réalisé dans le cadre d’un exercice pédagogique au département MMi de Montbéliard.</p> -->

</footer>

</template>

<style>
footer {
    position: relative;
    width: 100%;
    background: #ddff00;
    min-height: 100px;
    padding: 20px 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

footer .social_icon,
footer .menu {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
}

footer .social_icon li,
footer .menu li {
    list-style: none;
}

footer .social_icon li a {
    font-size: 2em;
    color: #FFF;
    margin: 0 10px;
    display: inline-block;
    transition: 0.5s;
}

footer .social_icon li a:hover {
    transform: translateY(-10px);

}

footer .menu li a {
    font-size: 1.2em;
    color: #0d0d0d;
    margin: 0 10px;
    display: inline-block;
    text-decoration: none;
    opacity: 0.75;
}

footer .menu li a:hover {
    opacity: 1;
}

footer p {
    color: #FFF;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 1.1em;   
}

footer .wave {
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(/public/imgs/wave.png);
    background-size: 1000px 100px;
}

footer .wave#wave1 {
    z-index: 1000;
    opacity: 1;
    bottom: 1;
    animation: animateWave 4s linear infinite;
}

footer .wave#wave2 {
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
    animation: animateWave_02 4s linear infinite;
}

footer .wave#wave3 {
    z-index: 1000;
    opacity: 0.2;
    bottom: 15px;
    animation: animateWave 3s linear infinite;
}

footer .wave#wave4 {
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
    animation: animateWave_02 3s linear infinite;
}

@keyframes animateWave {
    0%
    {
        background-position-x: 1000px;
    }
    100%
    {
        background-position-x: 0px;
    }
}

@keyframes animateWave_02 {
    0%
    {
        background-position-x: 0px;
    }
    100%
    {
        background-position-x: 1000px;
    }
}
</style>