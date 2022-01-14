<template>
   <VueSlickCarousel class="h-full" v-bind="settings">
      <div v-for="(item,index) in data" :key="index" class="sliderItem h-full w-full p-4">
        <img :src="item.attributes.review_image.data.attributes.url" alt="" class="h-full">
      </div>
    <template #customPaging="page">
      <div class="custom-dot cursor-pointer">
        {{page + 1}}
      </div>
    </template>
    </VueSlickCarousel>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  
  
export default {
  data() {
    return {
      settings: {
    arrows:false,
    dots:true, 
    autoplay:true,
    slidesToShow:2,
 responsive: [
{
      "breakpoint": 600,
      "settings": {
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "initialSlide": 1
      }
    },
 ]
      }
    }
  },
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

.slick-dots {
  display: flex!important;;
    align-items: center;
    justify-content: center;
}

.slick-dots > li {
  padding: 0px 10px 0px 10px;
}

.custom-dot {
      padding: 0px;
    background-color: #252E3C;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>