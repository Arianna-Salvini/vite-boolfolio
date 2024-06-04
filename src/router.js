import { createWebHistory, createRouter } from 'vue-router'


import AppHome from "./components/views/AppHome.vue";
import AppAbout from "./components/views/AppAbout.vue";
import AppProjects from './components/views/AppProjects.vue';
import AppContacts from "./components/views/AppContacts.vue";
import ProjectView from './components/views/ProjectView.vue';
import NotFound from './components/views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
        {
            path: '/projects/:slug',
            name: 'project-view',
            component: ProjectView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]

})


export default router;