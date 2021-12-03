<template>
<div>
  <template v-if="hasshortenedurl">
    <Entryresult />
  </template>
  <template v-else>
    <Newentry />
  </template>
</div>
</template>

<script>
export default {

  computed: {

    hasshortenedurl()
    { 
      return !! this.$store.state.shortenedurl.length;
    },
  
  }

}
</script>
