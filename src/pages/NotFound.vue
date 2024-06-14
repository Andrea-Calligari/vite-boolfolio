<template>
<h1 class="text-center ">404- Page Not Found</h1>

    <button @click="goHome" >Torna alla home</button>
</template>

<script>

export default {
  methods:{
    goHome(){
        this.$router.go('home')
    }
  }

}
</script>