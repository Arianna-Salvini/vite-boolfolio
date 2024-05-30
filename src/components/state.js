import { reactive } from "vue";

export const state = reactive({

    url_API: 'http://127.0.0.1:8000/',
    url_projects: 'api/projects',
    projects: [],
    loading: true

})