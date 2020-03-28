# HTML 规范

### HTML

尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度。

### 文档类型

为每个 HTML 页面的第一行添加标准模式（standard mode）的声明， 这样能够确保在每个浏览器中拥有一致的表现。

```html
<!DOCTYPE html>
```

### head

1. 页面必须包含 title 标签声明标题
2. 保证 favicon 可访问
3. 设置页面编码格式为UTF-8

### viewport

为移动端设备优化，设置可见区域的宽度和初始缩放比例。

```html
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" name="viewport">
```

### 标签

1. 自闭合标签，无需闭合。例如 img，input，br。
2. 可选的闭合标签，需闭合。例如 div，li，h1。
3. 标签的使用应尽量简洁，尽量减少标签数量。
4. 标签都加上class，不使用无意义的标签。
5. 标签名必须使用小写字母。

### class和id

1. class 应以功能或内容命名，不以表现形式命名。
2. 不推荐使用id，会影响样式的优先级。
3. class 命名推荐使用BEM命名规范。

### 属性

1. 属性名必须使用小写字母。
2. 属性值必须用双引号包围。
3. HTML5 规范中 disabled、checked、selected 等属性不用设置值。

## 属性顺序

### HTML 属性应该按照特定的顺序出现以保证易读性。

1. id
2. class
3. name
4. data
5. src，for，type，href
6. title，alt

### 标签嵌套

1. li只能在ul或ol里使用。
2. dd只能在dt或dl里使用。
3. thead，tbody，tfoot，tr，td 用于table下。
4. a里面不能嵌套a，button，select等交互元素。
5. p里面不能嵌h1~h6，div等套块元素。

### 图片

1. 禁止 img 的 src 取值为空。延迟加载的图片也要增加默认的 src。
2. 建议添加 width 和 height 属性，以避免页面抖动。
3. 有下载需求的图片采用 img 标签实现，无下载需求的图片采用 CSS 背景图实现。

### 表单

1. 有文本标题的控件必须使用 label 标签将其与其标题相关联。
2. 使用 button 元素时必须指明 type 属性值。
3. 尽量不要使用按钮类元素的 name 属性。

### 语义化

* h1~h6 标题。
* ul，li，ol，dl，dt，dd 列表。
* form，input，select，button 表单。
* table，thead，tbody，tfoot，th，tr，td 表格。
* img，canvas，figure 图像显示。
* nav 导航栏。
* article和section 页面实际内容。
* audio/video/source/embed 媒体元素。
* aside 补充内容。
