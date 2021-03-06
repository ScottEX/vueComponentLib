# Stepper 步进器

### 介绍

步进器输入框由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整输入框数量

### 引入

```js
import { ComStepperInput } from 'bobvux';
```

## 代码演示

### 基础用法

通过`v-slot`插槽的方式定义UI样式、逻辑定义，可以通过`blur`事件监听到输入值的变化

```html
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
```

```js
export default {
  data() {
    return {
      min: 1,
      max: 8,
      showPlus: true,
      showMinus: true,
      showNumber: false,
      inputModelObj: {},
    };
  }
}
```

### 限制输入范围

通过`min-i`和`max-i`属性限制输入值的范围

```html
<com-stepper :min-i="1" :max-i="8" />
```

### 限制加减号按钮显示

通过设置`show-plus-i`和`show-minus-i`属性来限制➕➖的显示

```html
<com-stepper :show-plus-i="true" :show-minus-i="false" />
```

### 限制输入框显示

通过设置`show-number-i`属性来限制输入框显示，此时按钮仍然可以点击

```html
<com-stepper :show-number-i="false" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| min-i | 最小值 | *number \| string* | `1` |
| max-i | 最大值 | *number \| string* | - |
| show-plus-i | 是否显示增加按钮 | *boolean* | `true` |
| show-minus-i | 是否显示减少按钮 | *boolean* | `true` |
| show-number-i | 是否显示数字 | *boolean* | `true` |
| item | 传过来的数据通过slotProps接收 | *Array* | `[{ num: 1, isShowStepper: true, inputModel: '' }]` |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| onclick | 当加减号时触发的事件 | value: 当前组件的值 |
