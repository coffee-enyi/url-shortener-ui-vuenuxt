<template>
<div class="text-center">
  <StatsTable />
  <NuxtLink :to="tokennameurl">Return</NuxtLink> to redirecting
</div>
</template>

<script>
export default {

    fetch({store, redirect}) {

      if( ! store.state.tokenname.length ) redirect('/')
      
    },

    computed: {
      tokennameurl()
      { 
        const tokenName = this.$store.state.tokenname || 'not_found';
        
        return `/${tokenName}`;
      } 
    },

}
</script>
