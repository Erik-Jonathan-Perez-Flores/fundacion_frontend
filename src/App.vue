<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>
<script>
  import layoutinicio from './components/layout/layoutinicio.vue'
  import layoutpracticas from './components/layout/layoutpracticas.vue'
  import layoutcontent from './components/layout/layoutcontent.vue'
  import {mapState} from 'vuex'
  export default{
    components:{
      'login-layout':layoutinicio,
      'principal-layout':layoutpracticas,
      'layout-content':layoutcontent
    },
    computed: mapState(['layout'])
  }
</script>
<style>
  
</style>