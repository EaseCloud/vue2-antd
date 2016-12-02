<template>
  <span :class="classes" tabindex="0" @click="toggle"
        @keydown.enter.space="toggle">
    <span :class="prefixCls + '-inner'">
      <slot></slot>
      <span v-if="value"><slot name="checked"></slot></span>
      <span v-else><slot name="unchecked"></slot></span>
    </span>
  </span>
</template>

<script lang="babel">
  import { defaultProps, oneOf } from '../../utils';

  export default {
    props: defaultProps({
      prefixCls: 'ant-switch',
      // public props
      disabled: Boolean,
      size: oneOf(['small', undefined]),
      // v-model
      value: Boolean,
    }),

    mounted() {
      console.log(this.$slots);
    },

    computed: {
      classes() {
        return {
          [this.prefixCls]: true,
          [`${this.prefixCls}-checked`]: this.value,
          [`${this.prefixCls}-disabled`]: this.disabled,
          [`${this.prefixCls}-${this.size}`]: !!this.size,
        };
      },
    },

    methods: {
      toggle() {
        const vm = this;
        if (vm.disabled) return;
        this.$emit('input', !vm.value);
        this.$emit('change', !vm.value);
      },
    },
  };

</script>
