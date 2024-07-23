<template>
  <div class="nav-container">
    <nav class="mainMenu" :class="{ 'active': menuVisible }">
      <RouterLink v-for="(elm, indx) in menu" :key="indx" class="navLink" :to="elm.route" @click="closeMenu">{{ $t(elm.name) }}</RouterLink>
    </nav>

    <button class="menuIcon" @click="toggleMenu">
      <img src="@/assets/img/burger-menu.png" alt="Menu" width="35px">
    </button>
  </div>

  <!-- Overlay -->
  <div class="menuOverlay" :class="{ 'active': menuVisible }">
    <button @click="closeMenu" class="xButton">X</button>
    <RouterLink v-for="(elm, indx) in menu" :key="indx" class="navLinkOverlay" :to="elm.route" @click="closeMenu">{{ $t(elm.name) }}</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const menu = [
  { route: '/', name: 'menu.home' },
  { route: '/about', name: 'menu.about' },
  { route: '/projects', name: 'menu.projects' },
  { route: '/contact', name: 'menu.contact' }
];

const menuVisible = ref(false);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const closeMenu = () => {
  menuVisible.value = false;
};

// Escuchador de eventos click en el documento para cerrar el menú
document.addEventListener('click', (event) => {
  const menuOverlay = document.querySelector('.menuOverlay');
  const menuIcon = document.querySelector('.menuIcon');

  if (!menuOverlay.contains(event.target) && !menuIcon.contains(event.target)) {
    closeMenu();
  }
});
</script>

<style scoped>
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
  width: 100%;
  font-family: "Poppins", sans-serif;
  margin-top: 2px;
}

.mainMenu {
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  width: 40%;
  gap: 10px;
  margin-top: -5px;
}

.navLink {
  text-decoration: none;
  font-weight: bold;
  padding: 10px 5px;
  border-radius: 5px;
  color: rgb(0, 0, 0);
  position: relative;
  transition: font-size 0.3s ease, color 0.3s ease;
  width: 25%;
  text-align: center;
  border-radius: 20px;
}

.navLink::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: var(--color-burdeos);
  transition: width 0.3s ease;
  -webkit-transition: width 0.3s ease;
}

.navLink:hover::after {
  width: 100%;
  left: 0;
  background: var(--color-burdeos);
}

.navLink:hover {
  font-size: 1.1em; /* Aumenta el tamaño del texto al hacer hover */
  color: var(--color-burdeos); /* Cambia el color del texto al hacer hover */
}

.viewDiv {
  font-family: "Poppins", sans-serif;
}

.menuIcon {
  display: none; /* Inicialmente oculto en pantallas grandes */
  background: none;
  border: none;
  cursor: pointer;
  background-color: rgb(248, 246, 239);
}

.menuOverlay {
  position: fixed;
  top: 0;
  left: -200px; /* Posición inicial fuera de la pantalla */
  width: 150px;
  height: fit-content;
  z-index: 999;
  border-radius: 30px;
  background-color: var(--color-burdeos);
  color: beige;
  margin-left: 1%;
  transition: left 0.3s ease, opacity 0.3s ease; /* Transición suave para la posición y opacidad */
  opacity: 0; /* Comienza con opacidad 0 */
  pointer-events: none; /* Deshabilitar interacciones inicialmente */
}

.navLinkOverlay {
  color: beige;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 5px;
  border-radius: 5px;
  position: relative;
  transition: font-size 0.3s ease, color 0.3s ease;
  width: 25%;
  border-radius: 20px;
  margin-left: 20%;
  margin-top: -7%;
}

.menuOverlay.active {
  left: 0; /* Posición final dentro de la pantalla */
  opacity: 1; /* Opacidad completa */
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  pointer-events: auto; /* Habilitar interacciones cuando activo */
}

.xButton {
  background-color: var(--color-burdeos);
  color: beige;
  font-size: 20px;
  font-weight: bold;
  border: none;
  width: fit-content;
  border-radius: 5px;
  margin-left: 80%;
  margin-top: 10px;
}

@media (max-width: 900px) {
  .mainMenu {
    display: none; /* Ocultar el menú principal en pantallas pequeñas */
  }

  .menuIcon {
    display: block; /* Mostrar el icono de hamburguesa en pantallas pequeñas */
    transform: translateY(-60%);
  }
}
</style>
