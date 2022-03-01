<template>
  <div v-if="userData.name && userData.age">
    <h2>Персональные данные</h2>
    {{ userData.name }}, {{ userData.age }} {{ yearsDeclension(userData.age) }}

    <div v-if="userData.children.length">
      Дети
      <div v-for="child in userData.children" :key="child.id">
        {{ child.name }}, {{ child.age }} {{ yearsDeclension(child.age) }}
      </div>
    </div>
  </div>

  <div v-else>
    <h2>Вы не предоставили свои данные</h2>
    <p>
      Заполните
      <router-link to="/user-form">форму</router-link>
    </p>
  </div>
</template>

<script>
import store from "@/store";
import { yearsDeclension } from "@/helpers/yearsDeclension";

export default {
  name: "UserPreview",
  data() {
    return {
      userData: store.state.userData,
      yearsDeclension
    }
  },
  mounted() {
    store.init()
  }
};
</script>

<style scoped></style>