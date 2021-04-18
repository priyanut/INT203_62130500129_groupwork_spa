<template>
<div class="flex flex-row pb-20 ">

<img :src="require(`../assets/${news.image}`)" class="w-5/12 h-auto ml-40 shadow-lg  p-1 md:p-2 shadow-2xl rounded-lg bg-orange bg-opacity-30 "> 
<div class="ml-20 ontainer flex flex-col justify-center  ">
<div class="text-3xl">
{{ news.title }}
</div>
<div class="text-base mr-36">
{{ news.description }}
</div>
</div>

</div>
</template>

<script>
export default {
  name: 'News',
  props: {
    news: Array
  }
}
</script>

