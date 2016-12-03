<template>

  <span class="ant-input-wrapper"
        :class="wrapperClasses">

    <textarea v-if="type=='textarea'"
              class="ant-input"
              :class="classes"
              :placeholder="placeholder"
              :rows="rows"
              @input="update"></textarea>

    <template v-else>
      <span class="ant-input-group-addon"
            v-if="$slots.before"><slot name="before"></slot></span>
      <input :type="type"
             class="ant-input"
             :class="classes"
             :placeholder="placeholder"
             :value="value"
             @input="update"/>
      <span class="ant-input-group-addon"
            v-if="$slots.after"><slot name="after"></slot></span>
    </template>

  </span>

</template>

<script lang="babel">
  // TODO: search, autoresize, number
  export default {
    props: {
      // v-model
      value: null,  // any type
      // public props
      type: {
        type: String,
        default: 'text',
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
      placeholder: String,
      autosize: [Boolean, Object],
      rows: {
        type: Number,
        default: 4,
      },
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
      update(e) {
        console.log(e.target.value);
        this.$emit('input', this.value);
      },
    },
  };
</script>

