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

  data() {
    return {
      stepper1: 1,
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
  background-color: #afeeee;
  &__right {
    float: right;
    height: 50px;
    margin-right: 20px;
    padding: 10;
    vertical-align:middle;
    background-color: red;
  }
}
</style>
