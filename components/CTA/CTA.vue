<template lang="pug">
  .my-5(:class="{centered: centered}")
    nuxt-link.white--text(:to="link" data-cursor-hover data-cursor-mix-blend-mode="difference" class="d-flex align-center")
      h2.section__title
        | {{ text }}
      svg(width='58' height='12' xmlns='http://www.w3.org/2000/svg' class='mt-n1 ml-md-0 ml-n3')
        path(d='M48.31.82L57.52 6l-9.21 5.18-.49-.87L54.59 6.5H.5v-1h54.091l-6.772-3.81.49-.87z' fill='#030303')

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
