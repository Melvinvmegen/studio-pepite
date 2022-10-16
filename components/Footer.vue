<template lang="pug">
  v-footer.transparent(padless='' absolute app :height="$vuetify.breakpoint.mdAndUp ? '45px' : '100px'")
    scroll-progress-bar(height="4px" containerColor="rgba(173,171,172,.2)" :background-color="backgroundColor" :key="$route.path" v-if='showScrollBar')
    v-card.flex.transparent(flat='' tile='')
      v-card-text.text-center.white
        v-row(align="center" justify="center")
          span {{ new Date().getFullYear() }} &mdash;
          a.email(href="mailto:contact@studiopepite.com" data-cursor-hover data-cursor-mix-blend-mode="difference") contact@studiopepite.com
          v-btn(v-for='link in socialLinks' :key='link.id' icon='' data-cursor-hover data-cursor-mix-blend-mode="difference")
            NuxtLink(:to="link.href")
              v-icon(size='24px')
                | {{ link.icon }}
</template>

<script>
import ScrollProgressBar from '~/components/ScrollProgressBar/ScrollProgressBar'
import Logo from '~/components/Logo'

export default {
  components: {
    Logo,
    ScrollProgressBar
  },
  props: {
    socialLinks: {
      type: Array,
      default: null
    }
  },
  computed: {
    showScrollBar () {
      return this.$store.state.fullContainerMounted && !this.$vuetify.breakpoint.smAndDown
    },
    backgroundColor () {
      return 'linear-gradient(90deg, rgb(150, 227, 255) 25%, rgb(168, 181, 255) 50%, rgb(184, 163, 244) 75%, rgb(227, 204, 219) 100%'
    }
  }
}
</script>

<style scoped>
  .icons {
    display: flex;
    justify-content: space-around;
    width: 40%;
  }

  ul {
    padding: 0;
  }

  ul .v-list-item {
    font-size: 16px;
  }

  .email {
    font-size: 14px;
  }

  .progress-bar-container--container {
    position: absolute !important;
    width: 17% !important;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: calc(-4vh + 2rem) !important;
  }

  .footer {
    max-height: 147px !important;
  }

  @media only screen and (max-width: 960px) {
    .footer {
      max-height: 179px !important;
      height: 179px !important;
    }
  }

  @media only screen and (max-width: 420px) {
    .footer {
      max-height: 164px !important;
      height: 164px !important;
    }
  }
</style>
