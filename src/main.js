import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n';
import { en } from './locales/en';
import { es } from './locales/es';
import App from './App.vue'
import router from './router'

const messages = {
  en,
  es,
};

const i18n = createI18n({
  locale: 'es', // idioma por defecto
  fallbackLocale: 'en', // idioma de respaldo
  messages,
});

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(i18n);

app.mount('#app')
