<template>
  <div class="van-stepper-input">
    <com-stepper />
  </div>
</template>

<script>
import ComStepper from '../../stepper/index';

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
.van-stepper-input {
  font-size: 0;
  width: 375px;
  height: 50px;
  user-select: none;
  background-color: #afeeee;
}
</style>
