<template lang="pug">
  v-card.footer.flex(height="165")
    v-footer(padless='' absolute)
      v-card.white.flex(flat='' tile='')
        v-card-title.white.pl-4
          .d-flex.flex-column.align-center(:class="{'justify-center': $vuetify.breakpoint.smAndDown, 'container': $vuetify.breakpoint.smAndDown}")
            v-spacer
            a.email(href="mailto:fanny.coderey@gmail.com") fanny.coderey@gmail.com
            .icons.col-2
              v-btn(v-for='link in socialLinks' :key='link.id' icon='')
                a(:href="link.href")
                  v-icon(size='24px')
                    | {{ link.icon }}
        v-divider
        v-card-text.text-center
          | {{ new Date().getFullYear() }} &mdash;
          strong Melvinvmegen
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  props: {
    socialLinks: {
      type: Array,
      default: null
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
