<template>
  <div id="about">
    <div class="about-title">
      <h5 class="section__text__p1">{{ $t('about.knowMore') }}</h5>
      <h1 class="title fade-in">{{ $t('about.title') }}</h1>
    </div>

    <div class="grid-container">
      <div class="section__pic-container fade-in">
        <img src="../assets/img/about-img.jpg" alt="Profile picture" class="about-pic" />
      </div>
      <div class="text-container fade-in">
        <p>{{ $t('about.profile1') }} <br> <br> {{ $t('about.profile2') }} </p>
      </div>
      <hr />
      <div class="about-details-container fade-in">
        <div class="details-container fade-in">
          <img src="../assets/img/work-experience.png" alt="Experience icon" width="10%" />
          <h3>{{ $t('about.professionalExperience') }}</h3>
          <hr />
          <p>{{ $t('about.STIGACXExp') }}</p>
          <p>{{ $t('about.webDeveloper') }}</p>
          <p>{{ $t('about.ptTeacherJuanCarlos') }}</p>
          <p>{{ $t('about.ptTeacherVirgenCerro') }}</p>
          <p>{{ $t('about.ptTeacherUnamuno') }}</p>
        </div>
        <div class="details-container fade-in">
          <img src="../assets/img/education-icon.png" alt="Education icon" width="10%" />
          <h3>{{ $t('about.education') }}</h3>
          <hr />
          <p>{{ $t('about.daw') }}</p>
          <p>{{ $t('about.primaryEducation') }}</p>
          <p>{{ $t('about.socialSciences') }}</p>
        </div>
        <div class="details-container fade-in">
          <img src="../assets/img/professional-skills-icon.svg" alt="Skills icon" width="10%" />
          <h3>{{ $t('about.skills') }}</h3>
          <hr />
          <ul class="skills-div">
            <li>{{ $t('about.html') }}</li>
            <li>{{ $t('about.javascript') }}</li>
            <li>{{ $t('about.css') }}</li>
            <li>{{ $t('about.vue') }}</li>
            <li>{{ $t('about.php') }}</li>
            <li>{{ $t('about.sql') }}</li>
            <li>{{ $t('about.git') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
</script>

<style scoped>
#about {
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  padding: 20px;
}

hr {
  background-color: var(--color-burdeos);
  border: solid 2px;
}

.about-title {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
}

.about-title h1 {
  font-size: 50px;
  color: var(--color-burdeos);
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  width: 100%;
  font-family: "Poppins", sans-serif;
}

.section__pic-container {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-container {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 1rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: justify;
  margin-bottom: -20px;
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

.about-pic {
  border-radius: 2rem;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.details-container {
  padding: 1.5rem;
  background: white;
  border-radius: 2rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  font-size: 15px;
}

.details-container hr {
  margin-top: 5px;
  color: var(--color-burdeos);
  margin-bottom: 10px;
}

.skills-div {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Dos columnas */
  gap: 1rem;
}

.skills-div li {
  margin: 0;
  padding-left: 1rem; /* Ajustar la posición del texto */
  list-style: none;
  position: relative;
}

.skills-div li::before {
  content: "";
  background-image: url('../assets/img/check-mark.svg');
  background-size: 0.8rem 0.8rem; /* Ajustar el tamaño del bullet point */
  background-repeat: no-repeat;
  position: absolute;
  left: -0.0001rem; /* Ajustar la distancia del bullet point al texto */
  top: 50%; /* Centrar verticalmente el bullet point */
  transform: translateY(-50%);
  width: 0.8rem; /* Ajustar el tamaño del bullet point */
  height: 0.8rem; /* Ajustar el tamaño del bullet point */
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
@media screen and (max-width: 720px) {
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

  .skills-div {
    grid-template-columns: 1fr; /* Una columna para pantallas pequeñas */
  }

  .skills-div li {
    padding-left: 1rem; /* Reajustar la posición del texto en pantallas pequeñas */
  }

  .skills-div li::before {
    left: -0.001rem; /* Ajustar la distancia del bullet point al texto en pantallas pequeñas */
    width: 0.8rem; /* Ajustar el tamaño del bullet point en pantallas pequeñas */
    height: 0.8rem; /* Ajustar el tamaño del bullet point en pantallas pequeñas */
  }
}

@media screen and (max-width: 400px) {
  .text-container {
    text-align: justify;
    font-size: 0.7rem;
  }

  .section__pic-container {
    margin-top: -2%;
  }

  .skills-div li::before {
    display: none;
  }

}

</style>
