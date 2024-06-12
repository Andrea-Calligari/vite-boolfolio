<script >
import axios from 'axios';
export default {
  data(){
    return{
      projects : [],
    }
  },
  methods: {
    fetchProjects(){
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        this.projects = res.data.projects
        // console.log(this.projects) 
      })
    }
  },
  created(){
    this.fetchProjects()
  }
}
</script>

<template>
 <h1>I miei Progetti </h1>

  <ul>
    <li v-for="project in projects" :key="project.id">
      <h3> Titolo :{{ project.project_name }}</h3>
      <p> Descrizione: {{ project.description }}</p>
    </li>
  </ul>
</template>

<style scoped>

</style>
