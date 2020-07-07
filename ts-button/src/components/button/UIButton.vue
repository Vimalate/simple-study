<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-07 14:26:05
 * @LastEditTime: 2020-07-07 15:12:31
 * @Description: 
 * @FilePath: \简单实现\ts-button\src\components\button\UIbutton.vue
--> 
<template>
  <div>
    <button class="ui_btn" @click='onClickBtn'>button</button>
  </div>
</template>

<script lang="ts">
import {Component,Vue,Emit} from "vue-property-decorator"
  @Component({
  components: {
    
  }
})
export default class UIButton  extends Vue {
  @Emit('click') private emitClickEvent(event:MouseEvent){}

  private onClickBtn(event:MouseEvent){
    this.emitClickEvent(event)
  }
}
</script>

<style lang="scss" scoped>
.ui_btn{
  min-width: width 64px;
  height: 36px;
  padding: 0 16px;
  border:0 solid black;
  border-radius:4px;
  background-color: #2D8CF0; 
  color:#17233D; 
  outline:none;
  font-size: 0.875rem;
  font-weight:500;
  letter-spacing: 0.09rem;
  cursor: pointer;
  user-select: none;
}
</style>