<template lang="pug">
  v-app(dark='')
    NavBar(:navItems="navItems", :socialLinks="socialLinks")

    v-main
      nuxt
    Footer(:socialLinks='socialLinks')
</template>

<script>
import NavBar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default {
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      navItems: [
        { id: 1, title: 'a propos', link: 'about' },
        { id: 2, title: 'portfolio', link: 'portfolio' },
        { id: 3, title: 'contact', link: 'contact' }
      ],
      socialLinks: [
        { id: 1, icon: 'mdi-instagram', href: '' },
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
</style>
