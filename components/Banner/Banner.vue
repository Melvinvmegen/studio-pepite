<template lang="pug">
  .full-horizontal-container
    .section-home.horizontal-container(:style="{ width: setWidth }")
      BannerLeft.col-md-2.col-12(:blabla='blabla' :ctaText="ctaText" :link="link" ref="banner_1")
      BannerRight.col-md-8(:image="image" :projectImages='blabla.projectImages' ref="banner_2")
</template>

<script>
import BannerLeft from './BannerLeft/BannerLeft'
import BannerRight from './BannerRight/BannerRight'

export default {
  components: {
    BannerLeft,
    BannerRight
  },
  props: {
    blabla: {
      type: Object,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    ctaText: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      isMounted: false
    }
  },
  computed: {
    setWidth () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return ''
      }
      if (!this.isMounted) {
        return 300 + 'vw'
      }
      return (this.$refs.banner_1.$el.scrollWidth + this.$refs.banner_2.$el.scrollWidth * 1.075) + 'px'
    }
  },
  mounted () {
    this.isMounted = true
  }
}
</script>

<style>
.section-home {
  padding: 0;
  width: 100%;
  display: flex;
  position: relative;
  padding: 0;
  height: calc(90vh - 70px);
}

.full-horizontal-container {
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  display: block;
  margin: 0;
  top: 0;
  left: 0;
}

.horizontal-container {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 10vw;
  flex-direction: row;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
  width: 400vw;
  padding-top: 15vh;
}

.horizontal-container .v-image {
  margin-right: 20px;
}

.full-horizontal-container::-webkit-scrollbar {
  display: none;
}

.horizontal-container::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 960px) {
  .full-horizontal-container {
    width: 100%;
    height: 100%;
    transform: unset;
    transform-origin: unset;
    position: relative;
    overflow-y: unset;
  }

  .horizontal-container {
    display: flex;
    overflow-x: hidden;
    overflow-y: unset;
    flex-direction: column;
    transform: unset;
    transform-origin: unset;
    width: 100%;
    padding-top: 0;
    padding-left: 0;
    height: auto;
  }
  .about-container {
    padding-left: unset;
    padding-top: unset;
    padding-bottom: unset;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .about-skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-top: unset;
    margin-bottom: unset;
    padding-bottom: unset;
    padding-top: unset;
  }

  .about-skill img {
    height: auto;
    max-width: 100%;
  }

  .about_summary {
    display: inline-flex;
    width: 100%;
    align-items: center;
    overflow: unset;
    height: 100%;
    margin-top: unset;
    margin-bottom: unset;
    padding-top: unset;
    padding-bottom: unset;
    flex-direction: column;
  }

  .horizontal-container .v-image {
    margin: 10px 0;
  }

  .header {
    margin: 20px 0 0 0;
    padding-top: 10px;
    background-position: unset;
  }
}

@media only screen and (max-width: 768px) {
  .horizontal-container .v-image {
    height: 400px !important;
    width: 600px !important;
  }
}

@media only screen and (max-width: 500px) {
  .horizontal-container {
    height: auto;
    padding-left: 0
  }
}

@media only screen and (max-width: 450px) {
  .header {
    max-height: unset !important;
    margin: auto;
  }

  .container-full-height {
    height: auto;
  }
}

@media only screen and (max-width: 350px) {
  .header {
    margin: auto;
  }
}
</style>
