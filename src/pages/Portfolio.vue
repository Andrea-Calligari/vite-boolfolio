<script>
import axios from 'axios';
export default {
  data() {
    return {
      projects: [],
      currentPage : 1,
      lastPage : null
    }
  },
  methods: {
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects',{ 
        params: {
          page: this.currentPage,

        }
      
      
      
      }).then((res) => {
        this.projects = res.data.projects.data
        this.lastPage = res.data.projects.last_page
        //  console.log(this.lastPage) 
      })
    },
    setPage(n){
      if(n === this.currentPage) return 
      this.currentPage = n
      this.fetchProjects()
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-6 p-3">
        <div class="card">
          <div class="card-header">
            
            <h4> {{ project.project_name }}</h4>

          </div>
          <div class="card-body">
            <p> Descrizione: {{ project.description }}</p>
            <p> Ore di lavoro {{ project.working_hours }}</p>
            <p> Collaboratori : {{ project.co_workers }}</p>
            <ul class="list-unstyled d-flex gap-2">
              <span>Tecnologie usate:</span>
              <li class="bg-warning p-1  border-rounded" v-for="technologies in project.technologies" :key="technologies.id"> {{ technologies.name }}</li>

            </ul>
            <p v-if="project.type "> tipo :{{ project.type.name }}</p>

          </div>
        </div>
      </div>

    </div>

  </div>
  <ul class="list-unstyled justify-content-center align-items-center d-flex gap-3">
    <li @click="setPage(n)" class="fs-2 " :class="n === this.currentPage ? 'bg-warning' : ''" v-for="n in lastPage" :key="n">{{ n }}</li>
  </ul>


</template>

<style scoped>

</style>
