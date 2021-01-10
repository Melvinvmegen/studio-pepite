<template lang="pug">
  .section-home.horizontal-container
    BannerLeft.col-md-7.col-12(:blabla='blabla' :ctaText="ctaText" :link="link")
    BannerRight.col-md-6.col-12(:image="image" :blabla='blabla')
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

.horizontal-container {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 12vw;
}

.horizontal-container .v-image {
  margin-right: 20px;
}

.horizontal-container::-webkit-scrollbar {
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
