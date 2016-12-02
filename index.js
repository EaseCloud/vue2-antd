const components = {
  AntdButton: require('./components/button/Button.vue'),
  AntdButtonGroup: require('./components/button/Button.vue'),
  AntdSwitch: require('./components/switch/Switch.vue'),
};

// Aliases
components.VButton = components.AntdButton;
components.ButtonGroup = components.AntdButtonGroup;
components.VSwitch = components.AntdSwitch;

export default {
  install(Vue, options) {
    Vue.mixin({ components });
  },
};

