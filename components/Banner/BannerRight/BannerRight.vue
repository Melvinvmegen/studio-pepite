<template lang="pug">
  .header-right
    .home-container.d-flex(v-if="$route.name !== 'about'")
      v-img(src="https://source.unsplash.com/random")
      v-img(src="https://source.unsplash.com/random")
      v-img(src="https://source.unsplash.com/random")
      v-img(src="https://source.unsplash.com/random")
      v-img(src="https://source.unsplash.com/random")
    .about-container(v-else)
      .about-skill
        v-img(src="https://source.unsplash.com/random" width="400")
        .d-flex.justify-space-around
          .about-text.col-5
            span Currently, I want to show myself as an illustrator in my portfolio. You can find my personal architectural concepts, abstract illustrations, architectural illustrations and illustrations used for presentation of projects.
            | I try to be a minimalist, which is currently inspiring me the most.
          .about-skills.col-5
            h2 WHAT I DO
            ul(data-fade='right' data-fadetarget='children')
              li(style='transform: translate(0px, 0px); opacity: 1;')
                | ilustrations
              li(style='transform: translate(0px, 0px); opacity: 1;')
                | architecture ilustrations
              li(style='transform: translate(0px, 0px); opacity: 1;')
                | interior design for architecture/developers
              li(style='transform: translate(0px, 0px); opacity: 1;')
                | vr visualization tours
      .about_summary
        .summary-img
          .container-full-height
            img.img-full-height(src="https://source.unsplash.com/random")
        .d-flex.justify-space-around
          .about-text.col-6
            span Currently, I want to show myself as an illustrator in my portfolio. You can find my personal architectural concepts, abstract illustrations, architectural illustrations and illustrations used for presentation of projects.
            | I try to be a minimalist, which is currently inspiring me the most.
          .about-skills.col-5
            h2 WHAT I DO
            ul(data-fade='right' data-fadetarget='children')
              li(style='transform: translate(0px, 0px); opacity: 1;')
                | ilustrations
              li(style='transform: translate(0px, 0px); opacity: 1;')
                | architecture ilustrations
              li(style='transform: translate(0px, 0px); opacity: 1;')
                | interior design for architecture/developers
              li(style='transform: translate(0px, 0px); opacity: 1;')
                | vr visualization tours

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
.section {
  flex: 1 0 auto;
  max-width: 100%
}

.header-right {
  width: 80%;
  display: flex;
  align-items: center;
}

.sm {
  padding: 50px 0 !important;
}

.about-container {
  padding-left: 20vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
  height: 100%;
  display: flex;
}

.about_summary {
  display: inline-flex;
  width: 100vw;
  align-items: center;
  overflow: hidden;
  height: 100vh;
  margin-top: -25vh;
  margin-bottom: -25vh;
  padding-top: 25vh;
  padding-bottom: 25vh;
}

.about-skill {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin-top: -25vh;
  margin-bottom: -25vh;
  padding-bottom: 25vh;
  padding-top: 25vh;
}

.container-full-height {
  overflow: hidden;
  height: 100vh;
  margin-top: -25vh;
  margin-bottom: -25vh;
  position: relative;
}

.img-full-height {
  margin: 0;
  transform: translateX(-20%) translateY(-10%) scale(1.2);
  position: absolute;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  top: 0;
  left: 0;
  max-width: none!important;
  object-fit: cover;
  max-height: none;
  z-index: 99999;
  width: 100%;
}

.summary-img {
  min-width: 45vh;
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
