<template>
<div class="wrapper pt-24 md:pt-28">
  <section ref="home" id="home">
   <slider v-if="sliderImages.length > 0" :data="sliderImages"/>
  </section>
  <section ref="services" id="services" class="py-10 px-10">
    <h2 class="text-3xl font-bold">Services</h2>
    <div class="servicesWrapper py-10">
    <div v-for="(item, index) in services" :key="index" class="serviceItem py-10 md:py-0">
      <h6>{{item.attributes.Title}}</h6>
      <p>{{item.attributes.description}}</p>
    </div>
    </div>
  </section>
  <section ref="location" id="location" class="p-10">
    <h2 class="text-3xl font-bold">Location</h2>
    <div class="location__inner">
    <div class="map justify-center p-2 md:p-10">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75394.15842114008!2d-1.6057718756315602!3d53.806083470819466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!5e0!3m2!1sen!2suk!4v1641843354054!5m2!1sen!2suk" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div class="info flex items-center justify-center">
      <div class="info__inner flex flex-col items-center justify-center">
        <p class="py-5">{{location.address}}</p>
        <p class="py-5">{{location.email}}</p>
        <p class="py-5">{{location.phone}}</p>
        <a :href="location.instagram" class="py-5 text-3xl"><i class="fab fa-instagram"></i></a> 
      </div>
    </div>
    </div>
  </section>
  <section ref="reviews" id="reviews" class="p-2 md:p-10">
  <h2 class="text-3xl font-bold">Reviews</h2>
<sliderReviews v-if="reviews.length > 0" :data="reviews" class="mt-10" />
  </section>
  <whatsappButton :mobile="location.phone"/>
</div>
</template>

<script>
import slider from '../components/slider.vue'
import sliderReviews from '../components/sliderReviews.vue'
import whatsappButton from '../components/whatsappButton.vue'
import {emitter} from '../services/emitter'

export default {
  name: 'IndexPage',
  data () {
    return{
      sliderImages: [],
      services: [],
      reviews: [],
      location: {
        address: '',
        email: '',
        instagram: '',
        phone: ''
      }
    }
  },

  components: {slider, sliderReviews, whatsappButton},
  methods: {
    buildMediaUrl (url) {
      return process.env.MEDIA_URL + url
    }
  },

  async created() {
   let home = await this.$axios.get(`${process.env.API_URL}/home?populate=*`)
   let services = await this.$axios.get(`${process.env.API_URL}/services?populate=*`)
   let reviews = await this.$axios.get(`${process.env.API_URL}/reviews?populate=*`)

   this.sliderImages = home.data.data.attributes.slider_images.data
   this.services = services.data.data
   this.location.email = home.data.data.attributes.email
   this.location.address = home.data.data.attributes.address
   this.location.instagram = home.data.data.attributes.Instagram
   this.location.phone = home.data.data.attributes.phone_number
   this.reviews = reviews.data.data

   console.log(this.reviews)
   emitter.on('scrollTo', scrollToArea => {
     console.log('scroll')
     let area = this.$el.querySelector(scrollToArea)
     area.scrollIntoView({ behavior: 'smooth' });
   })
  }
}
</script>

<style>
#home {
  height:90vh;
  width: 100%;
}

#services, #reviews {
  background-color: #F5F5F5;
}

.servicesWrapper {
  @media only screen and (min-width:768px) {
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  }
  
}

.location__inner{
    @media only screen and (min-width:768px) {
      display: grid;
      grid-template-columns: 3fr 2fr;
    }
}
</style>
