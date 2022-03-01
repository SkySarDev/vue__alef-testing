<template>
  <form @submit.prevent="save">
    <h2>Персональные данные</h2>
    <main-input
      v-model.trim="userData.name"
      label="Имя"
    />
    <main-input
      v-model="userData.age"
      type="number"
      label="Возраст"
    />

    <h2>Дети (макс. 5)</h2>
    <button
      v-if="userData.children.length < 5"
      @click="addChildren"
    >
      Добавить ребенка
    </button>

    <template
      v-for="child in userData.children"
      :key="child.id"
    >
      <main-input
        v-model.trim="child.name"
        label="Имя"
      />
      <main-input
        v-model="child.age"
        type="number"
        label="Возраст"
      />
      <button
        @click="deleteChildren(child.id)"
        type="button"
      >
        Удалить
      </button>
    </template>

    <button type="submit">Сохранить</button>
  </form>
</template>

<script>
import MainInput from "@/components/UI/MainInput";
import store from "@/store";

export default {
  name: "UserForm",
  components: {
    MainInput,
  },
  data() {
    return {
      userData: store.state.userData,
    };
  },
  mounted() {
    store.init()
  },
  methods: {
    addChildren() {
      store.addChildren();
    },
    deleteChildren(id) {
      store.deleteChildren(id);
    },
    save() {
      store.save();
    },
  },
};
</script>

<style scoped></style>