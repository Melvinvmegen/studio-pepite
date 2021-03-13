<template lang="pug">
  .full-horizontal-container
    .section-home.horizontal-container(:style="{ width: setWidth }")
      BannerLeft.col-md-2.col-12.pa-md-0(:blabla='blabla' ref="banner_1")
        br
        .project__previous(v-if='previous_project')
          nuxt-link.d-flex(:to="{ name: 'portfolio-name', params: { index: index - 1, name: previous_project.link }}" data-cursor-hover data-cursor-mix-blend-mode="difference" )
            svg(width='58' height='12' xmlns='http://www.w3.org/2000/svg')
              path(d='M48.31.82L57.52 6l-9.21 5.18-.49-.87L54.59 6.5H.5v-1h54.091l-6.772-3.81.49-.87z' fill='#030303')
            h2.section__title
              | précédent
      .col-md-1.col-0.w-10vw
      BannerRight.col-md-6.col-12.pa-md-0(:image="blabla.img" :blabla='blabla')
        .home-container.d-flex.justify-center.align-center(ref="banner_2")
          v-img(v-for="project in blabla.projectImages" :src='require(`~/assets/${project.img}`)' width="500" height='600' data-cursor-hover data-cursor-mix-blend-mode="difference")
        .project__next(v-if='next_project' ref="banner_3")
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
      previous_project: null,
      index: this.$route.params.index,
      isMounted: false
    }
  },
  created () {
    this.blabla = this.$store.state.projectImages[this.$route.params.index]
    this.next_project = this.$store.state.projectImages[this.$route.params.index + 1]
    this.previous_project = this.$store.state.projectImages[this.$route.params.index - 1]
  },
  computed: {
    setWidth () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return ''
      }
      if (!this.isMounted) {
        return 300 + 'vw'
      }
      const nextProject = this.$refs.banner_3 ? this.$refs.banner_3.clientWidth : 0
      return (this.$refs.banner_1.$el.clientWidth + this.$refs.banner_2.clientWidth + nextProject) * 1.1 + 'px'
    }
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style scoped>
  .w-10vw {
    max-width: 10vw;
  }

  .project__previous svg {
    transform: rotate(180deg);
    margin: 0.5rem 0 0;
  }

  .project__previous .section__title {
    margin: 0 0 1rem 1rem;
  }

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

  @media only screen and (max-width: 500px) {
    .project__next {
      padding: 5vh;
    }

    .project__next svg {
      left: unset;
      bottom: 1rem;
    }
  }
</style>
