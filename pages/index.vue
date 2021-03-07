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
        title: 'bonjour, je m’appelle fanny et j’ai créé pépite <br> pour vous en faire voir de toutes les couleurs',
        description: '',
        projectImages: [
          {
            title: 'le bioclimatique en co-living',
            link: 'le-bioclimatique-en-co-living',
            src: 'project_1.jpg'
          },
          {
            title: 'l’antre de l’artiste',
            link: 'l’antre-de-l’artiste',
            src: 'ARTISTE.jpeg'
          },
          {
            title: 'la théorie du jeu',
            link: 'la-théorie-du-jeu',
            src: 'project_2.jpg'
          },
          {
            title: 'retrorama',
            link: 'retrorama',
            src: 'project_3.jpg'
          },
          {
            title: 'maison p',
            link: 'maison-p',
            src: 'PICON.jpeg'
          },
          {
            title: 'appartement lillois',
            link: 'appartement-lillois',
            src: 'LILLE.jpeg'
          },
          {
            title: 'jacquemus',
            link: 'jacquemus',
            src: 'project_4.jpg'
          },
          {
            title: 'dumbo stairs',
            link: 'dumbo-stairs',
            src: 'project_8.jpg'
          },
          {
            title: 'jimi hendrix',
            link: 'jimi-hendrix',
            src: 'project_5.jpg'
          },
          {
            title: 'revival',
            link: 'revival',
            src: 'project_6.jpg'
          },
          {
            title: 'miro x mondrian',
            link: 'miro-x-mondrian',
            src: 'project_7.jpg'
          }
        ]
      },
      ctaText: 'A propos de moi',
      link: 'about'
    }
  }
}
</script>

<style>
  .full {
    padding-top: 100px;
  }
</style>
