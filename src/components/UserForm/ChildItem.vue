<template>
  <div class="child-item">
    <main-input
      v-model.trim="child.name"
      label="Имя"
    />
    <main-input
      v-model="child.age"
      type="number"
      label="Возраст"
    />
    <main-button
      @click="deleteChildren(child.id)"
      type="button"
      variant="text"
      text="Удалить"
    />
  </div>
</template>

<script>
export default {
  name: "ChildItem",
  props: {
    child: {
      type: Object,
      required: true
    },
    deleteChildren: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.child-item {
  display: flex;
  align-items: center;
  column-gap: 18px;
}

.child-item:not(:last-child) {
  margin-bottom: 10px;
}

.child-item div {
  flex: 1 0 auto;
}
</style>