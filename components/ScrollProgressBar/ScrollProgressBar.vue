<template lang='pug'>
  div(:class="containerClass" :style="{ background: containerColor, zIndex: zIndex}" v-if='show')
    div(:class="barClass" :style="{ width: `${width}%`, height: height, background: backgroundColor}")
</template>

<script>
import throttle from 'lodash.throttle'
export default {
  props: {
    height: {
      type: String,
      default: '.5rem'
    },
    zIndex: {
      type: String,
      default: '50'
    },
    backgroundColor: {
      type: String,
      default: 'linear-gradient(to right, #38C172, #51D88A)'
    },
    containerColor: {
      type: String,
      default: 'transparent'
    },
    barClass: {
      type: Object,
      default: () => {}
    },
    containerClass: {
      type: Object,
      default: () => {
        return {
          'progress-bar-container--container': true
        }
      }
    }
  },
  data () {
    return {
      width: 0,
      show: false
    }
  },
  mounted () {
    const horizontalContainer = document.querySelector('.full-horizontal-container')
    this.show = horizontalContainer !== null
    if (this.show) {
      let passiveIfSupported = false
      try {
        const options = {
          get passive () {
            passiveIfSupported = { passive: true }
            return false
          }
        }
        horizontalContainer.addEventListener('test', null, options)
        horizontalContainer.removeEventListener('test', null, options)
      } catch (error) {}
      horizontalContainer.addEventListener('scroll', throttle(this.handleScroll, 15), passiveIfSupported)
      horizontalContainer.dispatchEvent(new Event('scroll'))
    }
  },
  destroyed () {
    const horizontalContainer = document.querySelector('.full-horizontal-container')
    if (this.show && horizontalContainer) {
      horizontalContainer.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll () {
      const fullHorizontalContainer = document.querySelector('.full-horizontal-container')
      const horizontalContainer = document.querySelector('.horizontal-container')
      const width = horizontalContainer.clientWidth - (fullHorizontalContainer.clientWidth * 2)
      this.width = (fullHorizontalContainer.scrollTop / width) * 100
      const eventWidth = Math.ceil(this.width)
      if (eventWidth === 0) {
        this.$emit('begin')
      }
      if (eventWidth === 100) {
        this.$emit('complete')
      }
    }
  }
}
</script>

<style scoped>
.progress-bar-container--container {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>
