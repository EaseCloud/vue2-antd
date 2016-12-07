<template>

  <div class="ant-input-number"
       :class="classes">

    <div class="ant-input-number-handler-wrap">
      <span unselectable
            @mousedown="startChange('increase')"
            @mouseup="stopChange"
            @mouseleave="stopChange"
            class="ant-input-number-handler ant-input-number-handler-up">
        <span unselectable
              class="ant-input-number-handler-up-inner">
        </span>
      </span>
      <span unselectable
            @mousedown="startChange('decrease')"
            @mouseup="stopChange"
            @mouseleave="stopChange"
            class="ant-input-number-handler ant-input-number-handler-down">
        <span unselectable
              class="ant-input-number-handler-down-inner">
        </span>
      </span>
    </div>

    <div class="ant-input-number-input-wrap">
      <input :min="min" :max="max"
             autocomplete="off"
             :placeholder="placeholder"
             :disabled="disabled"
             :value="decimalPlaces === -1 ? value : value.toFixed(decimalPlaces)"
             @change="update"
             class="ant-input-number-input"/>
    </div>

  </div>

</template>

<script lang="babel">
  let timerTimeout = null;
  let timerInterval = null;
  export default {
    props: {
      // v-model
      value: {
        type: Number,
        default: 0,
      },  // any type
      // public props
      size: {
        type: String,
        validator(value) {
          return ['small', 'large'].indexOf(value) > -1;
        },
      },
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      step: {
        type: Number,
        default: 1,
      },
      disabled: Boolean,
      placeholder: String,
      decimalPlaces: {
        type: Number,
        default: 0,
      },
    },
    computed: {
      classes() {
        // Value mapping
        const sz = ({ large: 'lg', small: 'sm' })[this.size] || '';
        // Integration
        return {
          [`ant-input-number-${sz}`]: !!this.size,
        };
      },
    },
    methods: {
      setValue(val) {
        const vm = this;
        let value = Number(Number(val).toFixed(12));
        if(vm.max !== undefined) value = Math.min(vm.max, value);
        if(vm.min !== undefined) value = Math.max(vm.min, value);
        if(vm.decimalPlaces !== undefined)  value = Number(value.toFixed(vm.decimalPlaces));
        vm.$emit('input', value);
      },
      increase() {
        const vm = this;
        vm.setValue(vm.value + vm.step);
      },
      decrease() {
        const vm = this;
        vm.setValue(vm.value - vm.step);
      },
      startChange(action) {
        this[action]();
        timerTimeout = setTimeout(() => {
          timerTimeout = null;
          timerInterval = setInterval(() => {
            this[action]();
          }, 50);
        }, 500)
      },
      stopChange() {
        if (timerTimeout) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
        if (timerInterval) {
          clearInterval(timerInterval);
          timerInterval = null;
        }
      },
      update(e) {
        this.setValue(e.target.value);
      },
    },
  };
</script>

