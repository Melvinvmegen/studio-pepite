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
        title: 'hello, my name is fanny coderey and I love good design',
        description: 'Always been a freelancer who is trying to sort out his 3d world. In 2015, I finished studying Industrial Design at Institute of Industrial Design in Koszalin. The university has helped me gain sensitivity and get to know myself better through various faculties I have experienced. 3d graphics helps me express myself, show my world and my own projects on the border of art, architecture and design. I was inspired by a number of different trends during my short 3d career which has then translated into projects I carried out.'
      },
      ctaText: 'contact me',
      link: 'Contact'
    }
  }
}
</script>
