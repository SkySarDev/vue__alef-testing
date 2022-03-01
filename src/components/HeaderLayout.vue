<template>
  <header class="header">
    <div class="header-container container">
      <img
        class="header-logo"
        src="../assets/logo.png"
        alt="Logo"
      />
      <nav class="header-nav">
        <router-link to="/user-form">Форма</router-link>
        <router-link to="/user-preview">Превью</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderLayout"
}
</script>

<style scoped>
  .header {
    flex: 0 0 76px;
    border-bottom: 1px solid rgba(17, 17, 17, 0.1);
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .header-logo {
    width: 93px;
    height: 29px;
  }

  .header-nav {
    flex-grow: 1;
    text-align: center;
    font-size: 14px;
  }

  .header-nav a {
    color: rgba(17, 17, 17, 0.48);
    text-decoration: none;
  }

  .header-nav a:not(:last-child) {
    margin-right: 24px;
  }

  .header-nav a.router-link-exact-active {
    color: rgba(17, 17, 17, 1);
  }
</style>