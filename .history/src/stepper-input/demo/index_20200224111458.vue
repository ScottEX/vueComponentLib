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
          @onclick="getColumn"
        >
          <template v-slot:footer>
            <input
              type="text"
              placeholder="请输入优惠卷"
            />
          </template>
        </com-stepper-input>
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
      max: 3,
      showPlus: true,
      showMinus: true,
      showNumber: false,
    };
  },

  methods: {
    getColumn(value) {
      console.log(value);
    },
  },
};
</script>
<style lang='less'></style>
