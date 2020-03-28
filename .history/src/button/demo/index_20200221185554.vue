<template>
  <demo-section>
    <demo-block title="主按钮">
      <com-button type="primary" no-round @click="iconClick01">正常态</com-button>
      <com-button type="primary" no-round disabled>不可用</com-button>
      <com-button type="primary" @click="iconClick02">正常态-圆角</com-button>
      <com-button type="primary" disabled>不可用-圆角</com-button>
    </demo-block>
  </demo-section>
</template>
<script>
import ComButton from '../index';

export default {
  name: 'demo-com-button',
  components: {
    ComButton,
  },
  methods: {
    iconClick01() {
      console.log('正常态');
    },
    iconClick02() {
      console.log('正常态-圆角');
    },
  },
};
</script>
<style lang="less"></style>
