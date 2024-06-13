<template>
    <div class="container ">
        <h1 class="mb-5">Dettaglio dei progetti </h1>
        <button class="btn btn-dark " @click="goBack">&lArr;</button>
        <p class="fs-2">Slug : {{ $route.params.slug }}</p>

    </div>

</template>

<script>
 export default {

    methods:{
        goBack(){
            this.$router.back()
        }
    }
 }

</script>