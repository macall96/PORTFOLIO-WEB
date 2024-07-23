// src/stores/language.js
import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
  state: () => ({
    locale: 'es' // idioma por defecto
  }),
  actions: {
    setLocale(locale) {
      this.locale = locale;
      localStorage.setItem('locale', locale);
    },
    loadLocale() {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale) {
        this.setLocale(savedLocale);
      }
    }
  }
});
