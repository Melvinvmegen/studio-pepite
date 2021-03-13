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

  .glass {
    border: 1px solid #fff;
    border-radius: 15px;
    box-shadow: 0 0 1rem 0 rgb(0 0 0 / 20%);
    overflow: hidden;
    position: relative;
    background: transparent !important;
    color: black;
    font-weight: 700;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(10px)
  }

  .glass:before {
    transition: background-image 0.2s !important;
  }

  .glass:hover::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5px;
    background-size: 100% 100%;
    background-clip: content-box;
    background-position: center center;
    background-image: linear-gradient(90deg, rgb(150, 227, 255) 0%, rgb(168, 181, 255) 25%, rgb(184, 163, 244) 50%, rgb(227, 204, 219) 75%, rgb(98, 218, 251) 100%);
    z-index: -1;
    display: block;
    filter: blur(20px);
    transform: translate3d(0px, 0px, 0px);
    opacity: 1 !important;
    transition: nobackne !important;
  }

  @media only screen and (max-width: 960px) {
    .full {
      padding: 0;
    }
  }

</style>
