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
        { id: 1, title: 'A PROPOS', link: 'frontEnd' },
        { id: 2, title: 'PORTFOLIO', link: 'backEnd' },
        { id: 3, title: 'ABOUT', link: 'referencement' }
      ],
      socialLinks: [
        { id: 1, icon: 'mdi-instagram', href: 'https://www.linkedin.com/in/melvin-van-megen/' },
        { id: 2, icon: 'mdi-mail', href: 'mailto:melvin.vmegen@gmail.com' },
        { id: 4, icon: 'mdi-linkedIn', href: 'https://github.com/Melvinvmegen' }
      ]
    }
  }
}
</script>
