<template>
  <button :type="htmlType"
          class="ant-btn"
          :class="classes"
          @keydown.enter.space="onclick"
          @click="onclick">
    <i :class="iconClasses" v-if="icon || loading"></i>
    <span><slot></slot></span>
  </button>
</template>

<script lang="babel">
  export default {
    props: {
      // router
      to: Object,
      // public props
      icon: String,
      loading: Boolean,
      htmlType: {
        type: String,
        default: 'button',
      },
      type: {
        type: String,
        validator(value) {
          return ['primary', 'ghost', 'dashed'].indexOf(value) > -1;
        },
      },
      size: {
        type: String,
        validator(value) {
          return ['small', 'large'].indexOf(value) > -1;
        },
      },
      shape: {
        type: String,
        validator(value) {
          return ['circle'].indexOf(value) > -1;
        },
      },
    },
    computed: {
      iconClasses() {
        const icon = this.loading ? 'loading' : this.icon;
        return {
          'anticon': true,
          'anticon-spin': this.loading,
          [`anticon-${icon}`]: true,
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

