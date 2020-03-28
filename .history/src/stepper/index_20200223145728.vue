<template>
  <div class="van-stepper">
    <button
      :vShow="showMinus"
      type="button"
      :style="buttonStyle"
      class="van-stepper__minus"
      :disabled="minusDisabled"

      @click="onChange('minus')"
      @touchstart="onTouchStart"
    />
    <input
      type="number"
      role="spinbutton"
      class="van-stepper__input"
      :value="currentValue"
      :style="inputStyle"
      :disabled="disabled"
      :readonly="disableInput"
      :aria-valuemax="max"
      :aria-valuemin="min"
      :aria-valuenow="currentValue"
      @onInput="onInput"
      @onFocus="onFocus"
      @onBlur="onBlur"
    />
    <button
      :vShow="showPlus"
      type="button"
      :style="buttonStyle"
      class="van-stepper__plus"
      :disabled="plusDisabled"

      @click="onChange('plus')"
      @onTouchEnd="onTouchEnd"
    />
  </div>
</template>

<script>

const LONG_PRESS_START_TIME = 600;
const LONG_PRESS_INTERVAL = 200;

function isNumeric(val) {
  return /^\d+(\.\d+)?$/.test(val);
}

function isDef(val) {
  return val !== undefined && val !== null;
}

function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }

  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}

function equal(value1, value2) {
  return String(value1) === String(value2);
}

// add num and avoid float number
function add(num1, num2) {
  const cardinal = 10 ** 10;
  return Math.round((num1 + num2) * cardinal) / cardinal;
}

export default {
  name: 'stepper',

  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    inputWidth: [Number, String],
    buttonSize: [Number, String],
    asyncChange: Boolean,
    disablePlus: Boolean,
    disableMinus: Boolean,
    disableInput: Boolean,
    decimalLength: [Number, String],
    name: {
      type: [Number, String],
      default: '',
    },
    min: {
      type: [Number, String],
      default: 1,
    },
    max: {
      type: [Number, String],
      default: Infinity,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    defaultValue: {
      type: [Number, String],
      default: 1,
    },
    showPlus: {
      type: Boolean,
      default: true,
    },
    showMinus: {
      type: Boolean,
      default: true,
    },
    longPress: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    const defaultValue = isDef(this.value) ? this.value : this.defaultValue;
    const value = this.format(defaultValue);

    if (!equal(value, this.value)) {
      this.$emit('input', value);
    }

    return {
      currentValue: value,
    };
  },

  computed: {
    minusDisabled() {
      return (
        this.disabled || this.disableMinus || this.currentValue <= this.min
      );
    },

    plusDisabled() {
      return this.disabled || this.disablePlus || this.currentValue >= this.max;
    },

    inputStyle() {
      const style = {};

      if (this.inputWidth) {
        style.width = addUnit(this.inputWidth);
      }

      if (this.buttonSize) {
        style.height = addUnit(this.buttonSize);
      }

      return style;
    },

    // eslint-disable-next-line vue/return-in-computed-property
    buttonStyle() {
      if (this.buttonSize) {
        const size = addUnit(this.buttonSize);

        return {
          width: size,
          height: size,
        };
      }
    },
  },

  watch: {
    max: 'check',
    min: 'check',
    integer: 'check',
    decimalLength: 'check',

    value(val) {
      if (!equal(val, this.currentValue)) {
        this.currentValue = this.format(val);
      }
    },

    currentValue(val) {
      this.$emit('input', val);
      this.$emit('change', val, { name: this.name });
    },
  },

  methods: {
    check() {
      const val = this.format(this.currentValue);
      if (!equal(val, this.currentValue)) {
        this.currentValue = val;
      }
    },

    // filter illegal characters
    filter(value) {
      value = String(value).replace(/[^0-9.-]/g, '');

      if (this.integer && value.indexOf('.') !== -1) {
        value = value.split('.')[0];
      }

      return value;
    },

    format(value) {
      value = this.filter(value);

      // format range
      value = value === '' ? 0 : +value;
      value = Math.max(Math.min(this.max, value), this.min);

      // format decimal
      if (isDef(this.decimalLength)) {
        value = value.toFixed(this.decimalLength);
      }

      return value;
    },

    onInput(event) {
      const { value } = event.target;

      // allow input to be empty
      if (value === '') {
        return;
      }

      let formatted = this.filter(value);

      // limit max decimal length
      if (isDef(this.decimalLength) && formatted.indexOf('.') !== -1) {
        const pair = formatted.split('.');
        formatted = `${pair[0]}.${pair[1].slice(0, this.decimalLength)}`;
      }

      if (!equal(value, formatted)) {
        event.target.value = formatted;
      }

      this.emitChange(formatted);
    },

    emitChange(value) {
      if (this.asyncChange) {
        this.$emit('input', value);
        this.$emit('change', value, { name: this.name });
      } else {
        this.currentValue = value;
      }
    },

    onChange(type) {
      console.log(type);

      // const { type } = this;
      if (this[`${type}Disabled`]) {
        this.$emit('overlimit', type);
        return;
      }

      const diff = type === 'minus' ? -this.step : +this.step;

      const value = this.format(add(+this.currentValue, diff));

      this.emitChange(value);
      this.$emit(type);
    },

    onFocus(event) {
      this.$emit('focus', event);
    },

    onBlur(event) {
      const value = this.format(event.target.value);
      event.target.value = value;
      this.currentValue = value;
      this.$emit('blur', event);

      // resetScroll();
    },

    longPressStep() {
      this.longPressTimer = setTimeout(() => {
        this.onChange();
        this.longPressStep(this.type);
      }, LONG_PRESS_INTERVAL);
    },

    onTouchStart() {
      if (!this.longPress) {
        return;
      }

      clearTimeout(this.longPressTimer);
      this.isLongPress = false;

      this.longPressTimer = setTimeout(() => {
        this.isLongPress = true;
        this.onChange();
        this.longPressStep();
      }, LONG_PRESS_START_TIME);
    },

    onTouchEnd(event) {
      if (!this.longPress) {
        return;
      }

      clearTimeout(this.longPressTimer);

      if (this.isLongPress) {
        // preventDefault(event);
      }
    },
  },
};
</script>

<style lang="less">
.van-stepper {
  font-size: 0;
  user-select: none;

  &__minus,
  &__plus {
    position: relative;
    box-sizing: border-box;
    width: 28px;
    height: 28px;
    margin: 0;
    padding: 4px;
    color: #323233;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    cursor: pointer;

    &::before {
      width: 13px;
      height: 1px;
    }

    &::after {
      width: 1px;
      height: 13px;
    }

    &::before,
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      background-color: currentColor;
      content: '';
    }

    &:active {
      background-color: #e8e8e8;
    }

    &--disabled {
      color: #c8c9cc;
      background-color: #f7f8fa;
      cursor: not-allowed;

      &:active {
        background-color: #f7f8fa;
      }
    }
  }

  &__minus {
    border-radius: 4px 0 0 4px;

    &::after {
      display: none;
    }
  }

  &__plus {
    border-radius: 0 4px 4px 0;
  }

  &__input {
    box-sizing: border-box;
    width: 32px;
    height: 28px;
    margin: 0 2px;
    padding: 0;
    color: #323233;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    background-color: #f2f3f5;
    border: 0;
    border-width: 1px 0;
    border-radius: 0;
    -webkit-appearance: none;

    &:disabled {
      color: #c8c9cc;
      background-color: #f2f3f5;
      -webkit-text-fill-color: #c8c9cc; // fix disabled color in iOS
      opacity: 1;
    }

    &:read-only {
      cursor: default;
    }
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
}
</style>
