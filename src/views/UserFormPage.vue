<template>
  <form @submit.prevent="save">
    <user-form />
    <children-form />

    <div class="save-button">
      <main-button
        type="submit"
        variant="contained"
        text="Сохранить"
      />
    </div>
  </form>
</template>

<script>
import store from "@/store";
import UserForm from "@/components/UserForm/UserForm";
import ChildrenForm from "@/components/UserForm/ChildrenForm";
import MainButton from "@/components/UI/MainButton";

export default {
  name: "UserFormPage",
  components: {
    MainButton,
    UserForm,
    ChildrenForm
  },
  mounted() {
    store.init()
  },
  methods: {
    save() {
      store.save();
    },
  },
};
</script>

<style scoped>
  .save-button {
    margin-top: 30px;
  }
</style>