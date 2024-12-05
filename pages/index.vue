<template>
    <Headnav class="z-50"/>

    <!-- HERO -->
    <section class="mt-40 pb-96" id="Home">
        <div class="relative">
            <h1 class="text-center text-grey-color font-Secondary font-bold text-6xl animate__animated animate__fadeInUp">Bienvenue sur mon Portfolio !</h1>
            <div class="flex justify-center mt-10">
                <p class="text-center text-secondary-color font-Primary w-1/2 text-lg animate__animated animate__slideInUp">Passionné par l'informatique et la cybersécurité, je me spécialise dans la gestion des infrastructures réseaux et la protection des systèmes. Mon objectif est de fournir des solutions fiables et sécurisées pour répondre aux enjeux technologiques des entreprises.</p>
            </div>
        </div>
    </section>

    <section id="Pres" class="mb-[10%]">
        <div class="flex justify-center gap-3">
            <img src="/public/icons/stars-section.svg" alt="Icon Etoile - Titre section" class="w-[32px]">
            <h1 class="text-center text-alert-color font-Secondary font-light text-3xl">Présentation du BTS SIO</h1>
        </div>
        <div class="flex justify-center mt-4">
            <p class="text-secondary-color font-Primary w-1/2 text-lg">Actuellement étudiant en <b>BTS SIO (Services Informatiques aux Organisations)</b>, je me forme aux métiers de l’informatique, avec pour objectif de répondre aux besoins des entreprises en matière de systèmes d’information. Ce BTS propose une approche complète : nous apprenons à la fois la gestion des infrastructures, la sécurité, et le développement de solutions adaptées aux utilisateurs.</p>
        </div>
        <div class="grid grid-cols-2 mt-20 lg:ml-[20%]">
            <CardBTS class="col-span-1" 
            img="sisr"
            name="SISR"
            bio="SISR (Solutions d’Infrastructure, Systèmes et Réseaux) : axée sur l’administration et la gestion des réseaux et des systèmes. Cette option prépare à des missions comme la mise en place de réseaux sécurisés ou la maintenance des infrastructures informatiques."/>

            <CardBTS class="col-span-1" 
            img="SLAM"
            name="SLAM"
            bio="SLAM (Solutions Logicielles et Applications Métiers) : orientée vers le développement. Elle nous forme à concevoir des applications et logiciels sur mesure, en maîtrisant les langages de programmation et les bases de données."/>
        </div>
    </section>


    <section>
        <h2>test</h2>
    </section>

    <Footernav />


</template>