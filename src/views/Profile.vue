<template>
  <div>

    <br />

    Add 1 :<button @click="increase">+1</button> <br />
    Minus 1 :<button @click="decrease">-1</button> <br />
    <br />
    Add 5 :<button @click="increase">+5</button> <br />
    Minus 5 :<button @click="decrease">-5</button> <br />

    <h2>{{ counter }}</h2>

    Name: <input type="text" v-model="name" /> <br />
    Address: <input type="text" v-model="address" /> <br />
    Tel : <input type="text" v-model="tel" /> <br />
    email : <input type="text" v-model="email" /> <br />

    <img v-bind:src="filename" /> <br />
    <img :src="image1" /> <br />
    <img :src="image2" /> <br />

    <hr />
    Name: {{ name }} <br />
    Addr: {{ address }}<br />
    Tel : {{ tel }} <br />
    Email: {{ email }} <br />  
    
  </div>

</template>

<script>
export default {
  data() {
    return {
      name: "",
      address: "",
      tel: "",
      email: "",
      filename: "logo.png",
      image1: "apple.jpg",
      image2: "orange.jpg",
      counter: 0,
    };
  },
  components: {},
  methods: {
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    },
  },
};
</script>

<style>

</style>
