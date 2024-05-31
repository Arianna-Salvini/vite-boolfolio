<script>
import axios from 'axios';
import ProjectCard from "./../elements/ProjectCard.vue";

export default {
  name: 'AppProjects',
  components: {
    ProjectCard,
  },

  data() {
    return {
      url_API: 'http://127.0.0.1:8000/',
      url_projects: 'api/projects',
      projects: [],
      loading: true,
    }
  },

  methods: {

    callAPI(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.projects = response.data.projects
          this.loading = false
        })
        .catch(err => {
          console.error(err);
        })
    }
  },

  mounted() {
    this.callAPI(this.url_API + this.url_projects);
  }

};
</script>

<template>
  <div class="container my-5">

    <div class="row" v-if="!loading">
      <div class="col" v-for="project in projects.data">

        <ProjectCard :project="project" />

      </div>
    </div>
    <div class="row" v-else>
      <div class="col">
        Loading ...
      </div>
    </div>
  </div>
</template>

<style scoped></style>
