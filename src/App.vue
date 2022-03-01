<template>
  <main-layout>
    <router-view />
  </main-layout>
</template>

<script>
import store from "@/store";
import MainLayout from "@/components/Layout/MainLayout";

export default {
  components: {
    MainLayout
  },
  mounted() {
    store.init()
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

a {
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: rgba(17, 17, 17, 0.8);
}

.container {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
  min-width: 650px;
}

.block-title {
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #111111;
}
</style>
