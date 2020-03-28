<template>
  <div class="bcm-stepper" :class="{'disabled': disabled}">
    <div
      class="bcm-stepper-button bcm-stepper-button-reduce"
      :class="{'disabled': isMin}"
      @click.stop="$_reduce"
    >
      <span>-</span>
    </div>
    <div class="bcm-stepper-number">
      <input
        type="number"
        :size="contentLength"
        :value="currentNum"
        :readOnly="readOnly"
        @input="$_onInput"
        @blur="$_onChange('blur')"
        :style="{'width':widthNum}"
        @keyup="$_onKeyup"
        @focus="$_onFocus"
      />
      <span class="bcm-stepper-percentage" v-if="percentage">%</span>
    </div>

    <div
      class="bcm-stepper-button bcm-stepper-button-add"
      :class="{'disabled': isMax}"
      @click.stop="$_add"
    >
      +
    </div>
  </div>
</template>

<script>
function getDecimalNum(num) {
  try {
    return num.toString().split('.')[1].length;
  } catch (e) {
    return 0;
  }
}

function accAdd(num1, num2) {
  const r1 = getDecimalNum(num1);
  const r2 = getDecimalNum(num2);
  const m = Math.pow(10, Math.max(r1, r2));
  return +((num1 * m + num2 * m) / m);
}

function subtr(num1, num2) {
  const r1 = getDecimalNum(num1);
  const r2 = getDecimalNum(num2);
  const m = Math.pow(10, Math.max(r1, r2));
  const n = r1 >= r2 ? r1 : r2;
  return +((num1 * m - num2 * m) / m).toFixed(n);
}

export default {
  name: 'stepper',

  components: {},

  props: {
    defaultValue: {
      type: [Number, String],
      default: 0,
    },
    value: {
      type: [Number, String],
      default: 0,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    min: {
      type: [Number, String],
      default: -Number.MAX_VALUE,
    },
    max: {
      type: [Number, String],
      default: Number.MAX_VALUE,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    isInteger: {
      type: Boolean,
      default: false,
    },
    percentage: {
      type: Boolean,
      default: false,
    },
    replaceFlg: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      isMin: false,
      isMax: false,
      currentNum: 0,
      widthNum: '12px',
      keyupNum: '',
      onkeydown: false,
    };
  },

  computed: {
    contentLength() {
      if (!this.value) {
        return 2;
      }
      const { length } = this.value.toString();
      return length > 2 ? length : 2;
    },
  },

  watch: {
    defaultValue(val) {
      this.currentNum = this.$_getCurrentNum(val);
    },
    value(val) {
      if (this.onkeydown) {
        this.currentNum = this.$_getCurrentNum(this.keyupNum);
      } else {
        this.currentNum = this.$_getCurrentNum(val);
      }
    },
    min(val) {
      if (this.currentNum < val) {
        this.currentNum = val;
      }
      this.$_checkStatus();
    },
    max(val) {
      if (this.currentNum > val) {
        this.currentNum = val;
      }
      this.$_checkStatus();
    },
    currentNum(val, oldVal) {
      const num = this.currentNum.toString().length;
      if (num >= 2) {
        this.widthNum = num * 12 + 'px';
      } else {
        this.widthNum = 12 + 'px';
      }
      this.$_checkStatus();

      this.$emit('input', val);
      this.$emit('change', val);

      const diff = val - oldVal;

      // judge the event of operation
      if (diff > 0) {
        this.$emit('increase', diff);
      } else if (diff < 0) {
        this.$emit('decrease', Math.abs(diff));
      }
    },
  },

  mounted() {
    // verify that the minimum value is less than the maximum value
    this.$_checkMinMax();
    this.currentNum = this.$_getCurrentNum(this.value || this.defaultValue);
    this.$_checkStatus();
  },

  methods: {
    $_onFocus() {
      this.onkeydown = true;
      this.$emit('focus');
    },
    $_onKeyup(event) {
      if (this.max < 10 && this.replaceFlg) {
        event.target.value = this.$_formatNum(event.key);
        this.keyupNum = this.$_formatNum(event.key);
        this.currentNum = this.$_formatNum(event.key);
      }
    },
    // MARK: 私有方法
    $_reduce() {
      this.onkeydown = false;
      if (this.disabled || this.isMin) {
        return;
      }
      this.currentNum = subtr(this.currentNum, this.step);
      this.$_onChange('reduce');
    },
    $_add() {
      this.onkeydown = false;
      if (this.disabled || this.isMax) {
        return;
      }
      this.currentNum = accAdd(this.currentNum, this.step);
      this.$_onChange('add');
    },
    $_formatNum(value) {
      // @elist
      value = String(value).replace(/[^0-9.]/g, '');
      return value === '' ? 0 : this.isInteger ? Math.floor(value) : +value;
    },
    $_getCurrentNum(value) {
      if (this.max < 10) {
        return Math.max(Math.min(this.max, this.$_formatNum(value)), this.min);
      }
      return Math.max(Math.min(this.max, this.$_formatNum(value)), this.min);
    },
    $_checkStatus() {
      this.isMin = subtr(this.currentNum, this.step) < this.min;
      this.isMax = accAdd(this.currentNum, this.step) > this.max;
    },
    $_checkMinMax() {
      if (this.min > this.max) {
        console.log('[md-vue-stepper] minNum is larger than maxNum');
      }
      return this.max > this.min;
    },

    // MARK: 监听事件方法, 如 $_onButtonClick
    $_onInput(event) {
      const { value } = event.target;
      const formatted = this.$_formatNum(value);
      if (+value !== formatted) {
        event.target.value = formatted;
      }
      if (this.isInteger) {
        event.target.value = '';
        event.target.value = formatted;
      }
      this.currentNum = formatted;
    },
    $_onChange(fun) {
      this.currentNum = this.$_getCurrentNum(this.currentNum);
      this.$emit(fun, this.currentNum);
    },
  },
};
</script>

<style lang="less">
.bcm-stepper {
  color: #111a34;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  height: 30px;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid #007cf6;
  border-radius: 3px;
  overflow: hidden;
  &.disabled {
    .bcm-stepper-button {
      &:before,
      &:after {
        opacity: 0.3;
      }
      input {
        opacity: 0.3;
      }
    }
  }
}

.bcm-stepper-button {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #f9fafb;
  border-radius: 3px;
  float: left;
  &:after {
    width: 30px;
    height: 30px;
  }
  &:before {
    width: 30px;
    height: 30px;
  }

  &.disabled {
    &:before,
    &:after {
      opacity: 0.3;
    }
  }
}

.bcm-stepper-button-reduce {
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: #EAEAEA;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

.bcm-stepper-button-add {
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: #EAEAEA;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: #EAEAEA;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}

.bcm-stepper-number {
  float: left;
  height: 30px;
  padding: 0 5px;
  text-align: center;
  border-radius: 0;
  background-color: #f9fafb;
  border-left: 1px solid #007cf6;
  border-right: 1px solid #007cf6;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 20px;
    background-color: initial;
    box-sizing: border-box;
    text-align: center;
    color: #EAEAEA;
    border-radius: 0;
  }
}

.bcm-stepper-percentage {
  font-size: 16;
  color: #EAEAEA;
}
</style>
