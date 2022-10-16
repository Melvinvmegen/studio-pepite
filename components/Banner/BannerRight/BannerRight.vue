<template lang="pug">
  .header-right.flex-md-row.flex-column
    .home-container.d-flex.justify-center.align-center(v-if="$route.name === 'index'")
      nuxt-link(v-for="(projectImage, index) in projectImages" :key='projectImage.title' :to="{ name: 'portfolio-name', params: { index: index, name: projectImage.link, project: projectImage, next_project: projectImages[index + 1] }}")
        v-img.project-img(:src='require(`~/assets/${projectImage.src}`)' :title='projectImage.title' :href='projectImage.link' width="500" height="600" data-cursor-hover data-cursor-mix-blend-mode="difference")
    v-container.col-12.pa-md-0.about_container.flex-md-row.flex-column(v-if="$route.name === 'about'")
      img(src="~/assets/about_me.jpg" width="500" data-cursor-hover data-cursor-mix-blend-mode="difference")
      .about_summary.col-md-6.col-12
        TextHeader(:blabla="blablaPepite")
          span(v-html="blablaPepite.description")
          CTA(v-if="ctaText && link" :className="true" color="accent" :text="ctaText" :link="link")
    slot

</template>

<script>
import TextHeader from '~/components/TextHeader/TextHeader'

export default {
  components: {
    TextHeader
  },
  props: {
    projectImages: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      blablaPepite: {
        title: 'Pourquoi "Pépite" ?',
        description: `Une pépite par définition (au sens figuré) est une chose dont l'exceptionnelle qualité attire l’attention. 
                      est définie comme un trésor. C’est donc mon objectif de faire de chacun de vos projet, une petite pépite !`
      },
      ctaText: 'Découvrez mon portfolio',
      link: '/portfolio'
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

.about_container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-container {
  height: 60%;
}

.about_summary {
  padding-left: 10vw;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  height: 100vh;
}

.drawing-service {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 60vw;
}

.drawing-service:last-child {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 20vw;
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

.project__next {
  padding-left: 7vw;
  padding-right: 4vw;
  position: relative;
}

.section__title {
  margin: 0 1rem !important;
  color: #030303;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: .1875em;
}

.project__title {
  font-size: 1.625rem;
  font-weight: 100;
  color: #4e4e4e;
  position: relative;
  margin: 0;
}

.project__next svg {
  position: absolute;
  left: calc(70% + 4rem);
  bottom: .5rem;
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
    height: 45vh;
  }

  .img-full-height {
    transform: unset;
    z-index: unset;
    object-fit: contain;
    min-height: unset;
  }

  .home-container {
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: auto;
  }

  .horizontal-container .v-image {
    max-width: 100%;
    height: auto !important;
    margin-top: 10px;
    width: auto !important;
  }
}

@media only screen and (max-width: 600px) {
  .banner-img {
    max-width: 500px !important;
  }

  .section__title {
    margin: 0 1rem 0 0 !important;
  }

  .about_summary {
    padding: 0 !important;
  }
}

@media only screen and (max-width: 500px) {
  .project__next {
    padding: 5vh;
  }

  .project__next svg {
    left: unset;
    bottom: 1rem;
  }
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
