<template>
  <div v-if="userData.name && userData.age">
    <h2 class="block-title">Персональные данные</h2>
    <p class="user-info">
      {{ userData.name }}, {{ userData.age }} {{ yearsDeclension(userData.age) }}
    </p>

    <div
      v-if="userData.children.length"
      class="children-block"
    >
      <h2 class="block-title">Дети</h2>
      <div
        v-for="child in userData.children"
        :key="child.id"
      >
        <p class="child-info">
          {{ child.name }}, {{ child.age }} {{ yearsDeclension(child.age) }}
        </p>
      </div>
    </div>
  </div>

  <div v-else>
    <h2 class="block-title">Вы не предоставили свои данные!</h2>
    <p class="no-info">
      Заполните
      <router-link to="/user-form">форму</router-link>
    </p>
  </div>
</template>

<script>
import store from "@/store";
import { yearsDeclension } from "@/helpers/yearsDeclension";

export default {
  name: "UserPreviewPage",
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

<style scoped>
.user-info,
.child-info {
  margin-top: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.children-block {
  margin-top: 60px;
}

.child-info {
  display: inline-block;
  padding: 10px 20px;
  background: #F1F1F1;
  border-radius: 5px;
}

.no-info {
  margin-top: 20px;
}

.no-info a {
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;
  transition: color 0.3s;
}

.no-info a:hover {
  color: rgba(17, 17, 17, 0.8);
}
</style>