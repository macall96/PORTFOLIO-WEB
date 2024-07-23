<template>
  <div id="projects">
    <div class="project-title">
      <h5 class="section__text__p1">{{ $t('projects.intro') }}</h5>
      <h1 class="title fade-in">{{ $t('projects.title') }}</h1>
    </div>

    <div class="experience-details-container">
      <div class="about-containers grid-container fade-in">

        <div class="details-container">
          <div class="article-container">
            <img src="../assets/img/app_calendario.png" alt="Project 1" class="project-img"/>
          </div>
          <h2 class="project-title">{{ $t('projects.project1.title') }}</h2>
          <button class="btn btn-color-1" @click="goToLink('https://github.com/macall96/Calendario_Organizador')">{{ $t('projects.project1.code') }}</button>
        </div>

        <div class="details-container">
          <div class="article-container">
            <img src="../assets/img/app_bookhub.png" alt="Project 2" class="project-img"/>
          </div>
          <h2 class="project-title">{{ $t('projects.project2.title') }}</h2>
          <button class="btn btn-color-1" @click="goToLink('https://github.com/macall96/BookHub')">{{ $t('projects.project2.code') }}</button>
        </div>

        <div class="details-container">
          <div class="article-container">
            <img src="../assets/img/app_iot.png" alt="Project 3" class="project-img"/>
          </div>
          <h2 class="project-title">{{ $t('projects.project3.title') }}</h2>
          <button class="btn btn-color-1" @click="goToLink('https://github.com/macall96/IOT')">{{ $t('projects.project3.code') }}</button>
        </div>

        <div class="details-container">
          <div class="article-container">
            <img src="../assets/img/app_delegado.png" alt="Project 4" class="project-img"/>
          </div>
          <h2 class="project-title">{{ $t('projects.project4.title') }}</h2>
          <div class="btn-container">
            <button class="btn btn-color-1" @click="goToLink('https://github.com/macall96/App_Eleccion_Delegado')">{{ $t('projects.project4.code') }}</button>
            <button class="btn btn-color-1" @click="goToLink('https://macall96.github.io/App_Eleccion_Delegado')">{{ $t('projects.project4.demo') }}</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
  
<script setup>
const goToLink = (url) => {
  window.open(url, '_blank');
};
</script>
  
<style scoped>
#projects {
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  padding: 20px;
}

.project-title {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
}

.project-title h1 {
  font-size: 50px;
  color: var(--color-burdeos);
}

.project-img {
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
}

.project-title {
  margin: 1rem;
  color: black;
}

.about-details-container {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 7%;
  margin-left: 5%;
}

.details-container {
  padding: 1.5rem;
  background: white;
  border-radius: 2rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  width: 100%; /* Mantener el 100% del ancho del contenedor de grid */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columnas */
  gap: 2rem; /* Espacio entre elementos */
  justify-content: center;
  align-items: start; /* Alineación al inicio para evitar descompensación */
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  animation: fadeIn 2.5s ease-out;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 10px;
  width: 15rem;
  border-radius: 2rem;
  font-family: "Poppins", sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  background: rgb(53, 53, 53);
  color: white;
}

.btn:hover {
  cursor: pointer;
  background-color: var(--color-burdeos);
  color: white;
}

.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn ease 1s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media screen and (min-width: 821px) and (max-width: 1200px) {
  .grid-container {
    grid-template-columns: repeat(2, minmax(300px, 1fr)); /* Columna con tamaño mínimo de 300px */
    /* Esto asegura que los contenedores no se empequeñezcan demasiado y se ajusten a un tamaño mínimo */
  }
}

@media screen and (max-width: 820px) {
  .grid-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    width: 100%;
    height: 100%;
    gap: 20px;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>
  