<template>
  <div>
    <div
      class="stepper-input"
      v-for="(item, key) in numbers"
      :key="key"
    >
      <div class="stepper-input__left">
        <slot name="item" :item="item" />
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
      <div class="stepper-input__line" />
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
      numbers: [{ num: 1, isShowStepper: true, inputModel: '' }],
    };
  },

  methods: {
    onChange(value) {
      if (value - this.numbers.length === 1) {
        this.numbers[this.numbers.length - 1].isShowStepper = false;
        this.numbers.push({ num: value, isShowStepper: true, inputModel: '' });
        this.$emit('onclick', value);
      }
      if (value - this.numbers.length === -1) {
        this.numbers.pop({ num: value, isShowStepper: true, inputModel: '' });
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
    float: left;
    padding-top: 2px;
    width: 70%;
    height: 92%;
  }
  &__right {
    float: right;
    width: 29%;
    height: 100%;
  }
  &__line {
    padding-left: 3px;
    width: 100%;
    height: 1px;
    background-color: red;
  }
}
</style>
