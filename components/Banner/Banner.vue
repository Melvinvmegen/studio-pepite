<template lang="pug">
  .full-horizontal-container
    .section-home.horizontal-container(:style="{ width: setWidth }")
      BannerLeft.col-md-2.col-12(:blabla='blabla' :ctaText="ctaText" :link="link" ref="banner_1")
      BannerRight(:image="image" :blabla='blabla' ref="banner_2")
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
      if (!this.isMounted) {
        return 300 + 'vw'
      }
      return (this.$refs.banner_1.$el.clientWidth + this.$refs.banner_2.$el.clientWidth) * 1.1 + 'px'
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
  height: calc(80vh - 100px);
  min-height: 700px;
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
  padding-top: 1px;
}

.horizontal-container {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 12vw;
  flex-direction: row;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
  width: 400vw;
}

.horizontal-container .v-image {
  margin-right: 20px;
}

.full-horizontal-container::-webkit-scrollbar {
    display: none;
}

@media only screen and (max-width: 960px) {
  .section-home {
    height: 100vh !important;
  }

  .header-height {
    width: 100% !important;
    max-height: 50vh !important;
  }

  .header {
    margin: 50px 0 0 0;
    max-height: 40vh !important;
  }
}

@media only screen and (max-width: 500px) {
  .header {
    margin: 20px 0 0 0;
    max-height: 60vh !important;
  }

  .header-height {
    max-height: 40vh !important;
  }
}

@media only screen and (max-width: 450px) {
  .header {
    max-height: 65vh !important;
    margin: auto;
  }

  .header-height {
    max-height: 35vh !important;
  }
}

@media only screen and (max-width: 350px) {
  .header {
    max-height: 60vh !important;
    margin: auto;
  }

  .header-height {
    max-height: 40vh !important;
  }
}
</style>
