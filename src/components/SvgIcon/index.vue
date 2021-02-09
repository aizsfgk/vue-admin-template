<template>
  <!-- 外部标签 -->
  <div v-if="isExternal" :style="styleExternalIcon" class="svg-external-icon svg-icon" v-on="$listeners" />
  <!-- svg标签 -->
  <!-- aria-hidden="true" 会把整个元素从可访问性API中移除 -->
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
// doc: https://panjiachen.github.io/vue-element-admin-site/feature/component/svg-icon.html#usage
import { isExternal } from '@/utils/validate'

export default {
  name: 'SvgIcon',
  props: {
    // 图标类
    iconClass: {
      type: String,
      required: true
    },
    // 类名
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    // 是否是外部的
    isExternal() {
      return isExternal(this.iconClass)
    },
    // icon名字
    iconName() {
      return `#icon-${this.iconClass}`
    },
    // svg类
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
    // 外部图形遮罩
    // https://www.cnblogs.com/zhinian-/p/12572844.html
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        '-webkit-mask': `url(${this.iconClass}) no-repeat 50% 50%`
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover!important;
  display: inline-block;
}
</style>
