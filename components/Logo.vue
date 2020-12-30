<template lang='pug'>
  .logo.d-flex
    img(:src="whitelogo" alt="" class="logo" v-if="color")
    img(:src="defaultlogo" alt="" class="logo" v-else)
</template>

<script>
import Logo from '~/assets/LOGO.svg'
import WhiteLogo from '~/assets/logo blanc.svg'

export default {
  props: {
    color: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      defaultlogo: Logo,
      whitelogo: WhiteLogo
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
</style>
