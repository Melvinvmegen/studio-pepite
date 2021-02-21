<template lang="pug">
  .header-right
    .home-container.d-flex(v-if="$route.name === 'index'")
      v-img(v-for="n in 6" :src='require(`~/assets/project_${n}.jpg`)' width="500" height="600" data-cursor-hover data-cursor-mix-blend-mode="difference")
    .about-container(v-if="$route.name === 'about'")
      .about-skill
        img(src="~/assets/about_me.jpg" width="500" data-cursor-hover data-cursor-mix-blend-mode="difference")
        .d-flex.justify-space-around
          .about-text.col-md-6.col-12
            TextHeader(:blabla="blabla")
              span(v-html="blabla.description")
      .about_summary
        .summary-img.col-md-4
          .container-full-height
            img.img-full-height(src="~/assets/about_pepite.jpg" data-cursor-hover data-cursor-mix-blend-mode="difference")
        .d-flex.justify-space-around.col-md-8
          .about-text.col-md-6.col-12
            TextHeader(:blabla="blablaPepite")
              span(v-html="blablaPepite.description")
          //- .about-skills.col-5
          //-   h2 WHAT I DO
          //-   ul(data-fade='right' data-fadetarget='children')
          //-     li(style='transform: translate(0px, 0px); opacity: 1;')
          //-       | ilustrations
          //-     li(style='transform: translate(0px, 0px); opacity: 1;')
          //-       | architecture ilustrations
          //-     li(style='transform: translate(0px, 0px); opacity: 1;')
          //-       | interior design for architecture/developers
          //-     li(style='transform: translate(0px, 0px); opacity: 1;')
          //-       | vr visualization tours
    slot

</template>

<script>
import TextHeader from '~/components/TextHeader/TextHeader'

export default {
  components: {
    TextHeader
  },
  props: {
    image: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      blabla: {
        title: 'mon identitée',
        description: 'j’ai grandi au bord de la méditerranée et ai été très vite attirée et inspirée par l’architecture typique provençale, solaire. <br><br> à force de voyages, de lectures et de recherches des grands noms et courants du 20ème siècle (le corbusier, mies van der rohe, williams, prouvé, l’école du bauhaus, l’influence allemande et américaine…) je me suis découverte une passion pour l’architecture aux lignes droites et franches, et aux matériaux bruts, façonnés par le temps (béton, bois, métaux). <br><br>aujourd’hui, j’ai pour avis qu’il est indispensable de penser et de construire en étant responsables du point de vue de l’environnement et de l’écologie. le respect des matériaux, des sites, des échanges humains et du travail sont des points incontestables de l’architecture de demain.'
      },
      blablaPepite: {
        title: 'pourquoi pépite ? ',
        description: "une pépite par définition (au sens figuré) est une chose dont l'exceptionnelle qualité attire l'attention, un trésor. il est donc de mon devoir de faire de chacun de vos projet, une petite pépite."
      }
    }
  }
}
</script>

<style>
.section {
  flex: 1 0 auto;
  max-width: 100%
}

.header-right {
  display: flex;
  align-items: center;
}

.sm {
  padding: 50px 0 !important;
}

.about-container {
  padding-left: 10vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-container {
  height: 60%;
}

.about_summary {
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  height: 100vh;
}

.about-skill {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.container-full-height {
  overflow: hidden;
  height: 100vh;
  margin-top: -25vh;
  margin-bottom: -25vh;
  position: relative;
}

.img-full-height {
  margin: 0;
  transform: translateX(-20%) translateY(-10%) scale(1.2);
  position: absolute;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  left: 0;
  max-width: none!important;
  object-fit: cover;
  max-height: none;
  z-index: 99999;
  width: 100%;
}

@media only screen and (max-width: 960px) {
  .banner-img {
    max-width: 550px !important;
  }

  .container-full-height {
    overflow: unset;
    height: 100vh;
    margin-top: unset;
    margin-bottom: unset;
  }

  .img-full-height {
    transform: unset;
    z-index: unset;
  }

  .home-container {
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: auto;
  }

  .horizontal-container .v-image {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
}

@media only screen and (max-width: 600px) {
  .banner-img {
    max-width: 500px !important;
  }
}

@media only screen and (max-width: 500px) {
  .banner-img {
    max-width: 400px !important;
  }
  #header-right-contact {
    min-height: 55vh !important;
  }

  .home-container {
    width: 100%;
    flex-direction: column;
  }

  .img-full-height {
    position: relative;
  }
}

@media only screen and (max-width: 400px) {
  .banner-img {
    max-width: 350px !important;
  }
}
</style>
