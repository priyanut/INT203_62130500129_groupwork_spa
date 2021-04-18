<template>
    <div class="flex  justify-center items-center fixed z-10 inset-0 overflow-y-auto">
   
        <div class="w-auto h-96 bg-orange  rounded-3xl shadow-lg flex flex-row  ">
        
      <div class="flex flex-col w-2/6 m-10  p-1 md:p-2 shadow-2xl rounded-lg bg-white bg-opacity-80 ">

            <img :src="pro.image" class="m-auto h-56 w-auto">
            <input
                                type="file"
                                class="focus:outline-none"
                                @change="uploadImg"
                            />
           </div>
            <div class="w-3/4 container flex flex-col mt-10 text-koko  ">
<div class="text-3xl flex flex-row "> <label class="w-max"> ชื่อสินค้า: </label> <input v-model.trim="pro.Name" class="flex-grow mr-4 ml-2 rounded-lg shadow-xl "> </div>
<div class="text-lg  mt-5 flex flex-row"> <label>หมวดหมู่: </label><input v-model.trim="pro.type" class="flex-grow mr-4 ml-2 rounded-lg shadow-xl">  </div>
<div class="text-lg mt-2 flex flex-row"> <label>ราคา:</label><input v-model.trim="pro.Price" type="number" class="flex-grow mr-4 ml-2 rounded-lg shadow-xl">  </div>
<div class="text-lg  mt-2 flex flex-row"> <label>จำนวนที่มี:</label><input v-model.trim="pro.sum" type="number" class="flex-grow mr-4 ml-2 rounded-lg shadow-xl">  </div>
<div class="text-lg mt-2 flex flex-row"> <label>สภาพสินค้า:</label><input v-model.trim="pro.condition" class="flex-grow mr-4 ml-2 rounded-lg shadow-xl">   </div>
<div class="text-lg  mt-2 flex flex-row"> <label>ค่าจัดส่ง:</label><input v-model.trim="pro.pricedeli" type="number" class="flex-grow mr-4 ml-2 rounded-lg shadow-xl">  </div>
<div class="flex flex-row justify-center mt-5  ">
                <button @click = "submit"
                  class="border-2 border-orange font-normal text-2xl tracking-wider uppercase px-7 bg-white hover:bg-yell h-10 rounded-lg ">
                  submit
                </button>
                <button @click = "cancle"
                  class="border-2 border-orange font-normal text-2xl tracking-wider uppercase px-7 bg-white hover:bg-yell h-10 rounded-lg ">
                  cancle
                </button>
</div>
</div>
        </div>
    </div>
</template>
<script>
export default {
    props: [ "editeach","editing"],
    emits: ["edit-cancle","add-submit"],
    data() {
        return { 
          pro:
            {Name: this.editeach.Name,
            image: this.editeach.image ? this.editeach.image : require(`../assets/addimg.png`),
            type: this.editeach.type,
            Price: this.editeach.Price,
            sum: this.editeach.sum,
            condition: this.editeach.condition,
            pricedeli: this.editeach.pricedeli,
            id: this.editeach.id,
            }
        };
    },
    methods: {
 cancle(){
      this.$emit("edit-cancle", false);
    },
    submit(){
      if (this.editing){
        console.log(this.editing.id);
      this.$emit("edit-submit", this.pro);
      }else{
      this.$emit("add-submit", this.pro);  
      }
      this.cancle();
    },
            uploadImg(event) {
            const file = event.target.files[0]
            const reader = new FileReader()
            reader.onload = (event) => {
                this.pro.image = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    }

}
</script>