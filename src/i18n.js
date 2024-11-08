// src/i18n.js
//import { h } from "vue";
import { createI18n } from "vue-i18n";

// Повідомлення для різних мов
const messages = {
  en: {
    message: {
      hello: "Hello",
      about: "About ",
      contact: "Contact",
      projects: "Projects",
      home: "Home",
    },
  },
  fr: {
    message: {
      hello: "Bonjour",
      about: "À propos de moi",
      contact: "Contact",
      projects: "Projets",
      home: "Accueil",
    },
  },
  ua: {
    message: {
      hello: "Привіт",
      about: "Про мене",
      contact: "Контакт",
      projects: "Проекти",
      home: "Головна",
    },
  },
  de: {
    message: {
      hello: "Hallo",
      about: "Über mich",
      contact: "Kontakt",
      projects: "Projekte",
      home: "Zuhause",
    },
  },
};

// Створюємо інстанцію i18n
const i18n = createI18n({
  locale: "en", // Мова за замовчуванням
  messages, // Повідомлення
});

export default i18n;
