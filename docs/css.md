# CSS 规范

### 通用规则

* 合理的避免使用ID
* CSS选择器中避免标签名
* 尽可能的精确
* 缩写属性
* 0不使用单位
* 使用小写十六进制表示法
* 分号结束，每个声明换行
* 属性和值（但属性和冒号之间没有空格）的之间始终使用一个空格。
* 每个选择器和属性声明总是使用新的一行。
* 规则之间始终有一个空行（双换行符）分隔。
* 属性选择器或属性值用双引号（””），而不是单引号（”）括起来。URI值（url()）不要使用引号。
* 适当的嵌套选择器


### Class 和 ID

1. 使用语义化、通用的命名方式；
2. 使用`BEM`命名规范
3. 避免选择器嵌套层级过多，尽量少于 3 级
4. 避免选择器和 Class、ID 叠加使用，不推荐使用ID选择器

### 格式化

1. 优先按照编辑器的格式化效果
2. 选择器分组时，保持独立的选择器占用一行
3. 声明块的左括号 { 前添加一个空格
4. 声明块的右括号 } 应单独成行
5. 声明语句中的 : 后应添加一个空
6. 声明语句应以分号 ; 结尾
7. 一般以逗号分隔的属性值，每个逗号后应添加一个空格；
8. rgb()、rgba()、hsl()、hsla()或 rect()括号内的值，逗号分隔，但逗号后不添加一个空格；
9. 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，.5 代替 0.5；-.5px 代替 -0.5px）；
10. 十六进制值应该全部小写和尽量简写，例如，#fff 代替 #ffffff；
11. 避免为 0 值指定单位，例如，用 margin: 0; 代替 margin: 0px;；

## 声明顺序

### 参照以下声明顺序

```css
.declaration-order {
  /* 位置 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* 盒子模型 */
  display: block;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  margin: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  float: right;
  overflow: hidden;

  /* 文字排版 */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  text-align: center;

  /* 视觉效果 */
  background-color: #f5f5f5;
  color: #fff;
  opacity: .8;

  /* 其他 */
  cursor: pointer;
  transform: scale(.5);
  transition: width .6s ease;
}
```

### 引号使用

url()、属性选择符、属性值使用双引号

### 媒体查询

将媒体查询放在尽可能相关规则的附近。

### 链接的样式顺序

a:link -> a:visited -> a:hover -> a:active（LoVeHAte）

### 性能优化

1. 避免使用通用选择器
2. 避免使用标签或 class 选择器限制 id 选择器
3. 避免使用标签限制 class 选择器
4. 避免使用多层标签选择器。使用 class 选择器替换，减少 css 查找
5. 避免使用子选择器
6. 使用继承
