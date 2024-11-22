
// src/i18n.js
//import { h } from "vue";
//import HireMe from "./components/HireMe.vue";

// Повідомлення для різних мов
//
//
//

const messages = {
  en: {
    message: {
      hello: "Hello",
      about: "About",
      contact: "Contact",
      projects: "Projects",
      home: "Home",
      hire: "Hire Me",
    }
  },
  fr: {
    message: {
      hello: "Bonjour",
      about: "À propos de moi",
      contact: "Contact",
      projects: "Projets",
      home: "Accueil",
      hire: "Engagez-moi",
    },
  },
  ua: {
    message: {
      hello: "Привіт",
      about: "Про мене",
      contact: "Контакт",
      projects: "Проекти",
      home: "Головна",
      hire: "Найняти мене",
    },
  },
  de: {
    message: {
      hello: "Hallo",
      about: "Über mich",
      contact: "Kontakt",
      projects: "Projekte",
      home: "Zuhause",
      hire: "Stellen Sie mich ein",
    },
  },
};


export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: messages

}))
