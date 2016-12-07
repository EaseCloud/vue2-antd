<template>
  <div :class="classes"
       :style="styles">
    <slot></slot>
  </div>
</template>

<script lang="babel">
  /**
   * 栅格 - 列
   * @link: https://ant.design/components/grid
   */
  export default {
    props: {
      // public props
      span: {
        type: Number,
        validator(value) {
          return 1 <= value <= 24;
        },
      },
      order: {
        type: Number,
        default: 0,
        validator(value) {
          return 1 <= value <= 24;
        },
      },
      offset: {
        type: Number,
        default: 0,
        validator(value) {
          return 1 <= value <= 24;
        },
      },
      push: {
        type: Number,
        default: 0,
        validator(value) {
          return 1 <= value <= 24;
        },
      },
      pull: {
        type: Number,
        default: 0,
        validator(value) {
          return 1 <= value <= 24;
        },
      },
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object],
    },
    computed: {
      styles() {
        const styles = {};
        if (this.$parent.gutter) {
          styles['margin-top'] = `${this.$parent.gutter}px`;
          styles['margin-bottom'] = `${this.$parent.gutter}px`;
        }
        return styles;
      },
      classes() {
        // basic
        const classes = {
          [`ant-col-${this.span}`]: !!this.span,
        };
        // actions
        ['pull', 'push', 'offset', 'order'].forEach(action => {
          if (this[action]) classes[`ant-col-${action}-${this[action]}`] = true;
        });
        // responsive
        ['xs', 'sm', 'md', 'lg'].forEach(sz => {
          const val = this[sz];
          if (!val) return;
          if (typeof(val) === 'number') {
            classes[`ant-col-${sz}-${val}`] = true;
          } else if (typeof(val) === 'object') {
            if (val.span) classes[`ant-col-${sz}-${val.span}`] = true;
            ['pull', 'push', 'offset', 'order'].forEach(action => {
              if (val[action]) classes[`ant-col-${action}-${sz}-${val[action]}`] = true;
            });
          }
        });
        // done
        return classes
      },
    },
  };
</script>

