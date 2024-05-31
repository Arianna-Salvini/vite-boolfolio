<script>
import { state } from '../state.js';

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
    <div class="card">
        <template v-if="project.image.startsWith('uploads')">
            <img width="200" :src="state.url_API + 'storage/' + project.image" alt="">
        </template>
        <template v-else>
            <img :src="project.image" alt="">
        </template>

        <div class="card-body">
            <h3>
                {{ project.title }}
            </h3>
        </div>
    </div>
</template>

<style scoped></style>