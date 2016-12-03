const components = {
  AntButton: require('./components/Button.vue'),
  AntButtonGroup: require('./components/ButtonGroup.vue'),
  AntInput: require('./components/Input.vue'),
  AntSearch: require('./components/Search.vue'),
  AntSwitch: require('./components/Switch.vue'),
};

export default {
  install(Vue, options = {}) {
    // Aliases porting for 'v-' prefix
    Object.keys(components).forEach(key => {
      if (/^Ant/.test(key)) {
        components[key.replace(/^Ant/, 'V')] = components[key];
      }
    });
    // TODO: Custom prefix: camelize the option and pad to front.
    if (options.prefix) {
    }
    // Install mixin.
    Vue.mixin({ components });
  },
};

