<template>
  

    <!-- HERO -->
    <section class="mt-40 pb-96" id="Home">
        <div class="relative">
            <h1 class="text-center text-grey-color font-Secondary font-bold text-6xl animate__animated animate__fadeInUp"><span class="text-alert-color">Anthony Hecquet</span> <br /> Bienvenue sur mon Portfolio !</h1>
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

    <section id="Certif" class="pb-[10%]">
        <div class="flex justify-center gap-3">
            <img src="/public/icons/stars-section.svg" alt="Icon Etoile - Titre section" class="w-[32px]">
            <h1 class="text-center text-alert-color font-Secondary font-light text-3xl">Certifications</h1>
        </div>

        <div class="grid lg:grid-cols-3 lg:gap-20 px-[4%] mt-[5%]">
            <CardCertif 
            name="ANSSI"
            link="ANSSI"
            img="ANSSI"/>
            
            <CardCertif 
            name="PIX"
            link="attestation-pix"
            img="attestation-pix"/>
            
            <CardCertif 
            name="CNIL"
            link="CNIL"
            img="CNIL_page1"/>
        </div>

    </section>


    <section id="CV" class="pb-[10%]">

        <div class="flex justify-center gap-3">
            <img src="/public/icons/stars-section.svg" alt="Icon Etoile - Titre section" class="w-[32px]">
            <h1 class="text-center text-alert-color font-Secondary font-light text-3xl">Mon CV</h1>
        </div>

        <div class="grid grid-cols-4 px-[4%] pt-[2%]">
            <a href="/docs/CV/CV_Anthony.pdf" target="_blank"><img src="/docs/CV/CV_Anthony.jpg" alt="Mon CV" class="h-[355px] rounded-xl scale-100 hover:scale-105 border-[0px] border-white-color hover:border-2"></a>
            
            <div class="col-span-3 grid grid-cols-3">
                <p class="text-center font-Secondary text-grey-color col-span-3 pb-[2%]">Outils et logiciels utilisés lors de ma formation</p>
                <tool titre="Linux" img="Linux"/>
                <tool titre="Putty" img="Putty"/>
                <tool titre="Cisco" img="Cisco"/>
                <tool titre="VMWare" img="vmware"/>
                <tool titre="Visual Studio" img="VisualStudio"/>
                <tool titre="MobaXterm" img="MobaXterm"/>
                <tool titre="Wireshark" img="Wireshark"/>
                <tool titre="OracleVM" img="OracleVM"/>
                <tool titre="Windows Server" img="WindowsServer"/>
            </div>
        </div>

        <div class="flex justify-center mt-4">
            <p class="text-secondary-color font-Primary w-1/2 text-lg">J'ai choisi la spécialité <b>SISR</b> car elle correspond à mon projet professionnel. Grâce à cette formation, je développe des compétences techniques, mais aussi une capacité à travailler en équipe et à gérer des projets.
            </p>
        </div>

    </section>


    <section id="Veille" class="pb-[10%]">
        <div class="flex justify-center gap-3">
            <img src="/public/icons/stars-section.svg" alt="Icon Etoile - Titre section" class="w-[32px]">
            <h1 class="text-center text-alert-color font-Secondary font-light text-3xl">Veille Technologique</h1>
        </div>

        <veille />
    </section>



    <section id="Projet" class="pb-[10%]">
        <div class="flex justify-center gap-3">
            <img src="/public/icons/stars-section.svg" alt="Icon Etoile - Titre section" class="w-[32px]">
            <h1 class="text-center text-alert-color font-Secondary font-light text-3xl">Projets</h1>
        </div>

        <div class="grid lg:grid-cols-3 lg:gap-20 px-[4%] pt-[4%]">
            <CardProjet
            titre="RAID"
            link="RAID"
            tools="Putty - Technologie RAID - mdadm - Vmware"
            bio="Partitionnement d’une machine Linux en RAID avec système d’alerte par mail."
            img="RAID"/>
            
            <CardProjet
            titre="LVM"
            link="LVM"
            tools="Putty - Vmware - LVM"
            bio="Partitionnement d’une machine Linux en LVM"
            img="LVM"/>
            
            <CardProjet
            titre="KEEPASS"
            link="#"
            tools="Ubuntu - Logiciel Keepass"
            bio="Création d’un gestionnaire de mot de passe KEEPASS"
            img="KEEPASS"/>
        </div>

    </section>

    <section id="Stage">
        <div class="flex justify-center gap-3">
            <img src="/public/icons/stars-section.svg" alt="Icon Etoile - Titre section" class="w-[32px]">
            <h1 class="text-center text-alert-color font-Secondary font-light text-3xl">Stages</h1>
        </div>

        <div class="lg:flex lg:justify-between lg:px-[10%] pt-[5%] gap-2">
            
            <CardStage class="w-1/2"
            name="Consulting Data, Maurepas"
            bio="Stockage Informatique, Isilon, NetApp, Pure Storage et Migration de données"
            mission="Déploiement de matériels de stockage - Configuration de switch - Migration de données"
            intervention="l'Hôpital Saint-Maurice, 12 rue du Val d’Osne - PA3 Equinix, 114 rue Ambroise croizat, Saint Denis"
            tools="Switch Pure Storage | Flash Blade / Flash Array Pure Storage | Putty | VmWare"
            img="ConsultingData"/>
            
        </div>
    </section>

</template>