<template>
  <h2 class="block-title">Персональные данные</h2>
  <div class="form-field">
    <main-input
      v-model.trim="userData.name"
      label="Имя"
    />
    <main-input
      v-model="userData.age"
      type="number"
      label="Возраст"
    />
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "UserForm",
  data() {
    return {
      userData: store.state.userData,
    };
  },
}
</script>

<style scoped>
  .form-field {
    margin-top: 20px;
  }

  .form-field div:not(:last-child) {
    margin-bottom: 10px;
  }
</style>