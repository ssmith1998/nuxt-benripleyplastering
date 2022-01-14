<template>
  <div class="whatsappBtnWrapper cursor-pointer shadow-lg" @click="onCall">
    <i class="fab fa-whatsapp text-white"></i>
  </div>
</template>

<script>
export default {
name:'whatsapp-btn',
props: ['mobile'],
methods:{
    onCall() {
        location.href = `https://api.whatsapp.com/send?phone=${this.mobile}`
    }
}
}
</script>

<style>
.whatsappBtnWrapper {
    position: fixed;
    right: 2%;
    bottom: 5%;
    background-color: #252E3C;
    border-radius: 50%;
    padding:14px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    border: #252E3C solid 1px;

}

.whatsappBtnWrapper:hover {
    background-color: #ffffff;
    border: #252E3C solid 1px;
}

.whatsappBtnWrapper:hover i {
    color: #252E3C;
}


i{
    font-size:50px;
}
</style>