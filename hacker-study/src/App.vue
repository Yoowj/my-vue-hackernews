<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content class="my-content">

      <router-view></router-view>
      <v-progress-circular
        class="main-progress-bar"
        :size="50"
        color="primary"
        indeterminate
        v-if="loading"
      ></v-progress-circular>
      
    </v-content>
  </v-app>
  
</template>

<script>
import bus from './bus/bus.js'
export default {
  
  name: 'App',
  data() {
    return {
      loading:false
    }
  },
  components: {
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner)
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner)
    // 이벤트 버스같은 경우에는 off를 꼭 해줘야한다.
  },
   methods: {
    startSpinner() {
      console.log('start');
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    }
  },
}
</script>

<style lang="stylus">
  .my-content
    position relative
  .main-progress-bar
    position absolute 
    // left 50%
    // top 50%
    // transform translateX(-50%)
    // transform translateY(-50%)
    width: 64px;
    height: 64px;
    top: 47%;
    left: 47%;
  
  a
    text-decoration: none
    color: #000
    
    &:hover 
      color: #42b883
      text-decoration: underline
    
    &.router-link-exact-active 
      text-decoration: underline;
    

</style>

