<template>
  <footer class="footer">
      <p class="copy" >&copy; {{ currentYear }} Miguel Ángel de la Calle Cuadra. {{ $t('footer.rights') }}</p>
  </footer>
</template>

<script setup>
  const currentYear = new Date().getFullYear()
</script>

<style>
.footer {
  background-color: var(--color-gray-medium);
  color: #fff;
  padding: 20px 0;
  width: 100%;
  bottom: 0;
  left: 0;
  font-family: "Ubuntu", sans-serif;
}

.copy{
  padding: 0 20px;
}

.footer p {
  text-align: center;
  font-family: "Poppins", sans-serif;
}
</style>
