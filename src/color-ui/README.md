# Color 色彩规范

### 介绍

DemoColor 是一个公共定义的颜色样式

### 引入

用于文字、背景色、分割线、系统图标颜色定义,请引入 `global.less` 样式表后使用以下样式相关变量

## 代码演示

### 基础用法

``` javascript
@import '../styles/global.less'
```

## API

### 字体颜色

```less
// 标题颜色 #222222
@color-text-base
// 返白 #FFF
@color-text-base-inverse
// 次要信息，如利益点、摘要 #666666
@color-text-minor
// 辅助信息，如列表内容描述 #999999
@color-text-caption
// 禁用状态 #999999
@color-text-disabled
// 默认提示输入或占位 #999999
@color-text-placeholder
 // 高亮状态 #42a2d7
@color-text-highlight
// 利益，警告提示 #ffa40e
@color-text-warn
// 强提示报错 #ea5454
@color-text-error
// 文字链接 #42a2d7
@color-text-link
// 弹框文字链接色 #007aff
@color-text-dialog-link
```

### 背景色/分割线

```less
// 品牌色 #42a2d7
@color-primary
// APP背景色 #f2f2f2
@color-bg-base
// 白色 #FFF
@color-bg-inverse
// 禁用元素背景 #E2E4EA
@color-bg-disabled
// 条目点击态 #F9FAFB
@color-bg-tap
// 弹窗蒙层  rgba(37, 38, 45, .7)
@color-mask
// 分割线A #dbdbdb
@color-border-base
// 分割线B #dbdbdb
@color-border-element
```
