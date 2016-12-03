<template>
  <span class="ant-switch"
        :class="classes"
        tabindex="0"
        @click="toggle"
        @keydown.enter.space="toggle">
    <span class="ant-switch-inner">
      <slot></slot>
      <span v-if="value"><slot name="checked"></slot></span>
      <span v-else><slot name="unchecked"></slot></span>
    </span>
  </span>
</template>

<script lang="babel">
  export default {
    props: {
      // public props
      disabled: Boolean,
      size: {
        type: String,
        validator(value) {
          return ['small'].indexOf(value) > -1;
        }
      },
      // v-model
      value: Boolean,
    },

    computed: {
      classes() {
        return {
          'ant-switch-checked': this.value,
          'ant-switch-disabled': this.disabled,
          [`ant-switch-${this.size}`]: !!this.size,
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
