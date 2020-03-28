<template>
  <div class="demo-div">
    <demo-section>
      <demo-block :title="basicUsage">
        <com-stepper-input v-model="stepper1" />
      </demo-block>
    </demo-section>
  </div>
</template>

<script>

import ComStepperInput from '../index';

export default {

  components: {
    ComStepperInput,
  },

  data() {
    return {
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      disabledInput: 1,
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
      disabled: '禁用状态',
      basicUsage: '基础用法',
      customSize: '自定义大小',
      disableInput: '禁用输入框',
      decimalLength: '固定小数位数',
    };
  },
};
</script>
<style lang='less'>
.demo-div {
  background-color: #FFFFFF;
}
</style>
