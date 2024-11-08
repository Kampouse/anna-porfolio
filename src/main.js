import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./i18n"; // Імпортуємо i18n
//import { createI18n } from "vue-i18n";

//  const messages = {
//    en: { message: "Hello" },
//    fr: { message: "Bonjour" },
//    ua: { message: "Привіт" },
//    de: { message: "Hallo" },
//  };

//const i18n = createI18n({
// locale: "en", // Мова за замовчуванням
//  fallbackLocale: "en", // Резервна мова, якщо переклад не знайдено
// messages, // Наші переклади
//});

const app = createApp(App);
app.use(i18n); // Підключаємо i18n
app.use(router); // Підключаємо router
app.mount("#app"); // Монтуюємо додаток
app.use(store); // Підключаємо store
