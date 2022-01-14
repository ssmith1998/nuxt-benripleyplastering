<template>
  <header class="flex justify-between items-center px-10">
      <a href="/"> <h2 class="py-10 font-bold sm:text-3xl text-white cursor-pointer">Ben Ripley Plastering</h2></a>

      <nav>
          <ul class="flex items-center hidden lg:flex">
             <li @click="onScrollTo('#services')" class="px-5 text-white cursor-pointer">Services</li>
             <li @click="onScrollTo('#location')" class="px-5 text-white cursor-pointer">Location</li>
              <li @click="onScrollTo('#reviews')" class="px-5 text-white cursor-pointer">Reviews</li>
             <a :href="`mailto:${email}`"> <button class="bg-white text-black p-2 rounded mx-5">Get a Quote</button></a>
          </ul>
      </nav>
      <div class="mobileIcon lg:hidden">
          <i @click="onOpenMenu()" class="fas fa-bars text-white text-3xl cursor-pointer"></i>
      </div>
  </header>
</template>

<script>
import {emitter} from '../services/emitter'
export default {
    data() {
        return {
            email:''
        }
    },
methods: {
    onScrollTo(scrollToArea) {
        console.log('hello')
       emitter.emit('scrollTo',scrollToArea)
    },
    onOpenMenu() {
        console.log('hello')
        this.$emit('openMenu')
    }
},
async mounted() {
       let home = await this.$axios.get(`${process.env.API_URL}/home?populate=*`)
        this.email = home.data.data.attributes.email
}
}
</script>

<style>
header{
    background-color: #252E3C;
    position: fixed;
    width: 100%;
    z-index: 200;
}

.mobileIcon, .mobileIcon > i {
    z-index: 103;
}

</style>