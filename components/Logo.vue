<template lang='pug'>
  .logo.d-flex(data-cursor-hover data-cursor-mix-blend-mode="difference")
    img(:src="logoPepite" alt="" class="logo")
</template>

<script>
import logoPepite from '~/assets/logo_pepite_color.svg'

export default {
  props: {
    color: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      logoPepite
    }
  }
}
</script>

<style scoped>
  .logo {
    width: 150px;
    height: 150px;
    margin-left: 10px;
  }

  .logo img {
    max-width: 150px;
  }

  @media only screen and (max-width: 500px) {
    .logo {
      margin-left: 0;
    }
  }
</style>
