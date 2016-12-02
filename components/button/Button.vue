<template>
  <button :type="htmlType || 'button'"
          :class="classes"
          @keydown.enter.space="onclick"
          @click="onclick">
    <i :class="iconClasses" v-if="icon || loading"></i>
    <span><slot></slot></span>
  </button>
</template>

<script lang="babel">
  import { defaultProps, oneOf } from '../../utils';

  export default {
    props: defaultProps({
      prefixCls: 'ant-btn',
      iconPrefixCls: 'anticon',
      htmlType: 'button',
      to: Object,

      // public props
      type: oneOf(['primary', 'ghost', 'dashed', undefined]),
      size: oneOf(['small', 'large', undefined]),
      icon: String,
      loading: Boolean,
      shape: oneOf(['circle', 'circle-outline', undefined]),
    }),
    computed: {
      iconClasses() {
        const icon = this.loading ? 'loading' : this.icon;
        return {
          [this.iconPrefixCls]: true,
          [`${this.iconPrefixCls}-${icon}`]: true,
          [`${this.iconPrefixCls}-spin`]: this.loading,
        };
      },
      classes() {
        // Value mapping
        const sz = ({ large: 'lg', small: 'sm' })[this.size] || '';
        // Integration
        return {
          [this.prefixCls]: true,
          [`${this.prefixCls}-${this.type}`]: !!this.type,
          [`${this.prefixCls}-${sz}`]: !!this.size,
          [`${this.prefixCls}-loading`]: this.loading !== null && this.loading,
          [`${this.prefixCls}-${this.shape}`]: !!this.shape,
          [`${this.prefixCls}-icon-only`]: this.icon && !this.$slots.default,
        };
      },
    },
    methods: {
      onclick(e) {
        const vm = this;
        // 实现路由跳转属性
        if (vm.to) vm.$root.$router.push(vm.to);
        vm.$emit('click', e);
      },
    },
  };
</script>
