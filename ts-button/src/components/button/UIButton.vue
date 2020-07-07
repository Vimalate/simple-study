<!--
 * @Author: Vimalakirti
 * @Date: 2020-07-07 14:26:05
 * @LastEditTime: 2020-07-07 16:26:07
 * @Description: 
 * @FilePath: \简单实现\ts-button\src\components\button\UIbutton.vue
--> 
<template>
  <div>
    <button class="ui_btn" @click="onClickBtn"
     :class="{'ui-btn-large':large,'ui-btn-xsmall':large,'ui-btn-small':large,'ui-btn-xlarge':large}">
      <slot>Button</slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class UIButton extends Vue {
  @Prop(Boolean) private xsmall: boolean | undefined;
  @Prop(Boolean) private small: boolean | undefined;
  @Prop(Boolean) private large: boolean | undefined;
  @Prop(Boolean) private xlarge: boolean | undefined;

  @Emit("click") private emitClickEvent(event: MouseEvent) {}

  private mounted() {
    console.log(this.large);
  }

  private onClickBtn(event: MouseEvent) {
    this.emitClickEvent(event);
  }
}
</script>

<style lang="scss" scoped>
.ui_btn {
  min-width: 64px;
  height: 36px;
  padding: 0 16px;
  border: 0 solid black;
  border-radius: 4px;
  background-color: #2d8cf0;
  color: #17233d;
  outline: none;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.09rem;
  cursor: pointer;
  user-select: none;
}
.ui-btn-large{
  min-width: 78px;
  height: 44px;
  padding: 0 19px;
  font-size: 0.875rem;
}
.ui-btn-xsmall{
  min-width:  36px;
  height: 20px;
  padding: 0 9px;
  font-size: 0.625rem;
}
.ui-btn-small{
  min-width: 50px;
  height: 28px;
  padding: 0 12px;
  font-size: 0.75rem;
}
.ui-btn-xlarge{
  min-width: 92px;
  height: 52px;
  padding: 0 23px;
  font-size: 1rem;
}
</style>
