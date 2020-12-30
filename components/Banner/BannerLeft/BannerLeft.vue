<template lang="pug">
  .header
    v-container.col-md-10.col-12.justify-center.d-flex.align-center
      TextHeader(:blabla="blabla")
        span {{ blabla.description }}
        CTA(v-if="ctaText && link" :className="true" color="accent" :text="ctaText" :link="link")
</template>

<script>
import CTA from '~/components/CTA/CTA'
import TextHeader from '~/components/TextHeader/TextHeader'

export default {
  components: {
    CTA,
    TextHeader
  },
  props: {
    blabla: {
      type: Object,
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
.header {
  position: relative;
  text-align: justify;
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
}

.cta-wrapper-home {
  height: 80%;
}

.home-text {
  margin: 50px 0;
  line-height: 2;
  font-size: 16px;
}

</style>
