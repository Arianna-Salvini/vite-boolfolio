<script>

import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            url_API: 'http://127.0.0.1:8000/',
            url_projects: 'admin/projects',
            projects: [],
            loading: true
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

    }
}
</script>

<template>

</template>

<style></style>
