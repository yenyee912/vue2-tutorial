<template>
<div>
  <h1>This is the homepage.</h1>
  Iterate an array : {{fruits}}
  <p v-for="fruit in fruits" :key="fruit">{{fruit}}</p>

  <hr />

  <p v-for="(fruit,index) in fruits" :key="fruit" :index="index">{{parseInt(index)+1}} - {{fruit}}</p>
 
  <hr />

  Iterate an object: {{apple}}
  <p v-for="(value, name) in apple" :key="value" >{{name}}: {{value}}</p>
  
  <hr />
  
  Iterate an object array
  <!-- <div v-for="prod in products" :key="prod.name">
    Product Name: {{prod.name}} <br />
    Price: MYR {{prod.price}}<br />

    =============


  </div> -->

  <div>
    <div v-for="prod in products" :key="prod.name" style="border: 1px solid green">
      {{prod}}
      <h1>{{prod.name}}</h1>
      <p>RM {{prod.price}}</p>
      <h2 style="color: purple">{{prod.quantity}} pcs</h2>

      <!-- // image, stock -->
      Image Src:  {{prod.image}}

      <!-- <img src="apple.jpg"> -->

      <img v-bind:src="prod.image">
      <p>Stock Left: {{prod.stock}} pcs</p>

      <a v-bind:href="prod.url" >Click me</a>

    </div>

  </div>
  

  
</div>
  
</template>

<script>
export default {
  data(){
    return{
      fruits: ["apple", "orange", "pear", "durian"],

      apple: {
        name: "Fuji",
        price: "1",
        color: "red"
      },

      // object array
      products: [
        {
          name: "Apple",
          quantity: 0,
          price: 10,
          stock: 0,
          image: "apple.jpg",
          url: "https://www.google.com"
        },
        {
          name: "Orange",
          quantity: 0,
          price: 12,
          stock: 0,
          image: "orange.jpg",
          url: "https://www.facebook.com"

        },
        {
          name: "Strawberry",
          quantity: 0,
          price: 9,
          stock: 0,
          url: "https://www.discord.com"
        },
        {
          name: "Strawberry 2",
          quantity: 0,
          price: 7,
          stock: 0,
          image: "strawberry.jpeg",
        },
        {
          name: "Orange 2",
          quantity: 0,
          price: 13,
          stock: 0,
          image: "orange.jpg",
        },
        {
          name: "Apple 2",
          quantity: 0,
          price: 11,
          stock: 0,
          image: "apple.jpg",
        },
      ],

      
      
    }
  },

  methods:{
    iterateLoop(){
      let arr= [1, 2, 3]

      for (let i=0; i<arr.length; i++){
        console.log(arr[i])
      }

    }
  }

}
</script>

<style>

</style>