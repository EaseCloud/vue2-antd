<template>
  <label class="ant-radio-wrapper"
         :class="wrapperClasses"
         @click="$emit('check', value)">
    <span class="ant-radio" :class="classes">
      <span class="ant-radio-inner"></span>
      <input type="radio"
             class="ant-radio-input"
             :checked="checked"
             :value="value"/>
    </span>
    <span><slot></slot></span>
  </label>
</template>

<script lang="babel">
  export default {
    props: {
      // public props
      checked: Boolean,
      value: String,
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      wrapperClasses() {
        return {
          'ant-radio-wrapper-checked': !!this.checked,
        };
      },
      classes() {
        // Integration
        return {
          'ant-radio-checked': this.checked,
          'ant-radio-checked-1': this.checked,
          'ant-radio-disabled': this.disabled,
        };
      },
    },
  };
</script>

