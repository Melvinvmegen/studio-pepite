<template lang="pug">
  .full
    .d-flex.contact-container
      .contact_content.col-5
        .contact_content-wrap
          h1.contact_title
            | contact
          .contact_text
            p
              | je vis actuellement en france. n'hésitez pas à me contacter si vous avez des questions, des suggestions ou des offres.
          .details.contact_details
            .contact_details.detail
              span.contact_details-label.detail-label
                | E-mail
              span.contact_details-separator.detail-separator
              span.contact_details-value.detail-value
                | hello.studiopepite@gmail.com
            .contact_details.detail
              span.contact_details-label.detail-label
                | Téléphone
              span.contact_details-separator.detail-separator
              span.contact_details-value.detail-value
                | +33 6 68 37 49 80
      .contact-img.col-6
        img.d-flex.justify-center.img-contact(src="~/assets/contact.jpg" width="550")

</template>

<script>
import Banner from '~/components/Banner/Banner'

export default {
  components: {
    Banner
  },
  data () {
    return {
      blabla: {
        title: 'hello, my name is fanny coderey and I love good design',
        description: 'Always been a freelancer who is trying to sort out his 3d world. In 2015, I finished studying Industrial Design at Institute of Industrial Design in Koszalin. The university has helped me gain sensitivity and get to know myself better through various faculties I have experienced. 3d graphics helps me express myself, show my world and my own projects on the border of art, architecture and design. I was inspired by a number of different trends during my short 3d career which has then translated into projects I carried out.'
      },
      ctaText: 'contact me',
      link: 'Contact'
    }
  }
}
</script>

<style>
  .contact_content {
    padding-left: 15vw;
  }

  .contact-container {
    display: flex;
    padding: 25vh 0;
    align-items: center;
    height: 73vh;
  }

  .contact_content-wrap {
    width: 75%;
    max-width: 100%;
  }

  .contact_title {
    font-weight: 800;
    font-size: 1.625rem;
    color: #4e4e4e;
    margin: 0 0 1.75rem;
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

  .details .detail .detail-separator {
    height: 1px;
    background-color: #979797;
    -webkit-box-flex: 2;
    -ms-flex-positive: 2;
    flex-grow: 2;
    width: 26%;
  }

  .details .detail .detail-value {
    padding-left: 5%;
    width: 45%;
    margin: 0;
    font-weight: 600;
    margin-top: .5rem;
  }

  .img-contact {
    margin: auto;
  }
</style>
