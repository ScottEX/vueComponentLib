<template>
  <div class="van-stepper-input">
    <com-stepper v-model="stepper1" />
  </div>
</template>

<script>
import ComStepper from '../index';

export default {
  name: 'stepper-input',
  components: {
    ComStepper,
  },

};
</script>

<style lang="less">
.van-stepper-input {
  font-size: 0;
  width: 375px;
  height: 50px;
  user-select: none;
  background-color: #afeeee;
}
</style>
