<template>
  <div>
		<b-table striped :items="items" :fields="fields"></b-table>

		<nav aria-label="Page navigation">
			<ul class="pagination">
				<li  v-for="(item, index) in paginatorlinks" :key="index" class="page-item" :class="{ active: item.active }">
					<a class="page-link" href="#" 
							@click.prevent="getpage( item.url ? item.url.split('=')[1] :1 )" 
							v-html="item.label"
					></a>
				</li>
			</ul>
		</nav>
  </div>
</template>

<script>
  import axios from 'axios'
  import { REQUEST_URL } from '../constants.js'
  
  export default {

		data(){
      return {
        fields: ['ip_address', 'visit_time'],
        items: [],
				paginatorlinks: '',
        errormsg: ''
      }
    },

		fetch(){
			 axios.get(`${REQUEST_URL}/stats/${this.tokenname}?page=1`)
        .then( response => { 
          // if(response.data.error){ alert('Record not found'); }
          this.items = response.data.data;
					this.paginatorlinks = response.data.links;
        })
        .catch( error => {
           this.shortenedurl = 'Error! Could not reach the API. ' + error
        })
		},

    computed: {
      tokenname(){ 
        return this.$store.state.tokenname || "nothing";
      }
    },

    methods: {
      getpage(id){
        
        axios.get(`${REQUEST_URL}/stats/${this.tokenname}?page=${id}`)
        .then( response => {
          this.items = response.data.data;
					this.paginatorlinks = response.data.links;
        })
        .catch( error => {
           this.shortenedurl = 'Error! Could not reach the API. ' + error
        })

      },

    }

  }
</script>

<style scoped>
  .table{
	  border: 1px solid #dee2e6;
  }
</style>