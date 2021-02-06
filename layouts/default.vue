<template lang="pug">
  v-app(dark='')
    NavBar(:navItems="navItems", :socialLinks="socialLinks")

    v-main.main
      nuxt
    Footer(:socialLinks='socialLinks')
    cursor-fx(:key="$route.fullPath")
</template>

<script>
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css'
import { CursorFx } from '@luxdamore/vue-cursor-fx'
import NavBar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    NavBar,
    Footer,
    CursorFx
  },
  data () {
    return {
      navItems: [
        { id: 1, title: 'a propos', link: 'about' },
        { id: 2, title: 'portfolio', link: 'portfolio' },
        { id: 3, title: 'contact', link: 'contact' }
      ],
      socialLinks: [
        { id: 1, icon: 'mdi-instagram', href: 'https://www.instagram.com/studio.pepite/' },
        { id: 2, icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/fanny-coderey-5b418b12a' }
      ]
    }
  }
}
</script>

<style>
  @font-face {
    font-family: 'Cocogoose';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~assets/Cocogoose.ttf') format('truetype');
  }

  .v-application a {
    text-decoration: none;
  }

  .nuxt-link-active .primary--text {
    color: #000 !important;
  }

  html {
    font-size: 14px
  }

  h2 {
    font-weight: 600;
    line-height: 2;
  }

  .cursor-fx {
    z-index: 99999;
  }

  .cursor-fx--hover {
    color: white !important;
    cursor: pointer !important;
  }

  button {
    cursor: none !important;
  }

  .main {
    height: 70vh;
  }

  .main::-webkit-scrollbar {
    display: none;
  }
</style>
