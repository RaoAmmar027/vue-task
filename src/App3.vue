<script>
export default {

//// this was the option APIS method

  data(){
    return {
      name:"Rao Ammar Qasim",
      status:"active",
      tasks:['Task One','Task Two','Task Three'],
      link:'https://chatgpt.com/c/671b2c60-ba64-8001-ae70-37e102291f63'
    }
  },
  methods:{
    toggleStatus(){
      if(this.status === 'active'){
        this.status = 'pending'
      }else if(this.status === 'pending'){
        this.status = 'Inactive'
      }else{
        this.status = 'active'
      }
    }
  }
}
</script>

<template>
 <h1>

  {{name}}
</h1>
<p v-if="status === 'true'">User is Active</p>
<p v-else-if="status === 'pending'">User is pending</p>
<p v-else>User is Inactive</p>
<h3>
  <ul>
    <!-- this is a for in loop (v-for) -->
    <li v-for="task in tasks" :key="task">
{{ task }}
    </li>
  </ul>
</h3>
<!-- this is bind in vue which connect the link  -->
 <p>  <a v-bind:href="link">Long Way of Bind Directive</a></p>

<a :href="link">Short Hand Porperty of Bind</a>

<!-- events directives in vue -->
<!-- <button v-on:click="toggleStatus"> -->
<button @click="toggleStatus"> <!-- short way --> 

  Change Status
</button>




</template>


<style>
h1{
  color:red;
}
</style>




<!-- 

conditionals directives of vue 
v-if
v-else
v-else-if 


-->