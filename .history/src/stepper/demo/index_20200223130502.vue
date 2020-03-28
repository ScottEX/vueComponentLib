<template>
  <demo-section>
    <!-- <van-cell center :title="$t('basicUsage')"> -->
    <!-- <van-stepper v-model="stepper1" /> -->
    <!-- </van-cell> -->
    <demo-block :title="'step'">
      <van-stepper v-model="stepper1" />
    </demo-block>

    <!-- <van-cell center :title="$t('step')"> -->
    <van-stepper v-model="stepper2" step="2" />
    <!-- </van-cell> -->

    <!-- <van-cell center :title="$t('range')"> -->
    <van-stepper v-model="stepper3" :min="5" :max="8" />
    <!-- </van-cell> -->

    <!-- <van-cell center :title="$t('integer')"> -->
    <van-stepper v-model="stepper4" integer />
    <!-- </van-cell> -->

    <!-- <van-cell center :title="$t('disabled')"> -->
    <van-stepper v-model="stepper5" disabled />
    <!-- </van-cell> -->

    <!-- <van-cell center :title="$t('disableInput')"> -->
    <van-stepper v-model="disabledInput" disable-input />
    <!-- </van-cell> -->

    <!-- <van-cell center :title="$t('decimalLength')"> -->
    <van-stepper v-model="stepper8" :decimal-length="1" step="0.2" />
    <!-- </van-cell> -->

    <!-- <van-cell center :title="$t('customSize')"> -->
    <van-stepper v-model="stepper7" button-size="32px" input-width="40px" />
    <!-- </van-cell> -->

    <!-- <van-cell center :title="$t('asyncChange')"> -->
    <van-stepper :value="stepper6" async-change @change="onChange" />
    <!-- </van-cell> -->
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
      step: '步长设置',
      range: '限制输入范围',
      integer: '限制输入整数',
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
