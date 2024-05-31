<script>
import ProjectCard from "./../elements/ProjectCard.vue";

export default {
  name: 'AppMain',
  components: {
    ProjectCard,
  },
  props: {
    projects: {
      type: Object,
    },
    loading: {
      type: Boolean,
    }
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
