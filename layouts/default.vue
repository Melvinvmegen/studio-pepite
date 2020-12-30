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
        { id: 1, title: 'a propos', link: 'frontEnd' },
        { id: 2, title: 'portfolio', link: 'backEnd' },
        { id: 3, title: 'contact', link: 'referencement' }
      ],
      socialLinks: [
        { id: 1, icon: 'mdi-instagram', href: 'https://www.linkedin.com/in/melvin-van-megen/' },
        { id: 2, icon: 'mdi-linkedin', href: 'https://github.com/Melvinvmegen' }
      ]
    }
  }
}
</script>
