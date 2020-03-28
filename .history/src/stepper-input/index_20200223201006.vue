<template>
  <div class="stepper-input">
    <div class="stepper-input__right">
      <com-stepper v-model="stepper1" />
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
    flex: right;
    right: 0;
  }
}
</style>
