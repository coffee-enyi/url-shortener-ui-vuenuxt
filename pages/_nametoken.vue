<template>
  <div>
    <div class="msg-line br">In</div>
    <div class="time-line br">{{ timercount }} <span class="second">seconds</span></div>
    <div class="msg-line br">you will be <span class="bold600">redirected to</span></div>
    <div class="destination-box br">{{ redirecturl }}</div>
    <div v-if="visitscount">
       See <NuxtLink to="/stats">visits history</NuxtLink> for this url
    </div>
  </div>
</template>

<script>
 import axios from 'axios'
 import { REQUEST_URL } from '../constants.js'
  
 export default {

 async fetch({params, redirect, store}) {

      const tokenName = params.nametoken;
      
      await axios.get(`${REQUEST_URL}/${tokenName}`)
        .then( response => {
          if(response.data === 'not_found') redirect('/')
          
          store.dispatch('updateurl', response.data.full_url) 
          store.dispatch('updatevisits', response.data.visit_count)
        })
        .catch( error => {
           alert('Error! Could not reach the API: ' + error)
        });
        
        if(store.state.redirecturl === 'not_found'){
           redirect('/')
        }

      store.dispatch('updatetokenname', tokenName);
    },

    computed: {
      timercount()
      { 
        return this.$store.state.basetimecount;
      },
      redirecturl()
      {
        return this.$store.state.redirecturl;
      },
      visitscount()
      {
        return this.$store.state.visitscount
      }
    },

    watch: {
      
      timercount: {

      async handler(value) 
          {
             if (value > 1) {
                  setTimeout(() => {
                     this.$store.dispatch('reducetime')
                  }, 1000);
              }
              else{

                await axios.post(REQUEST_URL + '/redirected',{
                  nametoken: this.$store.state.tokenname
                })
                .then(  )
                .catch( function (error) {
                  alert('Error! Could not reach the API. ' + error);
                });

                  location.href = this.$store.state.redirecturl;
              }
          },

          immediate: true
      },

    },

    
    
  }
</script>

<style scoped>
.br{
	background: 1px solid red;
}
.page-box{
  border: 1px solid #777;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 45px;
  border-radius: 4px;
}

.msg-line{
  font-size: 0.8rem;
}

.bold600{
  font-weight: 600;
  font-size: 1rem;
}

.destination-box{
  background-color: burlywood;
  border-radius: 10px;
  margin: 15px;
  padding: 15px;
  word-break: break-all;
  font-size: 1.2rem;
  font-weight: 600;
  color: blue;
}

.time-line{
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: red;
}

.second{
  color: black;
}
</style>