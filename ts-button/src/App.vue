<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-07 14:21:33
 * @LastEditTime: 2020-07-07 14:36:08
 * @Description: 
 * @FilePath: \简单实现\ts-button\src\App.vue
--> 
<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from '@/Home.vue'

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
