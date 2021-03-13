<template lang="pug">
  v-card.footer.flex(height="170")
    v-footer(padless='' absolute)
      scroll-progress-bar(height="4px" containerColor="rgba(173,171,172,.2)" :background-color="backgroundColor" :key="$route.path" @begin="showscrollbar = true")
      h2.title__scrollbar(v-if='showscrollbar') scroll
      v-card.white.flex(flat='' tile='')
        v-card-title.white.pl-4
          .d-flex.flex-column.align-center(:class="{'justify-center': $vuetify.breakpoint.smAndDown, 'container': $vuetify.breakpoint.smAndDown}")
            v-spacer
            a.email(href="mailto:contact@studiopepite.com" data-cursor-hover data-cursor-mix-blend-mode="difference") contact@studiopepite.com
            .icons.col-2
              v-btn(v-for='link in socialLinks' :key='link.id' icon='' data-cursor-hover data-cursor-mix-blend-mode="difference")
                a(:href="link.href")
                  v-icon(size='24px')
                    | {{ link.icon }}
        v-divider
        v-card-text.text-center
          | {{ new Date().getFullYear() }} &mdash;
          strong Melvinvmegen
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
  data () {
    return {
      showscrollbar: false
    }
  },
  computed: {
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
    width: 20% !important;
    left: unset !important;
    right: 4vw;
    top: calc(4vh + 2rem) !important;
  }

  .title__scrollbar {
    position: absolute !important;
    left: unset !important;
    right: 1vw;
    top: calc(3vh + 2rem) !important;
    z-index: 51;
    font-size: 17px;
  }

  @media only screen and (max-width: 960px) {
    .footer {
      height: 558px !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .footer {
      height: 822px !important;
    }
  }

  @media only screen and (max-width: 500px) {
    .footer-list:last-child {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }

  @media only screen and (max-width: 370px) {
    .footer {
      height: 839px !important;
    }
  }

  @media only screen and (max-width: 340px) {
    .footer {
      height: 855px !important;
    }
  }
</style>
