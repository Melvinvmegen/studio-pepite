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
        title: 'Qui suis-je ?',
        description: `Après une formation au titre d’architecte d’intérieur à Lyon j’ai intégré l’école nationale supérieure 
                      d’architecture de paris la villette. La découverte du métier d’architecte d’intérieur m’a donné envie 
                      d’évoluer vers l’architecture de gros oeuvre et ainsi pouvoir gérer un projet dans son ensemble. 
                      <br>
                      <br>
                      Je travaille en freelance en parallèle de mes études, depuis la fin de l’année 2019. Je propose avec 
                      "Pépite" le dessin de plans et des modélisations 3D.
                      <br>
                      <br>
                      Je suis originaire du sud de la France et je vis maintenant à Paris.`
      },
      ctaText: 'contactez moi',
      link: 'contact'
    }
  }
}
</script>
