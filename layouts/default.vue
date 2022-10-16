<template lang="pug">
  v-app(dark='')
    NavBar(:navItems="navItems", :socialLinks="socialLinks")

    v-main.pa-md-0(app)
      v-fade-transition(mode="out-in")
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
        { id: 1, title: 'À PROPOS', link: 'about' },
        { id: 2, title: 'PORTFOLIO', link: 'portfolio' },
        { id: 3, title: 'CONTACT', link: 'contact' }
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
  .v-application a {
    text-decoration: none;
  }

  .nuxt-link-active .primary--text {
    color: #000 !important;
  }

  html {
    font-size: 14px
  }

  h1 {
    font-weight: 500;
    line-height: 2;
  }

  h2 {
    font-weight: 400;
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

  @media (min-width: 1904px) {
    .container {
      max-width: 1185px;
    }
  }

  @media only screen and (max-width: 960px) {
    .main {
      height: unset;
    }
  }
</style>
