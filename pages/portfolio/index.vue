<template lang="pug">
  .full
    .portfolio-container
      .projects__heading.pa-2
        h1.page__title
          | Mes travaux
      v-row.scroll-container(no-gutters='')
        v-col(v-for='(project, index) in projects' :index="project.index" :key='project.title' cols='12' sm='4' data-cursor-hover data-cursor-mix-blend-mode="difference")
          nuxt-link(:to="{ name: 'portfolio-name', params: { index: index, name: project.link, project: project, next_project: projects[index + 1] }}")
            v-card.pa-2
              v-img.project-img(:src='require(`~/assets/${project.src}`)' height='200px' :alt="project.title" :href="project.link")
              v-card-title
                | {{ project.title }}

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
      link: 'Contact',
      projects: this.$store.state.projects
    }
  }
}
</script>

<style>
  .scroll-container {
    position: relative;
    overflow: scroll;
    z-index: 3;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    width: 100%;
  }

  .scroll-container::-webkit-scrollbar {
    display: none;
  }

  .portfolio-container {
    padding-top: 5vh;
    padding-left: 20vw;
    padding-right: 20vw;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 70vh;
  }

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
    .portfolio-container {
      padding-top: 50px;
      height: auto;
      padding-left: 10vw;
      padding-right: 10vw;
    }

    .full {
      padding-top: 30px;
    }
  }
</style>
