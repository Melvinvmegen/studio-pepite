<template lang="pug">
  v-container.pa-md-0(:class="{'align-center': $vuetify.breakpoint.smAndDown}")
    h2(:class="{ 'primary-border': color, 'white--text': white }" v-html="blabla.title")
    br
    slot
</template>

<script>
export default {
  props: {
    blabla: {
      type: Object,
      default: null
    },
    side: {
      type: String,
      default: 'left'
    },
    color: Boolean,
    white: Boolean
  }
}
</script>

<style scoped>
  h2:after {
    content: "";
    display: block;
    margin-top: 1rem;
    height: 10px;
    width: 65px;
    border-bottom: 0.1rem solid #d8d8d8;
  }

  h2.primary-border:after {
    border-bottom: 0.1rem solid #234A5D !important;
  }

  h2.side-center:after {
    content: "";
    display: block;
    margin: 2rem auto 1rem;
    height: 10px;
    width: 65px;
    border-bottom: 0.1rem solid #d8d8d8;
  }

  h2.side-right:after {
    content: "";
    display: block;
    margin: 2rem 0 1rem auto;
    height: 10px;
    width: 65px;
    border-bottom: 0.1rem solid #d8d8d8;
  }

  span {
    line-height: 1.8;
  }

  @media only screen and (max-width: 350px) {
  h2 {
    font-size: 1.5rem;
  }

  h2.side-center:after {
    margin: 0.5rem auto 0.5rem;
  }

  h2.side-right:after {
    margin: 0.5rem auto 0.5rem;
  }
}
</style>
