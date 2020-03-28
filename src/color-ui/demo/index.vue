<template>
  <demo-section>
    <demo-block title="文字">
      <div class="demo-color-sample">
        <div>
          <div style="background-color: #222;" />
          <p style="color: #222;">#222222</p>
          <p style="color: #222;">标题</p>
        </div>
        <div>
          <div style="background-color: #fff;" />
          <p style="color: #fff;">#FFF</p>
          <p style="color: #fff;">返白</p>
        </div>
        <div>
          <div style=" background-color: #666;" />
          <p style="color: #666;">#666666</p>
          <p style="color: #666;">次要信息</p>
        </div>
        <div>
          <div style=" background-color: #999;" />
          <p style="color: #999;">#999999</p>
          <p style="color: #999;">辅助信息</p>
        </div>
        <div>
          <div style=" background-color: #42a2d7;" />
          <p style="color: #42a2d7;">#42a2d7</p>
          <p style="color: #42a2d7;">链接色</p>
        </div>
        <div>
          <div style=" background-color: #007aff;" />
          <p style="color: #007aff;">#007aff</p>
          <p style="color: #007aff;">弹框链接色</p>
        </div>
        <div>
          <div style=" background-color: #ea5454;" />
          <p style="color: #ea5454;">#ea5454</p>
          <p style="color: #ea5454;">错误警示</p>
        </div>
        <div>
          <div style=" background-color: #ffa40e;" />
          <p style="color: #ffa40e;">#ffa40e</p>
          <p style="color: #ffa40e;">资金收入</p>
        </div>
        <div>
          <div style=" background-color: #fff;" />
          <p style="color: #fff;">#ffffff</p>
          <p style="color: #fff;">反白色</p>
        </div>
      </div>
    </demo-block>
    <demo-block title="背景色/分割线">
      <div class="demo-color-sample">
        <div>
          <div style="background-color: #42a2d7;" />
          <p>#42a2d7</p>
          <p>品牌色</p>
        </div>
        <div>
          <div style="background-color: #f2f2f2;" />
          <p>#f2f2f2</p>
          <p>APP背景色</p>
        </div>
        <div>
          <div style="background-color: #e2e4ea;" />
          <p>#E2E4EA</p>
          <p>禁用背景色</p>
        </div>
        <div>
          <div style="background-color: #f9fafb;" />
          <p>#F9FAFB</p>
          <p>条目点击态</p>
        </div>
        <div>
          <div style="background-color: rgba(37, 38, 45, .7);" />
          <p>37,38,45,0.7</p>
          <p>弹窗蒙层</p>
        </div>
        <div>
          <div style=" background-color: #ddd;" />
          <p>#dddddd</p>
          <p>分割线A</p>
        </div>
        <div>
          <div style=" background-color: #dbdbdb;" />
          <p>#dbdbdb</p>
          <p>分割线B</p>
        </div>
      </div>
    </demo-block>
    <demo-block title="系统图标">
      <div class="demo-color-sample">
        <div>
          <div style=" background-color: #ea5454;" />
          <p>#ea5454</p>
        </div>
        <div>
          <div style=" background-color: #ffe0e0;" />
          <p>#ffe0e0</p>
        </div>
        <div>
          <div style=" background-color: #ffa40e;" />
          <p>#ffa40e</p>
        </div>
        <div>
          <div style=" background-color: #ffe6d4;" />
          <p>#ffe6d4</p>
        </div>
        <div>
          <div style=" background-color: #42a2d7;" />
          <p>#42a2d7</p>
        </div>
        <div>
          <div style=" background-color: #d3eefc;" />
          <p>#d3eefc</p>
        </div>
        <div>
          <div style=" background-color: #3eb88c;" />
          <p>#3eb88c</p>
        </div>
        <div>
          <div style=" background-color: #dff1d3;" />
          <p>#dff1d3</p>
        </div>
        <div>
          <div style=" background-color: #9b9b9b;" />
          <p>#9b9b9b</p>
        </div>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  name: 'demo-color-ui',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
};
</script>
<style lang="less">
.demo-color-sample {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 10px;
  font-size: 12px;

  > div {
    width: 25%;
    margin-bottom: 20px;

    > div {
      width: 70px;
      height: 70px;
      margin: 0 auto;
    }

    > p {
      text-align: center;
    }
  }
}
</style>
