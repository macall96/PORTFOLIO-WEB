<script setup>
import { RouterView } from 'vue-router';
import Header from '@/components/HeaderComp.vue';
import Footer from '@/components/FooterComp.vue';
import { useLanguageStore } from './stores/languaje.js';
import { useI18n } from 'vue-i18n';
import { onMounted, watch } from 'vue';

// Usar el store de Pinia
const languageStore = useLanguageStore();
const { locale } = useI18n();

// Cargar el idioma desde localStorage al montar el componente
onMounted(() => {
  languageStore.loadLocale();
});

// Actualizar el idioma de vue-i18n cuando cambia el idioma en el store
watch(() => languageStore.locale, (newLocale) => {
  locale.value = newLocale;
}, { immediate: true });

const changeLanguage = (lang) => {
  languageStore.setLocale(lang);
};
</script>

<template>
  <div class="wrapper">
    <div class="top">
      <div class="language-switcher">
        <button @click="changeLanguage('es')">
          <img src="@/assets/img/flag-es.svg.png" alt="Español" />
        </button>
        <button @click="changeLanguage('en')">
          <img src="@/assets/img/flag-en.svg.png" alt="English" />
        </button>
      </div>
      <Header class="header-menu"></Header>
    </div>
    <main class="content">
      <RouterView />
    </main>
    <Footer></Footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: "Ubuntu", sans-serif;
  background-color: rgb(248, 246, 239);
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}

.language-switcher {
  display: flex;
  justify-content: center;
  gap: 10px;
  transform: translateY(14%) translateX(-45%);
}

.language-switcher button {
  background: none;
  border: solid 3px black;
  cursor: pointer;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
}

.language-switcher button img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform 0.2s;
}

.language-switcher button:hover {
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.1);
}

.language-switcher button img:hover {
  transform: scale(1.1);
}

@media (max-width: 900px) {
  .language-switcher {
    transform: translateY(10%) translateX(40%);
    margin-right: 10px;
  }
}

@media (min-width: 1400px) {
  .language-switcher {
    transform: translateY(10%) translateX(-47.5%);
    margin-right: 10px;
  }
}

@media screen and (min-width: 1900px) {
  .wrapper {
    font-size: 30px;
  }
}
</style>
