<template>
    <div class="container ">
        <h1 class="mb-5">Dettaglio dei progetti </h1>
        <button class="btn btn-dark " @click="goBack">&lArr;</button>

        <!-- il tag template non esiste come elemento html- 
        lo usiamo per raggruppare logice - 
        puoi fare anche v-for(template) 
        e v-if per non farli sullo stesso tag html -->
        <template v-if="project">  
            <h1>{{ project.project_name }}</h1>
            <p>{{ project.working_hours }}</p>
            <p>{{ project.co_workers }}</p>
            <p>{{ project.type?.name }}</p>

            <div v-html="project.description" class="container py-4"></div>


        </template>

    </div>

</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            project: null
        }
    },
    //passiamo lo slug come props (vedi router.js)
    props: {
        slug: {
            type: String,
            required: true,
        }
    },
    methods: {
        goBack() {
            this.$router.back()
        },

        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then((res) => {
                    // console.log(res)
                    this.project = res.data.project

                })
                .catch((err) => {
                    // console.log(err)
                    this.$router.push({name:'NotFound'})
                })
        }
    },
    created() {
        this.fetchProject()
    }
}

</script>