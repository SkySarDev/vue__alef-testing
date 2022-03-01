<template>
  <div class="input-border">
    <label>
      {{ label }}
      <input
        :type="type"
        v-model="modelValue"
        @input="changeValue"
        required
      />
    </label>
  </div>
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

  input {
    display: block;
    width: 100%;
    border: 0;
    font-size: 14px;
    line-height: 24px;
    align-items: center;
    color: #111111;
  }

  .input-border {
    border: 1px solid #F1F1F1;
    border-radius: 4px;
    padding: 8px 16px;
  }

  label {
    font-size: 13px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.48);
  }
</style>
