<script>
// import AppCard from './components/AppCard.vue';
export default {
  data() {
    return {
      message: 'ciao bello! Guarda qua'
    }
  },
  
}
</script>

<template>

  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav class="d-flex gap-3 justify-content-center align-items-center">
    <RouterLink to="home">Home</RouterLink>
    <RouterLink to="contact">Contact</RouterLink>
    <RouterLink to="portfolio">Portfolio</RouterLink>
  </nav>
  <main>
    <!-- <h1 class="text-center py-5">Ecco i miei progetti!</h1> -->
    <RouterView />
  </main>
<!-- 
  <section class="py-3">

    <AppCard />
  </section> -->
</template>

<style lang="scss" scoped>

</style>
