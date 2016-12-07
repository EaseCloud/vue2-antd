<template>
  <div class="ant-btn-group" :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="babel">
  export default {
    props: {
      size: {
        type: String,
        validator(value) {
          return ['large', 'small'].indexOf(value) > -1;
        },
      },
    },
    computed: {
      classes() {
        const sz = ({ large: 'lg', small: 'sm' })[this.size] || '';
        return {
          [`ant-btn-group-${sz}`]: !!sz,
        };
      },
    },
  };
</script>

