<template>
<div class="user">
    <nav-bar/>
    <router-view></router-view>
</div>
</template>
<script>
import NavBar from '../../components/NavBar.vue'
export default {
  components: { NavBar },
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style>

</style>
