<template lang="pug">
  .full
    .section-home.horizontal-container
      BannerLeft.col-md-7.col-12(:blabla='blabla')
      BannerRight.col-md-6.col-12(:image="blabla.img" :blabla='blabla')
        .home-container.d-flex
          v-img(v-for="project in blabla.projectImages" :src='require(`~/assets/${project.img}`)' width="500" height='600' data-cursor-hover data-cursor-mix-blend-mode="difference")
        .project__next(v-if='next_project')
          nuxt-link(:to="{ name: 'portfolio-name', params: { index: index + 1, name: next_project.link }}" data-cursor-hover data-cursor-mix-blend-mode="difference" )
            h2.section__title
              | projet suivant
            h3.project__title
              | {{ next_project.title }}
            svg(width='58' height='12' xmlns='http://www.w3.org/2000/svg')
              path(d='M48.31.82L57.52 6l-9.21 5.18-.49-.87L54.59 6.5H.5v-1h54.091l-6.772-3.81.49-.87z' fill='#030303')

</template>

<script>
import Banner from '~/components/Banner/Banner'

export default {
  components: {
    Banner
  },
  data () {
    return {
      blabla: null,
      next_project: null,
      index: this.$route.params.index
    }
  },
  created () {
    this.blabla = this.$store.state.projectImages[this.$route.params.index]
    this.next_project = this.$store.state.projectImages[this.$route.params.index + 1]
  }
}
</script>

<style scoped>
  .project__next {
    padding-left: 7vw;
    padding-right: 4vw;
    position: relative;
  }

  .section__title {
    width: 140px;
    color: #030303;
    margin: 0 0 1rem;
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
</style>
