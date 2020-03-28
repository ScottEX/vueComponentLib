<template>
  <demo-section>
    <demo-block title="字体">
      <div class="demo-text-sample">
        <div class="font-family-normal" style="font-size: 16px;">中文字体演示</div>
        <div class="font-family-number" style="font-size: 16px;">56,789.00</div>
      </div>
    </demo-block>
    <demo-block title="标题">
      <div class="demo-text-sample">
        <div style="font-size: 30px;">一级标题 60px</div>
        <div style="font-size: 18px;">二级标题 36px</div>
        <div style="font-size: 16px;">三级标题 32px</div>
        <div style="font-size: 14px;">副标题 28px</div>
      </div>
    </demo-block>
    <demo-block title="通用内容">
      <div class="demo-text-sample">
        <div style="font-size: 16px;">通用内容 - 默认 32px</div>
        <div style="font-size: 14px;">通用内容 - 中 28px</div>
        <div style="font-size: 12px;">通用内容 - 小 24px</div>
        <div style="font-size: 14px;">详细提示内容 28px</div>
      </div>
    </demo-block>
    <demo-block title="金额数字">
      <div class="demo-text-sample">
        <div style="font-size: 28px;">5,000.00 金额 大 56px</div>
        <div style="font-size: 24px;">50,000.00 金额 中 48px</div>
        <div style="font-size: 20px;">5,000.00 金额 小 40px</div>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  name: 'demo-font-ui',
};
</script>
<style lang="less">
@import '../../styles/global.less';

.demo-text-sample {
  margin: 0 15px;
  padding: 0 32px;
  padding-top: 20px;
  background-color: #fff;

  .font-family-normal {
    font-family: @font-family-normal;
  }

  .font-family-number {
    font-family: @font-family-number;
  }

  > div {
    padding-bottom: 20px;
  }
}
</style>
