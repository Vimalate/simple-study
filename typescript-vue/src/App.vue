<!--
 * @Author: Vimalakirti
 * @Date: 2020-06-12 21:36:27
 * @LastEditTime: 2020-06-12 23:15:57
 * @Description: 
 * @FilePath: \简单实现\typescript-vue\src\App.vue
--> 
<template>
  <div id="app">
   <menu-bar></menu-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from './components/MenuBar.vue'
@Component({
  components: {
    MenuBar
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
