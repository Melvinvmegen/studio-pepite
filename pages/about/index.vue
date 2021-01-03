<template lang="pug">
  .full
    Banner(:blabla='blabla' :ctaText="ctaText" :link="link")
</template>

<script>
import Banner from '~/components/Banner/Banner'

export default {
  components: {
    Banner
  },
  data () {
    return {
      blabla: {
        title: 'qui suis-je ?',
        description: 'diplômée d’un bac scientifique à Hyères (83) en 2016, j’ai intégré l’institut Cread de Lyon en 2017 et serai diplômée d’un titre d’architecte d’intérieur en juin 2021. <br><br>ces 4 ans d’apprentissage d’architecture intérieure et de design global m’ont aidé à me forger une identité créative, singulière et affirmée. néanmoins, la découverte du métier d’architecte d’intérieur m’a donné envie d’évoluer vers l’architecture de gros oeuvre et ainsi pouvoir gérer un projet dans son ensemble. <br><br>c’est pourquoi, j’aspire à intégrer en équivalence une des écoles nationales supérieures d’architecture de france. je travaille en freelance en parallèle de mes études, depuis novembre 2020.  ma société "pépite" propose ces services en qualité d’architecte d’intérieur :  dessin de plans, croquis, modélisations 3D, agencement intérieur, identité de lieu…'
      },
      ctaText: 'contactez moi',
      link: 'Contact'
    }
  }
}
</script>
