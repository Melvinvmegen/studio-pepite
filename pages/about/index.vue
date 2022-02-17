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
        description: `Diplômée de l’Institut Cread de Lyon d’une formation d’architecte d’intérieur &
                      design global depuis juin 2021, j’ai intégré en septembre 2021 l’École Nationale
                      Supérieure de Paris la Villette. 
                      La découverte du métier d’architecte d’intérieur m’a donné envie d’évoluer 
                      vers l’architecture de gros oeuvre et ainsi pouvoir gérer un projet dans 
                      son ensemble. 
            <br><br>
            Je travaille en freelance en parallèle de mes études, depuis la fin de l’année 2019. 
            Je propose avec "Pépite" des services en qualité d’architecte d’intérieur : 
            dessin de plans, croquis, modélisations 3D, agencement intérieur, identité de lieu… 
            <br><br>
            Je suis originaire du sud de la France et je vis maintenant à Paris mais je suis 
            disponible pour travailler à distance partout.`
      },
      ctaText: 'contactez moi',
      link: 'Contact'
    }
  }
}
</script>
