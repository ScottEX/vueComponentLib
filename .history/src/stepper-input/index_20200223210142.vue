<template>
  <div class="stepper-input">
    <span class="stepper-input__right">
      <com-stepper v-model="stepper" min="1" max="5" />
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
    min1: {
      type: [Number, String],
      default: 1,
    },
    max1: {
      type: [Number, String],
      default: Infinity,
    },
    showPlus: Boolean,
    showMinus: Boolean,
    showNumber: Boolean,
  },

  data() {
    return {
      stepper: 1,
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
