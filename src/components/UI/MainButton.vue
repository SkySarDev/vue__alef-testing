<template>
  <button
    class="button"
    :class="variant"
    :type="type"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    variant: {
      type: String,
      required: false,
      default: 'contained'
    },
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'button'
    }
  }
};
</script>

<style scoped>
  .button {
    padding: 8px 18px;
    font-size: 14px;
    line-height: 24px;
    border: 2px solid transparent;
    border-radius: 100px;
    background-color: transparent;
    transition: all 0.3s;
    cursor: pointer;
  }

  .contained {
    background-color: #01A7FD;
    color: #FFF;
  }

  .contained:hover {
     background-color: #0F79AF;
   }

  .outlined {
    border: 2px solid #01A7FD;
    background-color: transparent;
    color: #01A7FD;
  }

  .outlined:hover {
    background-color: rgba(110, 65, 226, 0.04);
  }

  .text {
    color: #01A7FD;
    padding: 0;
  }

  .text:hover {
    color: #0F79AF;
  }
</style>