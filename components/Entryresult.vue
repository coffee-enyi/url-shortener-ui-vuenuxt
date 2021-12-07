<template>
  <div>
    <div id="usetext">Use</div>
    <div class="shortened-box">{{ shortenedurl }}</div>
    <div>(every time) to go to</div>
    <div v-if="enteredurl" class="destination-box">{{ enteredurl }}</div>
    <hr />
		<Entry label="Enter another URL to shorten" />
  </div>
</template>

<script>
  import { state } from '../store'
  
  export default {
     computed: {

      shortenedurl()
      { 
        return state.shortenedurl || 'something went wrong'; 
      },
      enteredurl()
      {
        return state.enteredurl || false;
      }
    
    },
  }
</script>

<style scoped>
hr{
  margin-top: 60px;
}
#usetext{
  text-align: left;
  margin-left: 20px;
}
.shortened-box{
  background-color: burlywood;
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  word-break: break-all;
  font-size: 3.2rem;
  font-weight: 100;
  letter-spacing: 0.32rem;
}
.destination-box{
  color: #999;
  background-color: #ddd;
  padding: 20px 15px;
  border-radius: 5px;
  margin: 15px;
  letter-spacing: 0.08em;
}
</style>