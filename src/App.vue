<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<script>
import MainLayout from "@/components/Layout/MainLayout";

export default {
  components: {
    MainLayout
  }
}
</script>

<style>
html,
body {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

#app {
  height: 100%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 auto;
  padding: 0 15px;
  width: 1200px;
}

.block-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #111111;
}
</style>
