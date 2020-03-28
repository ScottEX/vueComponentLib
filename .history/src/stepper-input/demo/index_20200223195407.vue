<template>
  <div class="demo-div">
    <demo-section>
      <demo-block title="基础用法">
        <com-stepper-input v-model="stepper1" />
      </demo-block>
    </demo-section>
  </div>
</template>

<script>

import ComStepperInput from '../index';

export default {

  components: {
    ComStepperInput,
  },

  data() {
    return {
      stepper1: 1,
    };
  },
};
</script>
<style lang='less'>
.demo-div {
  background-color: #FFFFFF;
}
</style>
