<template>
  <div
    :class="containerClass"
    :style="{
      background: containerColor,
      zIndex: zIndex
    }"
  >
    <div
      :class="barClass"
      :style="{
        width: `${width}%`,
        height: height,
        background: backgroundColor
      }"
    />
  </div>
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
      width: 0
    }
  },
  mounted () {
    const horizontalContainer = document.querySelector('.full-horizontal-container')
    console.log(horizontalContainer)
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
  },
  destroyed () {
    const horizontalContainer = document.querySelector('.full-horizontal-container')
    horizontalContainer.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const horizontalContainer = document.querySelector('.full-horizontal-container')
      console.log(document.documentElement.scrollHeight - document.documentElement.clientHeight)
      console.log(horizontalContainer.scrollWidth - horizontalContainer.clientWidth)
      const documentWidth = document.documentElement.scrollWidth - document.documentElement.clientWidth
      this.width = (window.scrollX / documentWidth) * 100
      const eventWidth = Math.ceil(this.width)
      console.log(documentWidth, this.width, eventWidth)

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
}
</style>
