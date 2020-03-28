<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-stepper v-model="stepper1" />
    </demo-block>

    <demo-block :title="step">
      <van-stepper v-model="stepper2" step="2" />
    </demo-block>

    <demo-block :title="range">
      <van-stepper v-model="stepper3" :min="5" :max="8" />
    </demo-block>

    <demo-block :title="integer">
      <van-stepper v-model="stepper4" integer />
    </demo-block>

    <demo-block :title="disabled">
      <van-stepper v-model="stepper5" disabled />
    </demo-block>

    <demo-block :title="disableInput">
      <van-stepper v-model="disabledInput" disable-input />
    </demo-block>

    <demo-block :title="decimalLength">
      <van-stepper v-model="stepper8" :decimal-length="1" step="0.2" />
    </demo-block>

    <demo-block :title="customSize">
      <van-stepper v-model="stepper7" button-size="32px" input-width="40px" />
    </demo-block>

    <demo-block :title="asyncChange">
      <van-stepper :value="stepper6" async-change @change="onChange" />
    </demo-block>
  </demo-section>
</template>

<script>

import VanStepper from '../index';

export default {

  components: {
    VanStepper,
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
      stepper8: 1,
      disabledInput: 1,
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
      disabled: '禁用状态',
      basicUsage: '基础用法',
      asyncChange: '异步变更',
      customSize: '自定义大小',
      disableInput: '禁用输入框',
      decimalLength: '固定小数位数',
    };
  },

  methods: {
    onChange(value) {
      this.$toast.loading({ forbidClick: true });

      setTimeout(() => {
        this.stepper6 = value;
        this.$toast.clear();
      }, 500);
    },
  },
};
</script>
