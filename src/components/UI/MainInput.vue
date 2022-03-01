<template>
  <div>{{ label }}</div>
  <input
    :type="type"
    v-model="modelValue"
    @input="changeValue"
    required
  />
</template>

<script>
export default {
  name: "MainInput",
  props: {
    type: {
      type: String,
      defaultValue: "text",
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: [String, Number],
  },
  methods: {
    changeValue(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
  inheritAttrs: false
};
</script>

<style scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
