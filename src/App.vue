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
  <header class="py-5">
    <div class="container">
      <div class="row  justify-content-between align-items-center">
        <div class="col-4 fs-2">
          Calligari Andrea
        </div>
        <nav class=" col-4 d-flex gap-3 justify-content-center align-items-center">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/portfolio">Portfolio</RouterLink>
        </nav>

      </div>

    </div>

  </header>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-4">

        </div>
        <main>

          <RouterView />
        </main>
      </div>
    </div>

  </section>
  <!-- 
  <section class="py-3">

    <AppCard />
  </section> -->
</template>

<style lang="scss">
//@use 'bootstrap';</style>
