<template>
  <div class="stepper-input">
    <span class="stepper-input__right">
      <com-stepper style="vertical-align:middle;" v-model="stepper1" />
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
    stepper1: null,
    integer: Boolean,
    disabled: Boolean,
  },

  data() {
    return {
      // stepper: 3,
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
