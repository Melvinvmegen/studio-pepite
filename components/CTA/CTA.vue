<template lang="pug">
  .my-5(:class="{centered: centered}")
    v-btn(dark large='')
      a.white--text(:href="link")
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
