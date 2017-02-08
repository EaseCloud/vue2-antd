<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="babel">
  /**
   * 栅格 - 行
   * @link: https://ant.design/components/grid
   */
  export default {
    props: {
      // public props
      gutter: {
        type: Number,
        default: 0,
      },
      type: {
        type: String,
        validator(value) {
          return /^|flex|$/.test(`|${value}|`);
        },
      },
      align: {
        type: String,
        validator(value) {
          return /^|top|middle|bottom|$/.test(`|${value}|`);
        },
      },
      justify: {
        type: String,
        validator(value) {
          return /^|end|center|space-around|space-between|$/.test(`|${value}|`);
        },
      },
    },
    computed: {
      classes() {
        const prefix = `ant-row${this.type === 'flex' ? '-flex' : ''}`;
        // Integration
        return {
          [prefix]: true,
          [`${prefix}-${this.justify}`]: this.type === 'flex' && !!this.justify,
          [`${prefix}-${this.align}`]: this.type === 'flex' && !!this.align,
        };
      },
    },
  };
</script>

