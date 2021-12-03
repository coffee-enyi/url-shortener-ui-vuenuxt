<template>
  <div id="page-box">
    <div>URL to shorten</div>
    <b-form-input v-model="enteredurl" placeholder="Enter your name"></b-form-input>
    <div>{{ shortenedurl }}</div>
    <b-button @click="submiturl">Submit</b-button>

    <hr />

    <div v-if="shortenedurl">
      <div>You may shorten another</div>
      <b-form-input v-model="shortenedurl" placeholder="Enter your name"></b-form-input>
      <b-button @click="sendurl">Submit</b-button>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import { REQUEST_URL } from '../constants.js'
  
  export default {

    data(){
      return {
        enteredurl: '',
        shortenedurl: ''
      }
    },

    methods: {
      submiturl(){
        this.shortenedurl = this.enteredurl;
      },

      sendurl(){
        axios.get(REQUEST_URL + '/stats')
        .then( response => {
          this.shortenedurl = response.data
        })
        .catch( error => {
           this.shortenedurl = 'Error! Could not reach the API. ' + error
        })
      }

    }
        
  }
</script>

<style scoped>

#page-box{
  text-align: center;
  padding-top: 60px;
}

</style>