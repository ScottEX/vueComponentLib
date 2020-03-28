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
@import '../styles/global.less';

.md-button {
  position: relative;
  display: block;
  box-sizing: border-box;
  height: 46px;
  overflow: visible;
  font-weight: @font-weight-medium;
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
    background-color: @color-bg-inverse;
    .hairline(all, #dddddd, 7px, @border-width-base);

    &:active {
      .hairline(all, #42a2d7, 7px, @border-width-base);
    }

    &.disabled {
      color: #ddd;
      background-color: #fff;
      .hairline(all, #dddddd, 7px, @border-width-base);
    }
  }

  &.primary {
    color: @color-text-base-inverse;
    background-color: #42a2d7;
    .hairline(all, #42a2d7, 7px, @border-width-base);

    &:active {
      background-color: #2f88ba;
    }

    &.disabled {
      color: #fff;
      background-color: @color-bg-disabled;
      .hairline(all, @color-bg-disabled, 7px, @border-width-base);
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
    font-size: @font-base-md;
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
    color: @color-primary;
    font-weight: @font-weight-normal;
    font-size: @font-base-md;
    line-height: 1;
    background: transparent;

    &.inactive {
      color: color-text-disabled;
      opacity: 1;
    }
  }

  &.inactive {
    opacity: @opacity-disabled;

    &.disabled {
      opacity: 1;
    }
  }
}
</style>
