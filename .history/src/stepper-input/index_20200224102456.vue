<template>
  <div>
    <div
      class="stepper-input"
      v-for="(item, key) in numbers"
      :key="key"
    >
      <div class="stepper-input__left">
        <p>优惠卷</p>
        <input
          type="text"
          placeholder="请输入优惠卷"
        />
      </div>
      <div class="stepper-input__right" v-show="item.isShowStepper">
        <com-stepper
          style="float: right;padding: 11px;"
          v-model="stepper"
          :min="min"
          :max="max"
          :show-plus="showPlus"
          :show-minus="showMinus"
          :show-number="showNumber"
          @change="onChange"
        />
      </div>
    </div>
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
      numbers: [{ num: 1, isShowStepper: true }],
    };
  },

  methods: {
    onChange(value) {
      if (value - this.numbers.length === 1) {
        this.numbers[this.numbers.length - 1].isShowStepper = false;
        this.numbers.push({ num: value, isShowStepper: true });
        this.$emit('onclick', value);
      }
      if (value - this.numbers.length === -1) {
        this.numbers.pop({ num: value, isShowStepper: true });
        this.numbers[this.numbers.length - 1].isShowStepper = true;
        this.$emit('onclick', value);
      }
    },
  },
};
</script>

<style lang="less">
.stepper-input {

  width: 100%;
  height: 50px;
  user-select: none;
  background-color: #FFFFFF;
  &__left {
    position: relative;
    float: left;
    width: 70%;
    height: 100%;
    background-color: red;
    p{
      top: 0px;
      margin-left: 1%;
      font-size: 12px;
      color: #222222;
      width: 38%;
      height: 100%;
      background-color: #233333;
    }
    input{
      margin-left: 40%;
      font-size: 16px;
      color: #222222;
      width: 60%;
      height: 100%;
      border: 0;
      outline: none;
    }
  }
  &__right {
    float: right;
    width: 29%;
    height: 100%;
    background-color: #AFEEEE;
  }
}
</style>
