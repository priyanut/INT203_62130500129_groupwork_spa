<template>
<div v-if="adding||editing">
<base-add-product @edit-cancle="offonadd" @add-submit="add" @edit-submit="edit"  :editeach="editeach" :editing="editing" /></div>
  <div class="bg-orange flex flex-wrap justify-center ml-auto md:flex-no-wrap md:justify-end pb-5">
    <input
      class="w-1/4 px-4 py-2 mr-2 text-base text-koko bg-white border-transparent rounded-lg focus:border-yellow-500 focus:bg-white focus:ring-0 lg:w-1/2 xl:w-1/3 "
      placeholder="Please enter text for searching photos." type="text" v-model="inputSearch" @keyup="searching">
    <button
      class="inline-flex mr-28 px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-yellow-600 hover:from-yellow-700 to-yellow-700 hover:to-yellow-600 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none"
      @click="startSearch">
      Cancel
    </button>
  </div>
  <div class="bg-orange bg-opacity-20 h-full">
  <div class="flex ">
    <p class="w-1/2 font-base text-5xl tracking-wider  pl-20 pt-11 text-koko font-black ">
      Exclusive!!!!
    </p>
<div class="flex flex-grow"></div>
    <button
      class="inline-flex mr-28 my-8 px-4 py-2 font-semibold text-white transition duration-500 ease-in-out transform rounded-lg shadow-xl bg-gradient-to-r from-yellow-600 hover:from-yellow-700 to-yellow-700 hover:to-yellow-600 hover:-translate-y-1 hover:scale-110 focus:ring focus:outline-none"
      @click="offonadd(true)">
      + Add Product
    </button>
    </div>

  <div class="flex flex-row flex-wrap">
    <div v-for="p in product" :key="p.id">
      <piece :product="p" @product-delete="deletepro" @product-edit="editpro" />
    </div>

 </div>

  </div>
</template>


<script>
  // @ is an alias to /src
  import Piece from '@/components/Piece.vue'

  export default {
    name: 'Product',
    components: {
      Piece
    },
    data() {
      return {
        product: [],
        url:"http://localhost:5555/product",
        adding: false,
        editing: false,
        editeach:[],
      }
    },
    methods: {
      editpro(each){
      this.editing= true
      this.editeach=each
      },
      offonadd(showing){
        this.adding= showing
        this.editeach=[]
        if(!showing){
          this.editing= false
        }

      },
      async fetch() {
            try {
                const res = await fetch(this.url);
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        },
        async add(pro) {
            try {
                const res = await fetch(this.url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
            Name: pro.Name,
            image: pro.image,
            type: pro.type,
            Price: pro.Price,
            sum: pro.sum,
            condition: pro.condition,
            pricedeli: pro.pricedeli,
                    })
                })
                const data = await res.json()
                this.product = [...this.product, data]
            } catch (error) {
                console.log(error)
            }
        },
        async edit(pro) {
            try {
                const res = await fetch(`${this.url}/${pro.id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
            Name: pro.Name,
            image: pro.image,
            type: pro.type,
            Price: pro.Price,
            sum: pro.sum,
            condition: pro.condition,
            pricedeli: pro.pricedeli,
                    })
                })
                const data = await res.json()
                this.product = this.product.map((i) =>
                    i.id === data.id
                        ? {
                            ...i,
            Name: data.Name,
            image: data.image,
            type: data.type,
            Price: data.Price,
            sum: data.sum,
            condition: data.condition,
            pricedeli: data.pricedeli,
                        }
                        : i
                )
            } catch (error) {
                console.log(error)
            }
        },
      async deletepro(pro) {
            try {
                await fetch(`${this.url}/${pro.id}`, {
                    method: 'DELETE'})
                this.product = this.product.filter((i) => i.id !== pro.id)
            } catch (error) {
                console.log(error)
            }
        },
    },
    async created() {
        this.product = await this.fetch()
    },
  }
</script>