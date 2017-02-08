<template>
  <label class="ant-radio-button-wrapper"
         :class="wrapperClasses"
         @click="$emit('check', value)">
    <span class="ant-radio-button" :class="classes">
      <span class="ant-radio-button-inner"></span>
      <input type="radio"
             class="ant-radio-button-input"
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
          'ant-radio-button-wrapper-checked': !!this.checked,
        };
      },
      classes() {
        // Integration
        return {
          'ant-radio-button-checked': this.checked,
          'ant-radio-button-checked-1': this.checked,
          'ant-radio-button-disabled': this.disabled,
        };
      },
    },
  };
</script>

