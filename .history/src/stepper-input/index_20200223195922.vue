<template>
  <div class="van-stepper" />
</template>

<script>

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
    showNumber: {
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
      console.log('event');
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
      this.currentValue = value;
    },

    onChange(type) {
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
    },
  },
};
</script>

<style lang="less">
.van-stepper {
  font-size: 0;
  width: 375px;
  height: 50px;
  user-select: none;
  background-color: #afeeee;
}
</style>
