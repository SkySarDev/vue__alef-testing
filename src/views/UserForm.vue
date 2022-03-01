<template>
  <form>
    <h2>Персональные данные</h2>
    <main-input
      v-model.trim="formData.user.name"
      label="Имя"
    />
    <main-input
      v-model="formData.user.age"
      type="number"
      label="Возраст"
    />

    <h2>Дети (макс. 5)</h2>
    <button
      v-if="formData.children.length < 5"
      @click="addChildren"
    >
      Добавить ребенка
    </button>

    <template
      v-for="(child, index) in formData.children"
      :key="index"
    >
      <main-input
        v-model.trim="child.childName"
        label="Имя"
      />
      <main-input
        v-model="child.childAge"
        type="number"
        label="Возраст"
      />
      <button
        @click="deleteChildren(index)"
        type="button"
      >
        Удалить
      </button>
    </template>

    <button type="submit">
      Сохранить
    </button>
  </form>
</template>

<script>
import MainInput from "@/components/UI/MainInput";

export default {
  name: "UserForm",
  components: {
    MainInput,
  },
  data() {
    return {
      formData: {
        user: {
          name: "",
          age: ""
        },
        children: []
      },
    };
  },
  methods: {
    addChildren() {
      this.formData.children.push({ childName: '', childAge: '' })
    },
    deleteChildren(index) {
      this.formData.children.splice(index, 1)
    }
  }
};
</script>

<style scoped></style>
