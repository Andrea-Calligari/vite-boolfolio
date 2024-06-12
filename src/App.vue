<script>
import AppCard from './components/AppCard.vue';
export default {
  data() {
    return {
      message: 'ciao bello! Guarda qua'
    }
  },
  components: {
    AppCard
  }
}
</script>

<template>
 <h1 class="text-center py-5">Ecco i miei progetti!</h1>
  <section class="py-3">

    <AppCard />
  </section>
</template>

<style lang="scss" scoped>
</style>
