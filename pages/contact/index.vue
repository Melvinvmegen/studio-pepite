<template lang="pug">
  .full
    .d-flex.contact-container.flex-column.flex-md-row
      .contact_content.col-lg-6.col-md-7.col-10
        .col-md-9.col-12
          h1 {{ title }}
          .contact_text
            p {{ description }}
          .details.contact_details
            .contact_details.detail
              span.contact_details-label.detail-label
                | E-mail
              span.contact_details-separator.detail-separator
              span.contact_details-value.detail-value
                a.black--text(href="mailto:contact@studiopepite.com") CONTACT@STUDIOPEPITE.COM
            .contact_details.detail
              span.contact_details-label.detail-label
                | Téléphone
              span.contact_details-separator.detail-separator
              span.contact_details-value.detail-value
                a.black--text(href="tel:33668374980") +33 6 68 37 49 80
      .contact-img.col-md-6.col-10.d-flex.justify-center
        img.d-flex.justify-center.img-contact(src="~/assets/contact.jpg" data-cursor-hover data-cursor-mix-blend-mode="difference")

</template>

<script>
import Banner from '~/components/Banner/Banner'

export default {
  components: {
    Banner
  },
  data () {
    return {
      title: 'Contact',
      description: "Je vis actuellement en France. N'hésitez pas à me contacter si vous avez des questions, des suggestions ou des offres. À bientôt !",
      ctaText: 'contact me',
      link: 'contact'
    }
  }
}
</script>

<style scoped>
  .contact_content {
    padding-left: 15vw;
  }

  .contact-container {
    display: flex;
    padding: 25vh 0;
    align-items: center;
    height: 73vh;
  }

  .details {
    margin: 0 0 6.25rem;
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
    color: #adabac;
    padding-right: 5%;
    width: 29%;
  }

  .detail-separator:first-child {
    margin-left: -16px !important;
  }

  .details .detail .detail-separator {
    height: 1px;
    background-color: #979797;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    width: 26%;
    margin-left: 10px;
  }

  .details .detail .detail-value {
    width: 45%;
    margin: 0;
    font-weight: 600;
    margin-top: .5rem;
  }

  .img-contact {
    margin: auto;
  }

  .img-contact {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: 550px;
  }

  @media only screen and (max-width: 960px) {
    .contact-container {
      padding: 5vh 0;
    }
    .contact_content {
      padding: 0;
      max-height: 50%;
    }

    .contact-img {
      padding: 0;
      max-height: 50%;
    }
  }

  @media only screen and (max-width: 500px) {
    .details .detail .detail-value {
      padding-left: 5%;
    }

    .details {
      margin: 0 !important;
    }
    .contact_content {
      max-height: 70%;
    }

    .detail-value {
      padding-left: 0 !important;
      width: 100% !important;
    }

    .full {
      padding: 0;
    }
  }

</style>
