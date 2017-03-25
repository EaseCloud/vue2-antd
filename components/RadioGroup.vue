<template>
  <div class="ant-radio-group" :class="classes">
    <slot>
      <template v-if="type=='button'">
        <v-radio-button v-for="(text, name) in options"
                   :key="name"
                   @check="!readonly && $emit('input', $event)"
                   :value="name"
                   :checked="value==name">{{text}}
        </v-radio-button>
      </template>
      <template v-else>
        <v-radio v-for="(text, name) in options"
                   :key="name"
                   @check="!readonly && $emit('input', $event)"
                   :value="name"
                   :checked="value==name">{{text}}
        </v-radio>
      </template>
    </slot>
  </div>
</template>

<script lang="babel">
  export default {
    props: {
      readonly: {
        type: Boolean,
        default: false,
      },
      value: { type: String },
      options: { type: Object },
      type: {
        type: String,
        validator(value) {
          return ['button'].indexOf(value) > -1;
        },
      },
      size: {
        type: String,
        validator(value) {
          return ['large', 'small'].indexOf(value) > -1;
        },
      },
    },
    computed: {
      classes() {
        return {
          [`ant-btn-group-${this.size}`]: !!this.size,
        };
      },
    },
  };
</script>

