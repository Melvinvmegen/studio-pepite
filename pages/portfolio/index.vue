<template lang="pug">
  .full
    .portfolio-container
      .projects__heading.pa-2
        h1.page__title
          | mes travaux
      v-row.scroll-container(no-gutters='')
        v-col(v-for='img in projectImages' :key='img.name' cols='12' sm='4')
          v-card.pa-2
            v-img.project-img(:src='require(`~/assets/${img.src}`)' height='200px' :alt="img.title" :href="img.link")
            v-card-title
              | {{ img.title }}

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
      link: 'Contact',
      projectImages: [
        {
          title: 'le bioclimatique en co-living',
          link: 'portfolio',
          src: 'project_1.jpeg'
        },
        {
          title: 'la théorie du jeu',
          link: 'portfolio',
          src: 'project_2.jpeg'
        },
        {
          title: 'retrorama',
          link: 'portfolio',
          src: 'project_3.jpg'
        },
        {
          title: 'jacquemus',
          link: 'portfolio',
          src: 'project_4.jpg'
        },
        {
          title: 'dumbo stairs',
          link: 'portfolio',
          src: 'project_8.jpg'
        },
        {
          title: 'bubble',
          link: 'portfolio',
          src: 'project_5.jpeg'
        },
        {
          title: 'revival',
          link: 'portfolio',
          src: 'project_6.jpeg'
        },
        {
          title: 'miro x mondrian',
          link: 'portfolio',
          src: 'project_7.jpg'
        }
      ]
    }
  }
}
</script>

<style>
  .scroll-container {
    position: relative;
    overflow: scroll;
    z-index: 10;
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
</style>
