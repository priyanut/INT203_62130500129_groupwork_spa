<template>

<div class="flex flex-col pb-5">
<img :src="product.image" class="h-64 w-auto m-10 shadow-lg  p-1 md:p-2 shadow-2xl rounded-lg bg-orange bg-opacity-30 "> 
<div class=" container flex flex-col text-center  ">
<div class="text-3xl"> {{ product.Name }} </div>
<div class="text-base "> Type: {{ product.type }} </div>
<div class="text-base "> {{ product.Price }} </div>
<div class="flex justify-center my-3">
                <button  @click="edit"
                  class="mx-1 text-white text-sm font-bold tracking-wider uppercase px-7 shadow-xl bg-gradient-to-r from-green-400 hover:from-green-800 to-green-800 hover:to-green-400 bg-opacity-0 hover:bg-yell h-10 rounded-lg ">
                  Edit
                </button>
                <button @click="deletepro"
                  class=" text-white text-sm font-bold tracking-wider uppercase px-7 bg-gradient-to-r from-red-400 hover:from-red-800 to-red-800 hover:to-red-400 bg-opacity-0 hover:bg-yell h-10 rounded-lg ">
                  DELETE
                </button>
              </div>
</div>

</div>


</template>

<script>
export default {
  name: 'Piece',
  props: {
    product: Array
  },
  emits: ["product-edit","product-delete"],
  methods:{
    deletepro(){
      this.$emit("product-delete", this.product);
    },
 edit(){
      this.$emit("product-edit", this.product);
    }
  }

}
</script>

