# Button 按钮

按钮组件，可配置多种不同的按钮样式

### 引入

```javascript
import { comButton ,comButton01 } from "bobvux";
```

### 代码演示

```html
主按钮
    <com-button type="primary" noRound @click="iconClick">正常态</com-button>
    <com-button type="primary" noRound disabled>不可用</com-button>
    <com-button type="primary">正常态-圆角</com-button>
    <com-button type="primary" disabled>不可用-圆角</com-button>

次按钮
    <com-button type="default" noRound>正常态</com-button>
    <com-button type="default" noRound disabled>不可用</com-button>
    <com-button type="default">正常态-圆角</com-button>
    <com-button type="default" disabled>不可用-圆角</com-button>
小按钮-内联
    <com-button type="primary" size="small" inline>主按钮</com-button>
    <com-button type="default" size="small" inline>次按钮</com-button>
左右分布
    <com-button type="primary" noRound>主按钮</com-button>
    <com-button type="default" noRound>次按钮</com-button>
按钮置底
    <com-button01 type="primary" round innerBtn :btnHeightTop="true">主按钮</com-button01>
    <com-button03 :btnFixed="false" :rightDisabled="false" :leftDisabled="false" leftBtnText="主按钮可点" rightBtnText="主按钮可点" @leftBtnClick="btn_04_left_handler" @rightBtnClick="btn_04_right_handler">主按钮</com-button03>
        
    <com-button04 type="01" layout="solid" title1="标题标题标题" title2="副标题" btnText="按钮" @btnClick="btn_16_handler"></com-button04>
      
    <com-button04 type="01" layout="solid" title1="标题标题标题" title2="" btnText="查询" @btnClick="btn_16_handler" :aloneFlg="true"></com-button04>
    
    上下分布
    <com-button05 
        :btnFixed="true"
        @topClick="btn_05_top_handler"
        @bottomClick='btn_05_bottom_handler'
        topBtnText="上边按钮"
        bottomBtnText="下边按钮"
        topType="primary"
        bottomType="default"
    >
    </com-button05>
```

```javascript
<script>
export default {
  components: {
    comButton,
    comButton01,
    comButton02,
    comButton03,
    comButton04
  },
  data() {
    return {};
  },
  methods: {
    iconClick: function(event) {
      console.log('按钮点击事件');
    }
  }
};
</script>
```

### 代码示例 btn_01

```html
// 可点击
<Btn01 @click.native="btn_01_handler">下一步</Btn01>
// 不可点击
<Btn01 :disabled="isDisable">下一步</Btn01>
```

```javascript
// 定义 methods
methods: {
 // btn_01
    btn_01_handler: function () {
        alert('点击的是btn_01按钮')
    },
    // btn_05
    btn_05_top_handler(){
      console.log("上边按钮被点击");
    },
    btn_05_bottom_handler(){
      console.log("下边按钮被点击");
    }
}
```

### 代码示例 btn_02

```html
// 可点击
<Btn02
  leftBtnText="次按钮"
  rightBtnText="主按钮"
  :leftBtnIconUrl="iconUrl"
  @leftBtnClick="btn_02_left_handler"
  @rightBtnClick="btn_02_right_handler"
></Btn02>
// 不可点击
<Btn02
  leftBtnText="次按钮"
  rightBtnText="主按钮"
  :leftBtnIconUrl="iconUrl"
  @leftBtnClick="btn_02_left_handler"
  @rightBtnClick="btn_02_right_handler"
  :disabled="isDisable"
></Btn02>
```

```javascript
// 导入图片
import img1 from './image/icon_nav_button.png';
import img2 from './image/icon_nav_article.png';

// 初始化数据
data() {
    return {
      // 带有icon的按钮需传Array [可点击icon的url，不可点击icon的url]
      iconUrl: [img1,img2],
    }
  },

// 定义 methods
methods: {
  // btn_02
    btn_02_left_handler: function () {
      alert('点击的是btn_02次按钮')
    },
    btn_02_right_handler: function () {
      alert('点击的是btn_02主按钮')
    },
}
```

### API

#### Button Props
|属性 | 说明 | 类型 | 默认值 | 备注 |
|----|-----|------|------ |------|
|type|样式|String|`default`|`default`, `primary`, `warning`, `disabled`, `link`|
|native-type|类型|String|`button`|-|
|size|尺寸|String|`large`|`large/small`|
|plain|朴素|Boolean|`false`|-|
|round|圆角|Boolean|`false`|-|
|innerBtn|内边距|Boolean|`false`|-|
|inline|行内|Boolean|`false`|-|
|icon|图标|String|-|可选值请参考组件`Icon`|
|icon-svg|使用svg图标|Boolean|`false`|-|
|inactive|未激活|Boolean|`false`|`inactive`设为`true`和`disabled`类型的按钮都无法点击，前者一般用于表单校验无效等主观因素，后者用于无权限或无库存等客观因素|

#### btn_01

#### Button Props

| 属性     | 说明     | 类型    | 默认值 | 备注                 |
| -------- | -------- | ------- | ------ | -------------------- |
| disabled | 禁用置灰 | Boolean | -      | 不加此属性时默认高亮 |
| btnHeightTop | 距离顶部距离 | Boolean | 默认为false  true-top  false-bottom  |  |

#### btn_02

#### Button Props

| 属性           | 说明                       | 类型    | 默认值   | 备注                                                                                                                  |
| -------------- | -------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| disabled       | 禁用置灰                   | Boolean | -        | 不加此属性时默认高亮                                                                                                  |
| leftDisabled   | 次按钮禁用置灰             | Boolean | -        | -                                                                                                                     |
| rightDisabled  | 主按钮禁用置灰             | Boolean | -        | -                                                                                                                     |
| leftBtnText    | 次按钮（左侧按钮）名称     | String  | `次按钮` | -                                                                                                                     |
| rightBtnText   | 主按钮（右侧按钮）名称     | String  | `主按钮` | -                                                                                                                     |
| leftBtnIconUrl | 次按钮（左侧按钮）图标路径 | Array   | -        | 格式：[可点击时 icon 的 url，不可点击时 icon 的 url]，若可点击与不可点击 icon 无变化，不可点击时 icon 的 url 可以省略 |
| btnHeightTop | 距离顶部距离 | Boolean | 默认为false  true-top  false-bottom  |  |

#### Button Methods

| 方法名        | 说明                       | 方法参数 | 参数默认值 | 备注 |
| ------------- | -------------------------- | -------- | ---------- | ---- |
| leftBtnClick  | 次按钮（左侧按钮）执行逻辑 | -        | -          | -    |
| rightBtnClick | 主按钮（右侧按钮）执行逻辑 | -        | -          | -    |


#### btn_05

#### Button Props

| 属性           | 说明                       | 类型    | 默认值   | 备注                                                                                                                  |
| -------------- | -------------------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------- |
| disabled       | 禁用置灰                   | Boolean | false     | 不加此属性时默认高亮 |
| topDisabled   | 上方按钮禁用置灰             | Boolean | false     | -  |
| bottomDisabled  | 下方按钮禁用置灰             | Boolean | false     | -|
| leftBtnText    | 上方按钮名称     | String  |  | - |
| rightBtnText   | 下方按钮名称     | String  |  | -  |
| btnHeightTop | 距离顶部距离 | Boolean | 默认为false  true-top  false-bottom  | -   |
| btnFixed | 固定在底部 | Boolean | 默认为true  true-固定  false-不固定  | - |

#### Button Methods

| 方法名        | 说明                       | 方法参数 | 参数默认值 | 备注 |
| ------------- | -------------------------- | -------- | ---------- | ---- |
| topClick  | 上方按钮点击事件 | -        | -          | -    |
| bottomClick | 下方按钮点击事件 | -        | -          | -    |
