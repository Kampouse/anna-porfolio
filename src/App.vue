<template>
  <nav>
    <div class="language">
      <button @click="changeLanguage('en')">EN</button>
      <button @click="changeLanguage('fr')">FR</button>
      <button @click="changeLanguage('ua')">UA</button>
      <button @click="changeLanguage('de')">DE</button>
    </div>
    <router-link to="/">{{ $t("message.home") }}</router-link> |
    <router-link to="/about">{{ $t("message.about") }}</router-link> |
    <router-link to="/projects">{{ $t("message.projects") }}</router-link> |
    <router-link to="/contact">{{ $t("message.contact") }}</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale; // Змінюємо мову
    },
  },
};
</script>

<style scoped>
.language {
  padding: 10px;
}

button {
  margin: 0 5px;
}
</style>
