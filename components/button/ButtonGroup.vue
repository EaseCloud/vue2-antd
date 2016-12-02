<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="babel">
  import { defaultProps, oneOf } from '../../utils/props';

  export default {
    props: defaultProps({
      prefixCls: 'ant-btn-group',
      size: oneOf(['large', 'small', undefined]),
    }),

    computed: {
      classes() {
        const sz = ({ large: 'lg', small: 'sm' })[this.size] || '';
        return {
          [this.prefixCls]: 1,
          [`${this.prefixCls}-${sz}`]: !!sz,
        };
      },
    },
  };
</script>
