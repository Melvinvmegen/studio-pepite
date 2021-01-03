<template lang="pug">
  .header-right
    .home-container.d-flex(v-if="$route.name !== 'about'")
      v-img(src="https://source.unsplash.com/random")
      v-img(src="https://source.unsplash.com/random")
      v-img(src="https://source.unsplash.com/random")
      v-img(src="https://source.unsplash.com/random")
      v-img(src="https://source.unsplash.com/random")
    .about-container(v-else)
      .about-skill
        img(src="~/assets/about_me.jpeg" width="500")
        .d-flex.justify-space-around
          .about-text.col-10
            TextHeader(:blabla="blabla")
              span(v-html="blabla.description")
      .about_summary
        .summary-img
          .container-full-height
            img.img-full-height(src="~/assets/about_pepite.jpeg")
        .d-flex.justify-space-around
          .about-text.col-10
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
  width: 80%;
  display: flex;
  align-items: center;
}

.sm {
  padding: 50px 0 !important;
}

.about-container {
  padding-left: 10vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
  height: 100%;
  display: flex;
}

.about_summary {
  display: inline-flex;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  margin-top: -25vh;
  margin-bottom: -25vh;
  padding-top: 25vh;
  padding-bottom: 25vh;
}

.about-skill {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin-top: -25vh;
  margin-bottom: -25vh;
  padding-bottom: 25vh;
  padding-top: 25vh;
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

.summary-img {
  min-width: 45vh;
}

@media only screen and (max-width: 960px) {
  .banner-img {
    max-width: 550px !important;
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

}

@media only screen and (max-width: 400px) {
  .banner-img {
    max-width: 350px !important;
  }
}
</style>
