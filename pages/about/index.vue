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
        description: `diplômée de l’institut cread de Lyon d’une formation d’architecte d’intérieur &amp;
                      design global depuis juin, j’ai intégré en septembre l’école nationale
                      supérieure de paris la villette.
                      la découverte du métier d’architecte d’intérieur m’a donné envie d’évoluer
                      vers l’architecture de gros oeuvre et ainsi pouvoir gérer un projet dans son
                      ensemble.
          <br><br>
            je travaille en freelance en parallèle de mes études, depuis environ 1 an. je
            propose avec &quot;pépite&quot; des services en qualités d’architecte d’intérieur :
            dessin de plans, croquis, modélisations 3D, agencement intérieur, identité de
            lieu… 
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
