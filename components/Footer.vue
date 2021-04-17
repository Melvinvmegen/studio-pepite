<template lang="pug">
  v-card.footer.flex
    v-footer(padless='' absolute)
      v-card.white.flex(flat='' tile='')
        v-card-title.white.pl-md-4.pa-0
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

  .footer {
    max-height: 147px !important;
  }

  @media only screen and (max-width: 960px) {
    .footer {
      height: 179px !important;
    }
  }

  @media only screen and (max-width: 420px) {
    .footer {
      height: 164px !important;
    }
  }
</style>
