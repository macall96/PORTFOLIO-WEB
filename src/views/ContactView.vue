<template>
  <div id="contact">
    <div class="contact-title">
      <h5 class="section__text__p1">{{ $t('contact.subtitle') }}</h5>
      <h1 class="title">{{ $t('contact.title') }}</h1>
    </div>
    <div class="contact-info-upper-container">
      <div class="contact-info-container">
        <img src="@/assets/img/mail-icon.svg" alt="Email icon" class="icon contact-icon email-icon" />
        <p><a href="mailto:miguel_3396@hotmail.es" class="navLink">{{ $t('contact.email') }}</a></p>
      </div>
      <div class="contact-info-container">
        <img src="@/assets/img/linkedin-icon.svg" alt="LinkedIn icon" class="icon contact-icon" />
        <p><a @click="goToLink('https://www.linkedin.com/in/miguel-angel-de-la-calle-cuadra/')" class="navLink">{{ $t('contact.linkedin') }}</a></p>
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
  
#contact {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 70vh;
    font-family: "Poppins", sans-serif;
    animation: fadeIn 1s ease-out;
  }
  
.contact-title {
    text-align: center;
    font-weight: bold;
    animation: fadeIn 1.5s ease-out;
  }
  
  .title {
    color: var(--color-burdeos);
    font-size: 50px;
    animation: fadeIn 2s ease-out;
  }
  
.contact-info-upper-container {
    display: flex;
    justify-content: center;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    background: (250, 250, 250);
    margin: 2rem auto;
    padding: 0.5rem;
    animation: fadeIn 2.5s ease-out;
  }
  
.contact-info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem;
    animation: fadeIn 3s ease-out;
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
  cursor: pointer;
}

.navLink::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background: transparent;
  transition: background-color 0.3s ease;
}

.navLink:hover::after {
  background-color: var(--color-burdeos);
}

.navLink:hover {
  font-size: 1.1em; 
  color: var(--color-burdeos); 
  text-decoration: none; 
}

  
.contact-icon {
    cursor: default;
    height: 2.5rem;
  }
  
.email-icon {
    height: 2.5rem;
  }

@media screen and (max-width: 600px) {

  .contact-info-upper-container {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-top: 20%
  }

}
</style>
  