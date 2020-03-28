<template>
  <demo-section>
    <demo-block title="禁用">
      <stepper disabled />
    </demo-block>
    <demo-block title="只读">
      <stepper read-only />
    </demo-block>
    <demo-block title="最小值1，最大值8">
      <div>数量：{{ value }}</div>
      <div>
        <stepper
          v-model="value"
          min="1"
          max="18"
          @add="add"
          @reduce="reduce"
          @blur="blur"
          :is-integer="true"
        />
      </div>
    </demo-block>
    <demo-block title="步进2, 只允许输入整数">
      <div>数量：{{ value2 }}</div>
      <div>
        <stepper v-model="value2" :step="2" :min="2" is-integer />
      </div>
    </demo-block>
    <demo-block title="最小值4大于默认值">
      <stepper :min="4" max="9" :replace-flg="false" />
    </demo-block>
    <demo-block title="步进0.1">
      <stepper :step="0.1" />
    </demo-block>
    <demo-block title="百分比">
      <stepper
        :default-value="50"
        is-integer
        :percentage="true"
        @add="add"
        @reduce="reduce"
        @blur="blur"
      />
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
    Stepper,
  },
  data() {
    return {
      value: 1,
      value2: 2,
    };
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
    },
  },
};
</script>
<style lang='less'>
.body {
  background-color: #FFFFFF;
}
</style>
