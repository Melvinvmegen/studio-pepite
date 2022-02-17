export const state = () => ({
  fullContainerMounted: false,
  projects: [
    {
      title: 'L’antre de l’artiste',
      link: 'antre-de-l’artiste',
      src: 'ARTISTE.jpeg',
      description: `Projet en freelance de transformation d’un vieil appartement en bureau / atelier. 
                    J’ai eu le désir de créer un lieu à l’identité industrielle et actuel en gardant une âme rétro.
                    <br><br>
                    Logiciels utilisés pour les rendus 3D : SketchUp + Vray`,
      projectImages: [
        { img: 'antre_de_lartiste/ART_P1.jpg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'antre_de_lartiste/ART_P2.jpg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'antre_de_lartiste/ART_P3.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' }
      ]
    },
    {
      title: 'La théorie des jeux',
      link: 'la-théorie-du-jeu',
      src: 'project_2.jpg',
      description: `La théorie des jeux" est un projet fictif de 4ème année d’école (réalisé en groupe de 4) de rénovation d’un bâtiment dont l’usage 
            n’est plus défini, en espace socio-culturel, actuel et accessible pour tous. Un centre social et culturel est un lieu de proximité à vocation globale, 
            familiale et intergénérationnelle, qui accueille toute la population en veillant à la mixité sociale. C’est un lieu d’animation de la vie sociale 
            permettant aux habitants d’exprimer, de concevoir et de réaliser leurs projets : il prend en compte l’expression des demandes et 
            des initiatives des usagers et des habitants, et favorise la vie sociale et la vie associative. <br><br>
            Pour le projet, nous devions rénover un bâtiment d’environ 3000m2 sur 2 étages. Il a fallu créer divers types d’espaces tels que : une galerie d’exposition, 
            un café/brasserie, une bibliothèque, des lieux intimistes de travail, de réflexion & de recherche, un atelier, un fab lab, une ludothèque, 
            des salles de musiques & de vision, des espaces techniques… Nous avons axé notre concept sur l’intergénérationnalité et la favorisation des échanges.<br><br>
            Logiciels utilisés pour les rendus 3D : SketchUp + Vray`,
      projectImages: [
        { img: 'theorie_du_jeu/GABARIT1.jpg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'theorie_du_jeu/GABARIT2.jpg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'theorie_du_jeu/GABARIT3.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' },
        { img: 'theorie_du_jeu/GABARIT4.jpg', title: 'Classement des meilleurs ostéopathes par ville en fonction de leurs notations.' },
        { img: 'theorie_du_jeu/GABARIT5.jpg', title: 'Classement des meilleurs ostéopathes par ville en fonction de leurs notations.' },
        { img: 'theorie_du_jeu/GABARIT6.jpg', title: 'Module de recherche préfiltré en fonction de la page actuelle (ici ostéopathie pour bébé filtre les ostéopathes pour bébé).' }
      ]
    },
    {
      title: 'Rétrorama',
      link: 'retrorama',
      src: 'project_3.jpg',
      description: `Rétrorama c’est le projet fictif de rénovation d’un ancien bâtiment en "hostel" pour la chaine ho36. 
                    C’est un projet réalisé seule, en troisième année d’école. Le principe du concept est de créer un lieu 
                    au style purement rétro-futuriste, une invitation dans une autre dimension. La conception du lieu a été 
                    issue d’une réflexion sur le temps et plus particulièrement la relation entre le passé et le futur. 
                    Un espace entre réalité et fiction dans lequel cohabitent la fantaisie du passé et la magie du futur.<br><br>
                    Logiciels utilisés pour les rendus 3D : SketchUp + TwinMotion`,
      projectImages: [
        { img: 'retrorama/retrorama_1.jpg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'retrorama/retrorama_2.jpg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'retrorama/retrorama_3.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' },
        { img: 'retrorama/retrorama_4.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' },
        { img: 'retrorama/retrorama_5.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' },
        { img: 'retrorama/retrorama_6.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' }
      ]
    },
    {
      title: 'Maison P',
      link: 'maison-p',
      src: 'PICON.jpeg',
      description: `Transformation d’une ancienne cuisine et salle à manger en chambre d'ami avec salle d'eau et dressing.
                    <br><br>
                    Logiciels utilisés pour les rendus 3D : SketchUp + TwinMotion`,
      projectImages: [
        { img: 'maison_p/CH_1.jpeg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'maison_p/CH_2.jpeg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'maison_p/VUE_GENERALE.jpeg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' }
      ]
    },
    {
      title: 'Appartement Lillois',
      link: 'appartement-lillois',
      src: 'LILLE.jpeg',
      description: `Rénovation complète d'un vieil appartement haussmannien d'environ 60 m2. L'objectif était de replacer les pièces selon une disposition précise et pratique. Il s'agissait également de créer un dressing et une cuisine avec un îlot, entièrement ouverte sur le salon.
                    <br><br>
                    Logiciels utilisés pour les rendus 3D : SketchUp + TwinMotion`,
      projectImages: [
        { img: 'appartement_lillois/SALON1.jpeg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'appartement_lillois/SALON2.jpeg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'appartement_lillois/SDB.jpeg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' },
        { img: 'appartement_lillois/VUE_GENERALE.jpeg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' }
      ]
    },
    {
      title: 'Jacquemus',
      link: 'jacquemus',
      src: 'project_4.jpg',
      description: `La cagole, c’est le projet  fictif de création de la première boutique physique de la marque française de prêt-à-porter jacquemus. 
                    Celui-ci était orienté autour des valeurs de la marque (la provence, le sud, le soleil...). 
                    C’est un projet de troisième année d’école réalisé en groupe de 3. 
                    Nous avons défini notre projet comme la «simplicité sophistiquée ».
                    C’est la création d’un lieu atypique inspiré de la cagole marseillaise : exagération, le trop, les couleurs, la sophistication, les courbes, les reflets... 
                    un maître mot : l’extravagance. Nos inspirations pour ce projet ont été : le film "le Mépris" de Jean-Luc Dodard, le documentaire "Cagole forever" 
                    de Sebastien Haddouk et la bière "la cagole" d’Yves Darnaud. Nous avons choisi d’utiliser des matériaux synthétiques et brillants 
                    aux couleurs acides et vitaminées : le rose (cliché), le rouge (provocant), le bleu (la mer, la piscine), le jaune (la blonde platine).
                    <br><br>
                    Logiciels utilisés pour les rendus 3D : SketchUp + TwinMotion`,
      projectImages: [
        { img: 'jacquemus/jacquemus_1.jpg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'jacquemus/jacquemus_2.jpg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'jacquemus/jacquemus_3.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' },
        { img: 'jacquemus/jacquemus_4.jpg', title: 'Classement des meilleurs ostéopathes par ville en fonction de leurs notations.' }
      ]
    },
    {
      title: 'Dumbo stairs',
      link: 'dumbo-stairs',
      src: 'project_8.jpg',
      description: `Participation (en équipe de 2, avec Justin, ingénieur) à un concours de création d’un escalier en béton, 
                    organisé par l’entreprise BPM groupe. Le produit présenté est un assemblage par câbles acier de blocs de béton 
                    BFUP creusés afin de créer deux marches.
                    <br><br>
                    Un bloc de 2 marches en béton d’un volume de 0,0449m3 est composé de béton fibré ayant une masse volumique de 2600 kg/m3. 
                    Nous estimons donc la masse d’un module de béton à 116kg, ce qui paraît correct du point de vue de réalisation et ancrage des cables.
                    <br><br>
                    Logiciels utilisés pour les rendus 3D : SketchUp + TwinMotion`,
      projectImages: [
        { img: 'dumbo_stairs/dumbo_stairs_1.jpg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'dumbo_stairs/dumbo_stairs_2.jpg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'dumbo_stairs/dumbo_stairs_3.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' }
      ]
    },
    {
      title: 'Jimi Hendrix',
      link: 'jimi hendrix',
      src: 'project_5.jpg',
      description: `Conception d’un lieu chaleureux dans lequel les clients peuvent se projeter. Utilisation d’une oeuvre d’art représentant Jimi Dendrix par 
                    l’artiste Thomas Krief. Projet (réalisé en freelance) d’aménagement d’un appartement acquis en vefa. <br><br>
                    L’appartement se situe à Lyon, dans le troisième arrondissement. 
                    Il est destiné à la location pour une petite famille. 
                    Aménagement d’espaces verts dans le salon et sur la terrasse. 
                    Technique de définition des espaces par la couleur.
                    <br><br>
                    Logiciels utilisés pour les rendus 3D : SketchUp + TwinMotion`,
      projectImages: [
        { img: 'jimi_hendrix/BALCON.jpeg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'jimi_hendrix/CH.jpeg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'jimi_hendrix/COULOIR.jpeg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' },
        { img: 'jimi_hendrix/CUISINE_1.jpeg', title: 'Classement des meilleurs ostéopathes par ville en fonction de leurs notations.' },
        { img: 'jimi_hendrix/CUISINE_2.jpeg', title: 'Module de recherche préfiltré en fonction de la page actuelle (ici ostéopathie pour bébé filtre les ostéopathes pour bébé).' },
        { img: 'jimi_hendrix/VUE_DESSUS.jpeg', title: 'Module de recherche préfiltré en fonction de la page actuelle (ici ostéopathie pour bébé filtre les ostéopathes pour bébé).' }
      ]
    },
    {
      title: 'Miro x Mondrian',
      link: 'miro-x-mondrian',
      src: 'project_7.jpg',
      description: `Le projet fictif "Ar(t)chitecture" consistait en la rénovation d’un appartement destiné à une location de courte durée. 
                    Le maître d’ouvrage souhaitait un aménagement des plus atypiques. Projet réalisé seule, en deuxième année d’école. 
                    <br> 
                    J’ai pris la décision de trouver un fil conducteur à mon projet et d’en faire un lieu avant-gardiste, unique. 
                    Mon inspiration provenait des galeries d’art et du peintre Joan Miro.`,
      projectImages: [
        { img: 'miro/miro_1.jpg', title: 'Création de temoignage pour les utilisateurs identifié ou non.' },
        { img: 'miro/miro_2.jpg', title: "Mise en place d'un hub de blog avec module de recherche d'article." },
        { img: 'miro/miro_3.jpg', title: 'Representation graphique de statistiques avec les éléments nécessaires.' },
        { img: 'miro/miro_4.jpg', title: 'Classement des meilleurs ostéopathes par ville en fonction de leurs notations.' }
      ]
    }
  ]
})

export const mutations = {
  toggleMounted (state, payload) {
    state.fullContainerMounted = payload
  }
}
