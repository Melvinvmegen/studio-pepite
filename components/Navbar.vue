<template lang="pug">
  v-app-bar.white(app fixed elevate-on-scroll)
    .col-12.d-flex.justify-space-between.align-center.header-container
      .d-flex.align-center.main-header-left
        nuxt-link(:to="{path: '/'}")
          Logo(color="defaultlogo")
      .main-header-center.col-lg-4(v-if="this.$vuetify.breakpoint.mdAndUp")
        v-list-item.nav-item.nav-anim(v-for="item in navItems" dark exact :key="item.name")
          nuxt-link(:to="{name: item.link}")
            .primary--text(data-cursor-hover data-cursor-mix-blend-mode="difference") {{ item.title }}
      .main-header-center(v-else)
        v-app-bar-nav-icon(@click.stop="drawer= true")

      v-navigation-drawer(v-model='drawer' absolute='' temporary='' fixed right)
        v-icon.float-right.mr-2.mt-2(@click.stop="drawer = false") mdi-close
        br
        v-list.mt-2(nav='' dense='')
          v-list-item-group
            v-list-item.nav-anim(v-for='item in navItems' :key='item.title' two-line exact :to="{name: item.link}")
              v-list-item-content
                v-list-item-title.ml-4 {{ item.title }}
            v-divider
            br
            .d-flex.justify-center.align-center(:class="{'flex-column': $vuetify.breakpoint.smAndDown}")
              h3.primary--text fanny coderey
              a.email(href="mailto:contact@studiopepite.com") contact@studiopepite.com
              .icons
                v-btn(v-for='link in socialLinks' :key='link.id' icon='')
                  a.icon-link(:href="link.href")
                    v-icon(size='20px' color="#000")
                      | {{ link.icon }}

</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  props: {
    navItems: {
      type: Array,
      default: null
    },
    socialLinks: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      drawer: false,
      fixed: true
    }
  }
}
</script>

<style>

.header-container {
  margin: 0 auto !important;
}

.v-toolbar__content {
  justify-content: space-between;
}

.v-overlay__scrim {
  height: 100vh !important;
}

.v-navigation-drawer {
  height: 100vh !important;
  width: 60vw !important;
}

.v-navigation-drawer__content {
  margin: 30px;
}

aside .v-navigation-drawer__content {
  margin: 0;
}

.nav-item a {
  color: white !important;
}

.main-header-left {
  width: 10%;
  margin-left: 10px;
  margin-top: 5px;
  max-height: 100%;
}

.main-header-center {
  display: flex;
  align-items: center;
  height: 100%;
  width: 45%;
}

.main-header-center .nav-item {
  font-weight: 600;
  width: 100%;
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
  font-size: 14px;
  padding: 0;
}

/* NAVANIM */

.icon-link {
  text-decoration: none;
}

  .nav-anim a {
    display: inline-block;
    border: 3px solid transparent;
    position: relative;
    cursor: pointer;
    text-decoration: none;
  }

  .nav-anim a .v-list-item__content .v-list-item__title {
    font-weight: 600;
  }

  .nav-anim a .text {
    transform: translate3d(0, 0.7em, 0);
    transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  .nav-anim .anim :after {
    position: absolute;
    content: '';
    bottom: -6px;
    left: calc(0.7em * 1.2);
    right: calc(0.7em * 1.2);
    height: 4px;
    background: #F9423A;
    transition: transform 0.8s cubic-bezier(1, 0, 0.37, 1) 0.2s, right 0.2s cubic-bezier(0.04, 0.48, 0, 1) 0.6s, left 0.4s cubic-bezier(0.04, 0.48, 0, 1) 0.6s;
  }

  .nav-anim .line {
    position: absolute;
    background: #F9423A;
    bottom: -6px;
  }

  .nav-anim .line.-bottom {
    height: 3px;
    left: -3px;
    right: -3px;
    transform: scale3d(0, 1, 1);
  }

  .nav-anim .line.-bottom {
    bottom: -3px;
    transform-origin: right;
  }

  .nav-anim .anim :active .text {
    transform: translate3d(0, 0, 0);
    transition: transform 0.6s cubic-bezier(0.2, 0, 0, 1) 0.4s;
  }

  .nav-anim .anim :hover:after,
  .nav-anim .anim :active:after {
    transform: scale3d(0, 1, 1);
    right: -3px;
    left: -3px;
    transform-origin: right;
    transition: transform 0.2s cubic-bezier(1, 0, 0.65, 1.01) 0.17s, right 0.2s cubic-bezier(1, 0, 0.65, 1.01), left 0s 0.3s;
  }

  .nav-anim .anim :hover .line,
  .nav-anim .line.-right {
    right: -3px;
    transition: transform 0.1s cubic-bezier(1, 0, 0.65, 1.01) 0.23s;
    transform-origin: top;
  }

  .nav-anim .anim :active .line {
    transform: scale3d(1, 1, 1);
  }

  .nav-anim .anim :hover .line.-bottom,
  .nav-anim .anim :active .line.-bottom {
    transition: transform 0.5s cubic-bezier(0, 0.53, 0.29, 1) 0.56s;
    transform-origin: left;
  }

  @media (max-width: 960px) {
    .main-header-center {
      justify-content: flex-end;
      margin-right: 20px;
    }
  }
  @media only screen and (max-width: 600px) {
    .v-navigation-drawer {
      width: 70vw !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .v-navigation-drawer__content {
      margin: 0;
    }
  }
</style>
