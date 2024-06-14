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
          <RouterLink :to="{name: 'home',}">Home</RouterLink>
          <RouterLink :to="{name:'contact'}">Contact</RouterLink>
          <RouterLink :to="{name:'portfolio'}">Portfolio</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

</template>

<style lang="scss">
//@use 'bootstrap';
</style>
