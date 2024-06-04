<script>
import axios from 'axios';
import { useRoute } from 'vue-router'
import { state } from './../../state';

const route = useRoute()


// react to route changes...;

export default {
    name: 'ProjectView',
    data() {
        return {
            project: {},
            state: state,
        }

    },

    mounted() {
        const slug = this.$route.params.slug;
        const project_view_URL = this.url_API + this.url_projects$ + `/` + slug;
        console.log(project_view_URL);
        this.getProjectView(project_view_URL);
    },
    methods: {
        getProjectView(url) {
            axios.get(url)
                .then(response => {
                    if (response.data.success) {
                        this.project = response.data;
                        this.loading = false;

                    } else {
                        this.$router.push({ name: 'not-found' })
                    }
                })
                .catch(err => {
                    console.error(err);
                })
        }
    }

}
</script>

<template>
    <div class="container my-5">

        <div class="row" v-if="!loading">
            <h2>{{ project.title }}</h2>
            <p>
                {{ project.description }}
            </p>
        </div>
        <div class="row" v-else>
            <div class="col">
                Loading ...
            </div>
        </div>
    </div>

</template>

<style></style>