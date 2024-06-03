<script>
import { state } from '../../state.js';

export default {
    name: 'ProjectCard',
    data() {
        return {
            state,
        }
    },

    props: {
        project:
        {
            type: Object,
        },
    }
};
</script>

<template>
    <router-link :to="{ name: 'project-view', params: { slug: project.slug } }">
        <div class="card h-100 gap-2">
            <div class="card-top">

                <template v-if="project.image.startsWith('uploads')">
                    <img width="200" :src="state.url_API + 'storage/' + project.image" alt="">
                </template>
                <template v-else>
                    <img width="200" :src="project.image" alt="">
                </template>

            </div>
            <div class="card-body">
                <h3>
                    {{ project.title }}
                </h3>
            </div>
        </div>
    </router-link>
</template>

<style scoped></style>