<template>
  <demo-section>
    <demo-block title="底部模态弹框action_sheet_01">
      <com-botton @click.native="showformalert0">action_sheet_01(默认)</com-botton>
      <com-action-sheet-a
        v-model="showPopup0"
        @on-click-menu="click_menu_callback"
        :menus="lists1"
        show-cancel
      />
    </demo-block>
    <demo-block title="底部模态弹框action_sheet_01">
      <com-botton @click.native="showformalert1">action_sheet_01(提示)</com-botton>
      <com-action-sheet-a
        v-model="showPopup1"
        @on-click-menu="click_menu_callback"
        :menus="lists1"
        show-cancel
        big-height
      >
        <div slot="subTitle0" class="subTitle">需要强调的提示性文字</div>
        <div slot="subTitle1" class="subTitle-tips">需要强调的提示性文字</div>
      </com-action-sheet-a>
    </demo-block>
    <demo-block title="底部模态弹框action_sheet_01">
      <com-botton @click.native="showformalert2">列表中不可选取项</com-botton>
      <com-action-sheet-a
        v-model="showPopup2"
        @on-click-menu="click_menu_callback"
        :menus="lists2"
        show-cancel
        no-click
        big-height
      >
        <div slot="subTitle0" class="subTitle">需要强调的提示性文字</div>
        <div slot="subTitle1" class="subTitle">不可选取时提示性文字</div>
      </com-action-sheet-a>
    </demo-block>
    <demo-block title="底部模态弹框action_sheet_02">
      <com-botton @click.native="showformalert3">action_sheet_02(圆角)</com-botton>
      <com-action-sheet-b
        v-model="showPopup3"
        @on-click-menu="click_menu_callback"
        :menus="lists"
        :cancel-title="cancelTitle"
        show-cancel
      />
    </demo-block>
  </demo-section>
</template>
<script>
// 引入组件(下面的引入只是示例)
import ComBotton from '../../button';
import ComActionSheetA from '../actionSheet01';
import ComActionSheetB from '../actionSheet02';

export default {
  name: 'demo-com-action-sheet',
  components: {
    ComBotton,
    ComActionSheetA,
    ComActionSheetB,
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
          type: false,
        },
        {
          menu: '操作项目3',
        },
        {
          menu: '操作项目4',
        },
      ],
      cancelTitle: '选择拨打的电话',
      lists: ['60190019', '60190020', '60190020'],
    };
  },
  methods: {
    showformalert0() {
      this.showPopup0 = true;
    },
    showformalert1() {
      this.showPopup1 = true;
    },
    showformalert2() {
      this.showPopup2 = true;
    },
    showformalert3() {
      this.showPopup3 = true;
    },
    click_menu_callback(index, item) {
      console.log('click_menu_callback   ', index);
      console.log('click_menu_callback   ', item);
    },
  },
};
</script>
<style lang='less'>
.subTitle {
  color: #fc882c;
  font-size: 0.26rem;
}

.subTitle-tips {
  color: #8b95a3;
  font-size: 0.26rem;
}
</style>
