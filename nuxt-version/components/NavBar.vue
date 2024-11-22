<template>
    <nav>
        <div class="language">
            <button @click="setLocale('en')">EN</button>
            <button @click="setLocale('fr')">FR</button>
            <button @click="setLocale('ua')">UA</button>
            <button @click="setLocale('de')">DE</button>
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
    position: sticky;
    top: 0;
    /* Почне "залипати", коли досягне верхньої частини екрана */
    background-color: #1d7995;
    color: white;
    padding: 10px 20px;
    z-index: 1000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>

<script setup>

const { locale, setLocale } = useI18n({

})
import { useI18n, useLocalePath } from '#imports'



</script>

<style scoped>
.language {
    padding: 10px;
}

button {
    margin: 0 5px;
}
</style>
