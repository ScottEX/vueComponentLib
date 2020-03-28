# ActionSheet 上拉菜单

### 引入方式

```javascript
import { comActionSheet } from 'bobvux';
```

## 代码示例

### 基础用法

```html
<com-button @click="showformalert0">action_sheet_01(默认)</com-button>
<com-action-sheet01
  v-model="showPopup0"
  @on-click-menu="click_menu_callback"
  :menus="lists1"
  show-cancel
>
</com-action-sheet01>
<com-button @click="showformalert1">action_sheet_01(提示)</com-button>
<com-action-sheet01
  v-model="showPopup1"
  @on-click-menu="click_menu_callback"
  :menus="lists1"
  show-cancel
  bigHeight
>
  <div slot="subTitle0" class="subTitle">需要强调的提示性文字</div>
  <div slot="subTitle1" class="subTitle-tips">需要强调的提示性文字</div>
</com-action-sheet01>
<com-button @click="showformalert2">列表中不可选取项</com-button>
<com-action-sheet01
  v-model="showPopup2"
  @on-click-menu="click_menu_callback"
  :menus="lists2"
  show-cancel
  noClick
  bigHeight
>
  <div slot="subTitle0" class="subTitle">需要强调的提示性文字</div>
  <div slot="subTitle1" class="subTitle">不可选取时提示性文字</div>
</com-action-sheet01>
<demo-block title="底部模态弹框action_sheet_02">
<com-botton @click.native="showformalert3">action_sheet_02(圆角)</com-botton>
<com-action-sheet02
  v-model="showPopup3"
  @on-click-menu="click_menu_callback"
  :menus="lists"
  :cancel-title="cancelTitle"
  show-cancel
/>
```

```javascript
<script>

export default {
  // 更改name中的demo名称
  name: 'demo',
  components: {
    comActionSheet
  },
  data() {
    return {
      showPopup0: false,
      showPopup1: false,
      showPopup2: false,
      showPopup3: false,
      lists1: ['操作项目1', '操作项目2', '操作项目3', '操作项目4'],
      lists2: [
        {
          menu: '操作项目1',
        },
        {
          menu: '不可选取',
          type: false
        },
        {
          menu: '操作项目3',
        },
        {
          menu: '操作项目4',
        }
      ],
      cancelTitle: "选择拨打的电话",
      lists: ['60190019', '60190020', '60190020']
    };
  },
  methods: {
    showformalert0: function() {
      this.showPopup0 = true;
    },
    showformalert1: function() {
      this.showPopup1 = true;
    },
     showformalert2: function() {
      this.showPopup2 = true;
    },
    showformalert3: function() {
      this.showPopup3 = true;
    },
    click_menu_callback(index, item) {
      console.log('click_menu_callback   ', index);
      console.log('click_menu_callback   ', item);
    }
  }
};
</script>
```

### API

#### ActionSheet Props

| 属性        | 说明                                                | 类型    | 默认值 | 备注                                |
| ----------- | --------------------------------------------------- | ------- | ------ | ----------------------------------- |
| menus       | 需要展示的数据                                      | Array   | []     | -                                   |
| show-cancel | 是否显示取消按钮                                    | Boolean | true   | -                                   |
| showPopup   | 是否 show 出此页面                                  | Boolean | false  | -                                   |
| noClick     | 是否显示不可用                                      | Boolean | false  | -                                   |
| slot        | 插槽(标题级说明)                                    | --      | --     | "<span>删除后就无法撤消了哦</span>" |
| subTitle    | 副标题（请添加编号，示例：subTitle0 为第 1 个菜单） | --      | --     |                                     |
| showPopup   | 是否 show 出此页面                                  | Boolean | false  | -                                   |
| bigHeight   | 是否使用列表双行文字高度                            | Boolean | false  | -                                   |

#### ActionSheet Methods

| 方法名        | 说明                 | 方法参数 | 参数默认值 | 备注 |
| ------------- | -------------------- | -------- | ---------- | ---- |
| on-click-menu | 点击列表内容执行方法 | -        | -          | -    |
