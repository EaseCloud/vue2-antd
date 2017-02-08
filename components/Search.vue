<template>
  <span class="ant-input-wrapper"
        :class="wrapperClasses">
      <span class="ant-input-group-addon"
            v-if="$slots.before"><slot name="before"></slot></span>
      <input :type="type"
             class="ant-input"
             :class="classes"
             :value="value"
             @input="$emit('input', value)"/>
      <span class="ant-input-group-addon"
            v-if="$slots.after"><slot name="after"></slot></span>
  </span>

</template>

<script lang="babel">
  // TODO: Not Implemented
  export default {
    props: {
      // v-model
      value: null,  // any type
      // public props
      htmlType: {
        type: String,
        default: 'button',
      },
      type: {
        type: String,
        validator(value) {
          return [
              'button', 'checkbox', 'date', 'datetime',
              'email', 'file', 'hidden', 'image',
              'month', 'number', 'password', 'radio',
              'range', 'reset', 'submit', 'text',
              'time', 'url', 'week', 'datetime-local',
              'textarea'].indexOf(value) > -1;
        },
      },
      size: {
        type: String,
        validator(value) {
          return ['small', 'large'].indexOf(value) > -1;
        },
      },
      disabled: Boolean,
      autosize: [Boolean, Object],
    },
    computed: {
      wrapperClasses() {
        return {
          'ant-input-group': !!(this.$slots.before || this.$slots.after),
        };
      },
      classes() {
        // Value mapping
        const sz = ({ large: 'lg', small: 'sm' })[this.size] || '';
        // Integration
        return {
          'ant-btn-icon-only': this.icon && !this.$slots.default,
          'ant-btn-loading': this.loading !== null && this.loading,
          [`ant-btn-${this.type}`]: !!this.type,
          [`ant-btn-${sz}`]: !!this.size,
          [`ant-btn-${this.shape}`]: !!this.shape,
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

