<template>
  <div class="master">
    <v-header></v-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "@/components/Header.vue";
import vFooter from "@/components/Footer.vue";
export default {
  name: "Master",
  components: {
    vHeader,
    vFooter
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .content{
       width: 100%;
    background: #f5f5f5;
 }
</style>
