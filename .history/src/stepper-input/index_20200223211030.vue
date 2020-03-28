<template>
  <div class="stepper-input">
    <span class="stepper-input__right">
      <com-stepper v-model="stepper" :min="min" :max="max" />
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
      showPlus：this.showPlusI,
    };
  },

};
</script>

<style lang="less">
.stepper-input {
  font-size: 0;
  width: 375px;
  height: 50px;
  user-select: none;
  background-color: #FFFFFF;
  &__right {
    float: right;
    margin-right: 20px;
    padding: 11px;
  }
}
</style>
