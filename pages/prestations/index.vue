<template lang="pug">
  .full
    .d-flex.justify-center.align-center.full-container
      .header.col-md-6.col-12
        v-container.pa-md-0.justify-center.d-flex.align-md-center.align-start
          TextHeader(:blabla="blabla" :after='false')
            span(v-html="blabla.description")
            CTA(v-if="ctaText && link" :className="true" color="accent" :text="ctaText" :link="link")

      .about-container.col-md-5.col-12(v-if="$route.name === 'prestations'")
        .prestation-img
          img(src="~/assets/prestations.jpeg" width="500" data-cursor-hover data-cursor-mix-blend-mode="difference")
</template>

<script>
import Banner from '~/components/Banner/Banner'
import CTA from '~/components/CTA/CTA'

export default {
  components: {
    Banner,
    CTA
  },
  data () {
    return {
      blabla: {
        title: 'prestations détaillées',
        description: `
          <div class="details">
            <div class="contact_details detail">
              <span class="contact_details-label detail-label">dessin 2D :</span>
              <span class="contact_details-separator detail-separator"></span>
              plans d’agencements, dossier technique, coupes, élévations, détails de mobilier, croquis
            </div>
            <div class="contact_details detail">
              <span class="contact_details-label detail-label">dessin 3D :</span>
              <span class="contact_details-separator detail-separator"></span>
              construction / modélisation 3D, placage de texture, rendu photoréaliste
            </div>
            <div class="contact_details detail">
              <span class="contact_details-label detail-label">design d’espace :</span>
              <span class="contact_details-separator detail-separator"></span>
               aménagement de l’espace, proposition d’identité visuelle ("personnel branding"), proposition d’identité de lieux (moodboard, planches tendance…), croquis d’ambiance
            </div>
            <div class="contact_details detail">
              <span class="contact_details-label detail-label">relevés :</span>
              <span class="contact_details-separator detail-separator"></span>
              prises de côtes, réalisations de plans
            </div>
          </div>
        `
      },
      ctaText: 'contactez moi',
      link: 'Contact'
    }
  }
}
</script>

<style>
  .full-container {
    height: calc(90vh - 70px);
    padding-left: 10vw;
  }

  .details .detail {
    display: flex;
    flex-wrap: wrap;
    font-weight: 500;
    text-transform: uppercase;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 0 0 1.25rem;
  }

  .details .detail .detail-label {
    padding-right: 1%;
    font-weight: 700;
  }

  .details .detail .detail-separator {
    height: 1px;
    background-color: #979797;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    width: 75%;
  }

  .details .detail .detail-value {
    padding-left: 5%;
    width: 45%;
    margin: 0;
    font-weight: 600;
    margin-top: .5rem;
  }

  .prestation-img {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .prestation-img img {
    height: auto;
    max-width: 100%;
  }

  @media only screen and (max-width: 960px) {
    .full-container {
      height: auto;
      padding-left: 0;
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 500px) {
    .detail-separator {
      width: 40% !important;
    }
  }
</style>
