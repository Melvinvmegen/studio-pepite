<template lang="pug">
    v-container.full
      div(v-for="category in categories")
        h1.px-2 {{ category }}
        v-row
          v-col(v-for='(project, index) in projects.filter(p => p.category === category)' :index="project.index" :key='project.title' cols='12' sm='4' data-cursor-hover data-cursor-mix-blend-mode="difference")
            nuxt-link(:to="{ name: 'portfolio-name', params: { index: index, name: project.link, project: project, next_project: projects[index + 1] }}")
              v-card.pa-2
                v-img.project-img(:src='require(`~/assets/${project.src}`)' height='200px' :alt="project.title" :href="project.link")
                v-card-title
                  | {{ project.title }}
        v-divider

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
        title: 'Bonjour, je m’appelle Fanny et j’ai créé Pépite <br> pour vous en faire voir de toutes les couleurs',
        description: ''
      },
      ctaText: 'contact me',
      link: 'contact',
      projects: this.$store.state.projects
    }
  },
  computed: {
    categories () {
      return new Set(this.$store.state.projects.map(p => p.category))
    }
  }
}
</script>

<style>
  .project-img .v-image__image {
    transition: all .5s;
    filter: grayscale(100%);
  }

  .project-img:hover .v-image__image {
    transform: scale(1.1);
    filter: grayscale(0%);
  }

  .v-card {
    box-shadow: none !important;
    border-radius: 0 !important;
  }

  .v-card .v-card__title {
    padding: 16px 0;
  }

  @media only screen and (max-width: 500px) {

    .full {
      padding-top: 30px;
    }
  }
</style>
