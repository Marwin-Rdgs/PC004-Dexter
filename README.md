# Anthony Hecquet

## Overview

**PC004-Dexter** est un portfolio conçu pour un étudiant en 2ᵉ année de BTS SIO option SISR, développé en seulement 3 jours. Le site met en avant les compétences, projets, stages, certifications et veilles technologiques de l'étudiant.

Le projet utilise un pipeline **CI/CD** avec **GitHub** et **Netlify**, ainsi que les frameworks **NuxtJS** et **TailwindCSS** pour le front-end. La bibliothèque **AnimateCSS** est également utilisée pour ajouter des animations dynamiques.

## Table des matières
- [Installation](#installation)
- [Usage](#usage)
- [Structure du Projet](#structure-du-projet)
- [Auteurs](#auteurs)
- [Licence](#licence)

## Installation

### Prérequis
- Node.js version 14 ou supérieure
- Git installé localement
- Un accès au repository GitLab (https://github.com/Marwin-Rdgs/PC004-Dexter.git)

### Étapes d'installation

1. Clonez le repository :
```
   git clone https://github.com/Marwin-Rdgs/PC004-Dexter.git
   cd sunshine
```

2. Installez les dépendances :
```
   git clone https://github.com/Marwin-Rdgs/PC004-Dexter.git
   cd sunshine
```

3. Lancez le serveur de développement :
```
npm run dev
```

4. Accédez à l'application dans votre navigateur via **http://localhost:3000**.

## Usage
Le projet est structuré pour permettre une utilisation facile des différents composants front-end et une interaction fluide avec l'API. Voici quelques commandes utiles :

- Lancer en mode développement :
```
npm run dev
```

- Build pour la production : 
```
npm run build
npm run start
```

- Vérifier les erreurs de style avec ESLint :
```
npm run lint
```

## Structure du Projet

```
PC004-Dexter/
├── assets/                 # Fichiers CSS
│   └── main.css            # Fichier CSS principal
├── components/             # Composants réutilisables
│   ├── cardBTS.vue         # Card de présentation des spécialités du BTS SIO
│   ├── cardCertif.vue      # Card pour accéder aux Certifications validées par le client
│   ├── cardProjet.vue      # Card de présentation des projets réalisés par le client
│   ├── cardStage.vue       # Card de présentation des stages effectués par le client
│   ├── tool.vue            # Section de présentation des outils utilisés par le client
│   ├── veille.vue          # Section de présentation de la veille technologique du client
│   ├── footernav.vue       # Bas de page du site
│   └── headernav.vue       # Haut de page du site
├── layouts/                # Templates de mise en page
│   └── default.vue         # Layout par défaut du site
├── pages/                  # Pages du site web
│   └── index.vue           # Page d'accueil
├── public/                 # Dossier pour les éléments dynamiques du site internet
│    ├── docs/              # Dossier pour les documentations (CV / Certif / etc.)
│    ├── icons/             # Icones du site internet
│    └── imgs/              # Images du site internet
└── nuxt.config.js          # Configuration principale de Nuxt.js
```

## Auteurs
- Chez Marwin-web - Marwin RODRIGUES - Développeur web freelance

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
```
Ce modèle est prêt à l'emploi pour un dépôt GitLab et peut être modifié selon vos besoins spécifiques.
```