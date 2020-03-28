<template>
  <div class="bob-action-sheet">
    <transition name="vux-actionsheet-mask">
      <div
        class="weui-mask weui-mask_transparent"
        @click="onClickingMask"
        v-show="show"
        @touchmove.prevent
      />
    </transition>
    <div
      class="weui-actionsheet"
      :class="{'weui-actionsheet_toggle': show}"
      ref="iOSMenu"
      @touchmove.prevent
    >
      <div class="weui-actionsheet__menu" v-if="!noClick">
        <div class="weui-actionsheet__cell" v-if="hasHeaderSlot">
          <slot name="header" />
        </div>
        <div
          class="weui-actionsheet__cell vux-actionsheet-menu-default"
          v-for="(text, key) in menus"
          @touchmove.prevent
          :key="key"
        >
          <div
            class="weui-actionsheet__text"
            :class="[bigHeight ? 'title-menu-height' : '']"
            @click="[text.type == false ? '':onMenuClick(text, key)]"
          >
            <div>
              <div>{{ text }}</div>
              <div>
                <slot :name="`subTitle${key}`" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-actionsheet__menu" v-else>
        <div class="weui-actionsheet__cell" v-if="hasHeaderSlot">
          <slot name="header" />
        </div>
        <div
          v-else
          class="weui-actionsheet__cell vux-actionsheet-menu-default"
          v-for="(item, key) in menus"
          :key="key"
          @touchmove.prevent
        >
          <div
            class="weui-actionsheet__text"
            :class="[item.type == false? 'no-chick':'',bigHeight ? 'title-menu-height' : '']"
            @click="[item.type == false ? '':onMenuClick(item, key)]"
          >
            <div>
              <div>{{ item.menu }}</div>
              <div>
                <slot :name="`subTitle${key}`" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="weui-actionsheet__action"
        @click="emitEvent('on-click-menu', 'cancel')"
        v-if="showCancel"
        @touchmove.prevent
      >
        <div
          @touchmove.prevent
          class="weui-actionsheet__cell weui-actionsheet__text"
        >
          {{ cancelText || "取消" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'com-action-sheet-a',
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    noClick: Boolean,
    bigHeight: Boolean,
    theme: {
      type: String,
      default: 'ios',
    },
    menus: {
      type: [Object, Array],
      default: () => ({}),
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true,
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      hasHeaderSlot: false,
      show: false,
    };
  },
  watch: {
    show(val) {
      this.stop();
      this.$emit('input', val);
      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(() => {
          this.fixIos(100);
        }, 200);
      }
    },
    value: {
      handler(val) {
        this.show = val;
      },
      immediate: true,
    },
  },
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(() => {
      this.$tabbar = document.querySelector('.weui-tabbar');
      this.$refs.iOSMenu &&
        this.$refs.iOSMenu.addEventListener(
          'transitionend',
          this.onTransitionEnd
        );
    });
  },
  beforeDestroy() {
    this.fixIos(100);
    this.$refs.iOSMenu &&
      this.$refs.iOSMenu.removeEventListener(
        'transitionend',
        this.onTransitionEnd
      );
  },
  methods: {
    onTransitionEnd() {
      this.$emit(this.show ? 'on-after-show' : 'on-after-hide');
    },
    onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text);
      } else if (text.type !== 'disabled' && text.type !== 'info') {
        if (text.value || text.value === 0) {
          this.emitEvent('on-click-menu', text.value, text);
        } else {
          this.emitEvent('on-click-menu', key, text.menu);
          this.show = false;
        }
      }
    },
    onClickingMask() {
      this.move();
      this.$emit('on-click-mask');
      this.closeOnClickingMask && (this.show = false);
    },
    emitEvent(event, menu, item) {
      this.move();
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        let _item = item;
        if (typeof _item === 'object') {
          _item = JSON.parse(JSON.stringify(_item));
        }
        this.$emit(event, menu, _item);
        this.$emit(`${event}-${menu}`);
        this.closeOnClickingMenu && (this.show = false);
      }
    },
    fixIos(zIndex) {
      if (
        this.$el.parentNode &&
        this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1
      ) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    },
    move() {
      document.addEventListener('touchmove', ev => {
        ev.preventDefault;
      }); // 禁止页面滑动
    },
    stop() {
      document.addEventListener('touchmove', ev => {
        ev.preventDefault;
      }); // 禁止页面滑动
    },
  },
};
</script>
<style lang="less" scoped>
@import '../../styles/weui/widget/weui_tips/weui_mask';
@import '../../styles/weui/widget/weui_tips/weui_actionsheet';

.weui-actionsheet__cell {
  padding: 0 !important;
}

.bob-action-sheet {
  .weui-actionsheet {
    opacity: 0;
  }

  .weui-actionsheet_toggle {
    opacity: 1;
  }
}

.vux-actionsheet-menu-default {
  color: #000;
}

.weui-actionsheet__text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  color: #007aff;
  font-size: 17px;
}
</style>
