<script >
import AppCard from './components/AppCard.vue';
export default {
  data(){
    return{
      message: 'ciao bello! Guarda qua'
    }
  },
  components: {
    AppCard
  }
}
</script>

<template>
  <h1>{{ message }}</h1>
<AppCard />
</template>

<style scoped>

</style>
