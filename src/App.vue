<template>
  <div id="nav" class="bg-orange w-auto h-1/2 mx-auto flex flex-row item-center  ">
    <ul class="text-white">
      <li class=" px-16 py-3 font-normal text-3xl">
        <span><b>Nyanko Cafe</b></span>
      </li>
    </ul>
    <div class=" flex-grow">

    </div>
    <ul class="my-auto mr-20 flex flex-row item-end justify-center h-full text-white text-sm">

      <li class="px-3 py-3 ">
        <router-link to="/"> <span><b>Home</b></span>
        </router-link>
      </li>
      <li class="pl-3 px-3 py-3">
      <router-link to="/product"> 
        <span><b>Product</b></span></router-link>
      </li>
      <li class="pl-3 px-3 py-3">
      <router-link to="/about"> 
        <span><b>About</b></span></router-link>
      </li>
    </ul>

  </div>
  <router-view />
</template>