<template>
  <demo-section>
    <demo-block title="禁用">
      <Stepper disabled></Stepper>
    </demo-block>
    <demo-block title="只读">
      <Stepper read-only></Stepper>
    </demo-block>
    <demo-block title="最小值1，最大值8">
      <div>数量：{{value}}</div>
      <div>
        <Stepper
          v-model="value"
          min="1"
          max="18"
          @add="add"
          @reduce="reduce"
          @blur="blur"
          :isInteger="true"
        ></Stepper>
      </div>
    </demo-block>
    <demo-block title="步进2, 只允许输入整数">
      <div>数量：{{value2}}</div>
      <div>
        <Stepper v-model="value2" :step="2" :min='2' is-integer></Stepper>
      </div>
    </demo-block>
    <demo-block title="最小值4大于默认值">
      <Stepper :min="1"  max="9" :replaceFlg="false"></Stepper>
    </demo-block>
    <demo-block title="步进0.1">
      <Stepper :step="0.1"></Stepper>
    </demo-block>
    <demo-block title="百分比">
      <Stepper
        :default-value="50"
        is-integer
        :percentage="true"
        @add="add"
        @reduce="reduce"
        @blur="blur"
      ></Stepper>
    </demo-block>
  </demo-section>
</template>
<script>
// 引入组件(下面的引入只是示例)
import Stepper from '../index';
export default {
  // 更改name中的demo名称
  name: 'bcm-stepper',
  components: {
    Stepper
  },
  methods: {
    add(value) {
      console.log('加：' + value);
    },
    reduce(value) {
      console.log('减：' + value);
    },
    blur(value) {
      console.log('光标离开：' + value);
    }
  },
  data() {
    return {
      value: 1,
      value2: 2
    };
  }
};
</script>
<style lang='less'>
// 公共样式引入
// @import '~@public/less/public.less';
</style>