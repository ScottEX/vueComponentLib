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
          <template v-slot:item="slotProps">
            <input
              type="text"
              class="demo-input"
              placeholder="请输入优惠卷"
              v-model="slotProps.item.inputModel"
              @blur="onBlur(slotProps.item.num)"
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
      inputModelArr: [],
    };
  },

  methods: {
    getColumn(value) {
      if (value - this.inputModelArr.length < 0) {
        this.inputModelArr.splice(this.inputModelArr.length, 1);
      }
      console.log(this.inputModelArr);
    },
    onBlur(num) {
      if (event.target.value !== '') {
        // this.inputModelArr
        this.inputModelArr.splice(num - 1, 1, event.target.value);
      }
      console.log(this.inputModelArr);
    },
  },
};
</script>
<style lang='less'>
  .demo-input{
    margin-left: 40%;
    font-size: 16px;
    color: #222222;
    width: 60%;
    height: 100%;
    border: 0;
    outline: none;
  }
</style>
