<template>
  <div>
    <form>
      <div class="form-group">
        <label for="newentrytextarea">{{ label }}</label>
        <textarea id="newentrytextarea" class="form-control" v-model="enteredurl" placeholder="Paste or write url here . . ." rows="3"></textarea>
      </div>
      <small id="passwordHelpBlock" class="form-text text-muted error-text">{{ errormsg }}</small>
      <button type="button" class="btn btn-primary" @click.prevent="sendurl">Submit</button>
    </form>
  </div>
</template>

<script>
 import axios from 'axios'
 import { REQUEST_URL } from '../constants.js'
  
 export default {
    props: {'label': String},

    data() {
      return {
        enteredurl: '',
        errormsg: ''
      }
    },

    methods: {
      
      
      sendurl(){

        const enteredurl = this.enteredurl.trim();

        if( ! enteredurl.length ){
          this.errormsg = 'Please enter something...';
          return;
        }

        if( ! this.validURL(enteredurl)){
          this.errormsg = 'You may need to correct something';
          return;
        }
        this.errormsg = '';

        axios.post(REQUEST_URL + '/shorten-now',{
          enteredurl: this.enteredurl
        })
        .then( response => {
          this.$store.dispatch('saveshortenedurl', response.data.shortenedurl);
        } )
        .catch( function (error) {
          console.log(error);
        });

        this.$store.dispatch('saveenteredurl', this.enteredurl);

      },

      validURL(str) {
        const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
      }
    }
        
  }
</script>

<style scoped>
.error-text{
  color:red !important;
  margin-top: -15px;
  margin-bottom: -15px;
} 

.btn{
  margin-top: 30px;
}
</style>