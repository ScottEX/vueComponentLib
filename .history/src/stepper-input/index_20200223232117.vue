<template>
  <div class="stepper-input">
    <p>优惠卷（如有）</p>
    <input
      type="text"
      class="stepper-input__left"
      placeholder="请输入优惠卷"
    />
    <span class="stepper-input__right">
      <com-stepper
        v-model="stepper"
        :min="min"
        :max="max"
        :show-plus="showPlus"
        :show-minus="showMinus"
        :show-number="showNumber"
        @change="onChange"
      />
    </span>
  </div>
</template>

<script>
import ComStepper from '../stepper/index';

export default {
  name: 'stepper-input',
  components: {
    ComStepper,
  },

  props: {
    minI: {
      type: [Number, String],
      default: 1,
    },
    maxI: {
      type: [Number, String],
      default: Infinity,
    },
    showPlusI: Boolean,
    showMinusI: Boolean,
    showNumberI: Boolean,
  },

  data() {
    return {
      stepper: 1,
      min: this.minI,
      max: this.maxI,
      showPlus: this.showPlusI,
      showMinus: this.showMinusI,
      showNumber: this.showNumberI,
    };
  },

  methods: {
    onChange(value) {
      this.$emit('onclick', value);
    },
  },
};
</script>

<style lang="less">
.stepper-input {

  width: 375px;
  height: 50px;
  user-select: none;
  background-color: #FFFFFF;
  p{
    font-size: 12px;
    width: 90px;
    background-color: red;
  }
  &__left {
    margin-left: 120px;
    font-size: 14px;
    color: #222222;
    width: 150px;
    height: 50px;
    border: 0;
    outline: none;
    // background-color: red;
  }
  &__right {
    float: right;
    margin-right: 20px;
    padding: 11px;
  }
}
</style>
