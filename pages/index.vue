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
        title: 'bonjour, je m’appelle Fanny et j’ai créé pépite <br> pour vous en faire voir de toutes les couleurs',
        description: ''
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
