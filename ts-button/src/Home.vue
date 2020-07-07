<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-07 14:29:59
 * @LastEditTime: 2020-07-07 16:14:06
 * @Description: 
 * @FilePath: \简单实现\ts-button\src\Home.vue
--> 
<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-07 14:26:05
 * @LastEditTime: 2020-07-07 14:29:46
 * @Description: 
 * @FilePath: \简单实现\ts-button\src\components\button\UIbutton.vue
--> 
<template>
  <div class="home">
    <UIButton @click="onClick" large></UIButton>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from "vue-property-decorator";
import UIButton from '@/components/button/UIButton.vue'
  @Component({
  components: {
    UIButton
  }
})
export default class Home  extends Vue {
  private onClick(event:MouseEvent){
    console.log(event)
  } 
}
</script>

<style lang="scss" scoped>
.home{
  width: 480px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>