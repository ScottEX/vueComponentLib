# STANDARD 规范

## <font color="red">__★ 开头的必须执行__</font>

### 文件夹

1. ★ 下划线命名 -- cgb\_account_query

### 文件

1. ★ 禁止使用中文
2. ★ 小驼峰 -- myComponent.vue

### 组件

1. 名称，多单词--TodoItem.vue
2. Prop 定义应该尽量详细。
3. 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。 TodoList，TodoListItem，TodoListItemButton
4. 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。

```vue
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```

### HTML

1. 多属性应该每个属性单独一行。
2. ★ 非空 HTML 特性值应该始终带双引号 ""
3. ★ v-for 必须要有 key
4. 如有复杂表达式，请使用计算属性或方法

### CSS

1. ★ 禁止使用 !important
2. BEM 规范--- .main-block 、main-block__title 、.main-block__title--active
3. 不使用 ID 选择器
4. 变量名  $common-bg-color
5. 选择器最多不超过**3层**

### 图片

1. ★ 禁止使用中文
2. 使用别名(alias)路径引用资源，@、@m、@a、@c

### 开发代码规范

1. 全局变量在右边注释作用域，命名全大写，如：NAME_NAME
2. 熟悉使用vue生命周期  
	`beforeCreate` （组件实例刚被创建，组件属性计算之前，如`data`属性等）  
	`created`（组件实例创建完成，属性已绑定，但`DOM`还未生成，`$el`属性还不存在）
	`beforeMount`（模版编译/挂载之前）
	`mounted`（模版编译/挂载之后，不保证组件已在`document`中）
	`beforeUpdate`（组件更新之前）
	`updated`（组件更新之后）  
	`beforeDestro`（组件销毁前）
	`destroyed`（组件销毁后）
	建议`.do`请求都在`created`钩子函数执行。
	禁止在生命周期钩子函数编写业务逻辑代码，应该在`methods`编写`function`，每个`function`都有对应的注释该函数作用域，如每个`function`里面有多个局部变量，也需注明变量的作用域。例子如下代码

```javascript
methods:{
  requestCardList(){ //请求卡列表
  // 请求.do之后
	if(data.cardType == "1") dosomething........
	else if(data.cardType == "2") dosomething........
	else if(data.cardType == "3") dosomething........
	else  dosomething........
	// cardType字段 1 = 信用卡; 2 = 借记卡; 3 = 生意卡; 其他类型 = 储蓄卡
	}
}
created(){
	// 禁止在生命周期钩子函数编写业务逻辑代码
	this.requestCardList() //请求卡列表
}
```
