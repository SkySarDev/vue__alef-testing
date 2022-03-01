<template>
  <div class="form-header">
    <h2 class="block-title">Дети (макс. 5)</h2>
    <transition name="button-animation">
      <main-button
        v-if="userData.children.length < 5"
        @click="addChildren"
        variant="outlined"
        text="Добавить ребенка"
        type="button"
      />
    </transition>
  </div>

  <div class="form-field">
    <transition-group name="list-animation">
      <child-item
        v-for="child in userData.children"
        :key="child.id"
        :child="child"
        :delete-children="deleteChildren"
      />
    </transition-group>
  </div>
</template>

<script>
import store from "@/store";
import ChildItem from "@/components/UserForm/ChildItem";

export default {
  name: "ChildrenForm",
  components: {
    ChildItem
  },
  data() {
    return {
      userData: store.state.userData
    }
  },
  methods: {
    addChildren() {
      store.addChildren();
    },
    deleteChildren(id) {
      store.deleteChildren(id);
    },
  }
}
</script>

<style scoped>
.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  height: 44px;
}

.form-field {
  margin-top: 10px;
}

.button-animation-enter-active,
.button-animation-leave-active {
  transition: opacity 0.5s ease;
}

.button-animation-enter-from,
.button-animation-leave-to {
  opacity: 0;
}

.list-animation-enter-active,
.list-animation-leave-active {
  transition: all 0.5s ease;
}
.list-animation-enter-from,
.list-animation-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>