<template>
  <div>
    <demo-section>
      <demo-block title="基础用法">
        <com-stepper-input
          :min-i="min"
          :max-i="max"
          :show-plus-i="showPlus"
          :show-minus-i="showMinus"
          :show-number-i="showNumber"
        />
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
      min: 1,
      max: 5,
      showPlus: true,
      showMinus: true,
      showNumber: false,
    };
  },
};
</script>
<style lang='less'></style>
