<template>
  <div class="home">
    <div class="w-full items-center justify-end bgimg bg-local">
      <p class="font-base text-3xl tracking-wider  px-36 pt-28 h-16 text-orange">Nyan nyan Update!</p>
      <p class="font-base text-7xl tracking-wider  px-36 pt-11 h-40 text-orange   ">
        Little act of love
      </p>
      <div class="h-24 ml-32">
        <router-link to="/product">
          <button
            class="font-normal text-xs font-light tracking-wider uppercase px-16 bg-orange hover:bg-red-300 h-10 rounded-sm ">
            shop now
          </button>
        </router-link>
      </div>
    </div>

    <div class="bg-orange bg-opacity-20 h-full">
      <p class="font-base text-5xl tracking-wider  pl-20 pt-11 h-40 text-koko font-black ">
        News!!!!
      </p>
      <div v-for="n in news" :key="n.id">
        <News :news="n" />
      </div>
    </div>
  </div>

</template>
<style>
  .bgimg {
    background-image: url("../assets/bg1.jpg")
  }
</style>
<script>
  // @ is an alias to /src
  import News from '@/components/News.vue'

  export default {
    name: 'Home',
    components: {
      News
    },
    data() {
      return {
        news: [{
            title: " New!! Menu",
            image: "menu4.jpg",
            description: "พบกับเมนูใหม่ๆของทางร้าน ที่คุณจะต้องตื่นตาตื่นใจมากกว่า 5 เมนู คุณจะต้องหลงไหลกับความมีเสน่ห์ของอาจารย์เหมียวที่สุดจะเซ็กซี่ ด้วยราคาที่น่ารัก รับประกันประสบการณ์ที่คุณจะได้รับจากอาหารเเต่ละจานว่ามันจะต้องเต็มไปด้วยความสุข ของเหล่าสาวก",
            id:1,
          },
          {
            title: " Exclusive Gift",
            image: "shop1.jpg",
            description: " Friendly price ",
            id:2,
          }]
      }
    }
  }
</script>