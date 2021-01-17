<template lang="pug">
  .my-5(:class="{centered: centered}")
    v-btn(dark large='' data-cursor-hover data-cursor-mix-blend-mode="difference")
      nuxt-link.white--text(:to="link")
        | {{ text }}
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: null
    },
    centered: Boolean,
    link: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.centered {
  display: flex;
  justify-content: center;
}
</style>
