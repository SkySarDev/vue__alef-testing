<template>
  <div class="wrapper">
    <header-layout />

    <main class="main">
      <slot></slot>
    </main>

    <footer-layout />
  </div>
</template>

<script>
import HeaderLayout from "@/components/Layout/HeaderLayout";
import FooterLayout from "@/components/Layout/FooterLayout";

export default {
  name: "MainLayout",
  components: {
    HeaderLayout,
    FooterLayout
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    height: 100%;
  }

  .main {
    flex: 1 0 auto;
    margin: 0 auto;
    width: 616px;
  }
</style>