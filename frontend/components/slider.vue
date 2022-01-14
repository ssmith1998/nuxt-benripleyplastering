<template>
   <VueSlickCarousel class="h-full" :arrows="true" :autoplay="true">
           <template #prevArrow>
      <div class="custom-arrow cursor-pointer">
          <i class="fas fa-arrow-circle-left text-4xl text-black"></i>
      </div>
    </template>
      <div v-for="(item,index) in data" :key="index" class="sliderItem h-full w-full">
        <div :style="`background-image:url('${item.attributes.url}')`" class="h-full w-full sliderItem__image" >
        </div>
      </div>
           <template #nextArrow>
      <div class="custom-arrow cursor-pointer">
          <i class="fas fa-arrow-circle-right text-4xl text-black"></i>
      </div>
    </template>
    </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
props: ['data'],
  components:{VueSlickCarousel},
  methods: {
      buildMediaUrl (url) {
      return process.env.MEDIA_URL + url
    }
  }

}
</script>

<style>
.slick-prev, .slick-next {
position: absolute;
top: 50%;
z-index: 1;
}

.s

.slick-slider{
    height: 100%;
}

.slick-track, .slick-list{
    height:100%;
}

.slick-next i, .slick-prev i {
    color: #252E3C;
}

.slick-next {
    right: 2%;
}

.slick-prev {
    left: 2%;
}

.slick-slide > div{
    height:100%;
}

.sliderItem__image{
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center;
}
</style>