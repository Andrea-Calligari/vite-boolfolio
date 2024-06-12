<script>
import axios from 'axios';
export default {
  data() {
    return {
      projects: [],
    }
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
        this.projects = res.data.projects
        // console.log(this.projects) 
      })
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-center align-items-center flex-wrap ">
      <div v-for="project in projects" :key="project.id" class="col-4 p-3">
        <div class="card">
          <div class="card-header">
            <h3> Titolo :{{ project.project_name }}</h3>

          </div>
          <div class="card-body">
            <p> Descrizione: {{ project.description }}</p>
            <p> Ore di lavoro {{ project.working_hours }}</p>
            <p> Collaboratori : {{ project.co_workers }}</p>

          </div>
        </div>
      </div>

    </div>

  </div>


</template>

<style scoped></style>
