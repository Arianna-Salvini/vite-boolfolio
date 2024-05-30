<script>

import axios from 'axios';

import AppHeader from "./components/layouts/AppHeader.vue";
import AppMain from "./components/layouts/AppMain.vue";
import AppFooter from "./components/layouts/AppFooter.vue";

export default {
    name: 'App',

    components: {
        AppFooter,
        AppHeader,
        AppMain,
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
}
</script>

<template>
    <div>

        <AppHeader />

        <AppMain :projects="projects" :loading="loading" />

        <AppFooter />

    </div>
</template>

<style></style>
