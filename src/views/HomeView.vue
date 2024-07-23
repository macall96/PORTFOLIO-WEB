<template>
  <div class="container">
    <div class="photo">
      <img src="../assets/img/Foto_CV_ACTUAL.jpg" alt="">
    </div>
    <div class="text">
      <h5>{{ $t('home.greeting') }}</h5>
      <h1>{{ $t('home.name') }}</h1>
      <h3>{{ $t('home.role') }}</h3>
      <div class="btn-container">
        <button class="btn btn-color-2" @click="downloadCV">{{ $t('home.downloadCV') }}</button>
        <button class="btn btn-color-1">
          <RouterLink class="btn-1-link" to="/contact">{{ $t('home.contactInfo') }}</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const downloadCV = () => {
  window.open('/PORTFOLIO-WEB/CV_Miguel_Angel_CC_ACTUAL.pdf', '_blank');
};
</script>


<style scoped>

/* Estilos generales */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6%;
  width: 100%;
  height: 100%;
  gap: 30px;
  animation: fadeIn 1s ease-out;
}

.photo {
  width: 390px;
  height: 390px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  animation: fadeIn 1.5s ease-out;
}

.photo img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transform: translateY(50px);
}

.text {
  font-family: 'Poppins', sans-serif;
  animation: fadeIn 2s ease-out;
}

h5 {
  text-align: center;
}

h1 {
  color: var(--color-burdeos);
}

h3 {
  text-align: center;
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 5%;
  animation: fadeIn 2.5s ease-out;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  width: 15rem;
  border-radius: 2rem;
  font-family: 'Poppins', sans-serif;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.btn-color-1:hover,
.btn-color-2:hover {
  cursor: pointer;
  background-color: var(--color-burdeos);
  color: white;
}

.btn-color-1 {
  background: rgb(53, 53, 53);
  color: white;
}

.btn-color-2 {
  background: none;
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-1-link {
  text-decoration: none;
  color: white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive styles */

/* Pantallas pequeñas */
@media screen and (max-width: 900px) {
  .container {
    flex-direction: column;
    margin-top: 10%;
  }

  .photo {
    width: 350px;
    height: 350px;
  }

  .text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: 5%;
  }

  .text h1 {
    font-size: 20px;
    text-align: center;
  }

  .btn-container {
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    align-content: center;
    align-items: center;
  }

  .btn {
    font-size: 15px;
    width: 15rem;
  }
}

/* Pantallas muy pequeñas */
@media screen and (max-width: 800px) {
  .photo {
    width: 200px;
    height: 200px;
    margin-right: 30px;
  }
  .photo img {
    transform: translateY(20px);
  }
}

/* Pantallas medianas (portátiles) */
@media screen and (min-width: 900px) and (max-width: 1500px) {
  .photo {
    width: 450px;
    height: 450px;
  }

  .photo img {
    transform: translateY(50px);
  }

  .btn {
    font-size: 20px;
    width: 20rem;
  }
}

/* Pantallas grandes */
@media screen and (min-width: 1500px) {
  .photo {
    width: 550px;
    height: 550px;
  }
}

/* Pantallas muy grandes */
@media screen and (min-width: 1900px) {
  .photo {
    width: 750px;
    height: 750px;
  }

  .photo img {
    transform: translateY(63px);
  }

  .btn {
    font-size: 30px;
    width: 30rem;
  }
}

/* Pantallas de iPad y NestHub */
@media screen and (min-width: 1024px) and (max-width: 1366px) {
  .photo {
    width: 400px;
    height: 400px;
  }

  .photo img {
    transform: translateY(40px);
  }

  .btn {
    font-size: 18px;
    width: 18rem;
  }
}

</style>
