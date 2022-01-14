<template>
<div class="wrapper">
    <headerMain @openMenu="onOpenMenu"/>
    <Nuxt />
    <div :class="menu ? 'mobileMenu menuactive flex items-center justify-center' : 'mobileMenu flex items-center justify-center'">
          <ul class="flex items-center flex-col">
             <li @click="onScrollTo('#services')" class="py-5 text-white cursor-pointer text-2xl">Services</li>
             <li @click="onScrollTo('#location')" class="py-5 text-white cursor-pointer text-2xl">Location</li>
              <li @click="onScrollTo('#reviews')" class="py-5 text-white cursor-pointer text-2xl">Reviews</li>
             <a :href="`mailto:${email}`"> <button class="bg-white text-black p-2 rounded my-5">Get a Quote</button></a>
          </ul>
    </div>
</div>
</template>

<script>
import {emitter} from "../services/emitter"
import headerMain from '../components/headerMain.vue'
export default {
    data () {
        return {
            menu: false,
            email: ''
        }
    },
    components:{ headerMain },
    methods: {
        onOpenMenu () {
            console.log('hi')
            this.menu = !this.menu
        },
        onScrollTo(scrollToArea) {
        this.menu = !this.menu
       emitter.emit('scrollTo',scrollToArea)
    },
    },
    async mounted() {
       let home = await this.$axios.get(`${process.env.API_URL}/home?populate=*`)
        this.email = home.data.data.attributes.email
}
}
</script>

<style scoped>
.mobileMenu {
width: 100%;
position: fixed;
background-color: #252E3C;
opacity: 0;
height: 100vh;
z-index: -1;
top: 0px;
transition: 0.5s;
}
.menuactive {
    opacity: 1 !important;
    z-index: 101;
}
</style>
