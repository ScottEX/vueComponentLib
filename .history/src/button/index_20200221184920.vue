<template>
  <button
    :type="nativeType"
    class="md-button"
    :class="[
      type,
      disabled ? 'disabled' : '',
      inline ? 'inline' : 'block',
      round ? 'round' : '',
      noRound? 'no-round' : '',
      size === 'small' ? 'small' : ''
    ]"
    :disabled="disabled"
    v-on="$listeners"
  >
    <div class="md-button-inner">
      <template v-if="icon" />
      <p class="md-button-content">
        <slot />
      </p>
    </div>
  </button>
</template>

<script>
export default {
  name: 'com-button',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    nativeType: {
      type: String,
      default: 'button',
    },
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'large',
    },
    noRound: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less">

@font-family-normal : "Helvetica Neue",
  Helvetica,
  "PingFang SC",
"Hiragino Sans GB",
"Microsoft YaHei",
"微软雅黑",
Arial,
sans-serif;

.md-button {
  position: relative;
  display: block;
  box-sizing: border-box;
  height: 46px;
  overflow: visible;
  font-weight: 500;
  font-size: 16px;
  font-family: @font-family-normal;
  line-height: 92px;
  letter-spacing: 2px;
  text-align: center;
  border: none;
  border-radius: 7px;
  outline: none;
  transition: all 0.3s;
  -webkit-appearance: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;

  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-word;
  }

  &-content {
    display: flex;
    align-items: center;
    padding: 0 6px;

    .md-icon {
      padding: 0;
    }
  }
}

.md-button {
  position: relative;

  .md-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
  }

  &.default {
    color: #42a2d7;
    background-color: #FFF;
    .hairline(all, #dddddd, 7px, 1PX);

    &:active {
      .hairline(all, #42a2d7, 7px, 1px);
    }

    &.disabled {
      color: #ddd;
      background-color: #fff;
      .hairline(all, #dddddd, 7px, 1px);
    }
  }

  &.primary {
    color: #FFF;
    background-color: #42a2d7;
    .hairline(all, #42a2d7, 7px, 1px);

    &:active {
      background-color: #2f88ba;
    }

    &.disabled {
      color: #fff;
      background-color: #E2E4EA;
      .hairline(all, #E2E4EA, 7px, 1PX);
    }
  }

  &.round {
    border-radius: 92px;

    &::after {
      border-radius: 92px !important;
    }
  }

  &.no-round {
    border-radius: 0;

    &::after {
      border-radius: 0 !important;
    }
  }

  &.inline {
    display: inline-block;
    padding: 0 16px;
  }

  &.block {
    width: 100%;
  }

  &.small {
    height: 56px;
    font-size: 28px;
    line-height: 56px;

    &.round {
      border-radius: 56px;

      &::after {
        border-radius: 56px;
      }
    }
  }

  &.link {
    display: inline;
    color: #42a2d7;
    font-weight: 400;
    font-size: 28px;
    line-height: 1;
    background: transparent;

    &.inactive {
      color: color-text-disabled;
      opacity: 1;
    }
  }

  &.inactive {
    opacity: .3;

    &.disabled {
      opacity: 1;
    }
  }
}
</style>
