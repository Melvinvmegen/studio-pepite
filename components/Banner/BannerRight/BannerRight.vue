<template lang="pug">
  .header-right
    v-img(src="https://source.unsplash.com/random")
    v-img(src="https://source.unsplash.com/random")
    v-img(src="https://source.unsplash.com/random")
    v-img(src="https://source.unsplash.com/random")
    v-img(src="https://source.unsplash.com/random")

</template>

<script>

export default {
  props: {
    image: {
      type: String,
      default: null
    }
  }
}
</script>

<style>
.header-right {
  width: 80%;
  display: flex;
  align-items: center;
}

.sm {
  padding: 50px 0 !important;
}

@media only screen and (max-width: 960px) {
  .banner-img {
    max-width: 550px !important;
  }
}

@media only screen and (max-width: 600px) {
  .banner-img {
    max-width: 500px !important;
  }
}

@media only screen and (max-width: 500px) {
  .banner-img {
    max-width: 400px !important;
  }
  #header-right-contact {
    min-height: 55vh !important;
  }

}

@media only screen and (max-width: 400px) {
  .banner-img {
    max-width: 350px !important;
  }
}
</style>
