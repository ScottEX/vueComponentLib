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
    right: 40px;
    margin-right: 40px;
    padding: auto;
    // background-color: red;
  }
}
</style>
