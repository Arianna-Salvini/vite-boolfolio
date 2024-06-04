<script>

import AppHeader from "./components/layouts/AppHeader.vue";
import AppFooter from "./components/layouts/AppFooter.vue";

export default {
    name: 'App',

    components: {
        AppFooter,
        AppHeader,
    },
};
</script>

<template>


    <AppHeader />
    <div class="body_main">
        <RouterView />
    </div>

    <AppFooter />


</template>

<style>
.body_main {
    height: calc(100vh - 4rem);
    /* background-color: #011517; */
    background: linear-gradient(45deg, #001823, #002f43, #003f5a, #00485a, #00505a, #004853, #043339, #011517);
    background-size: 200%;
    background-position: left;
    animation: bg_animation 9s alternate infinite;
}

@keyframes bg_animation {
    0% {
        background-position: left;
    }

    100% {
        background-position: right;
    }

}

/* Utilities */
.text_neon {
    color: #96f0fe;
    text-shadow: 0 0 3px #00505a,
        0 0 5px #00acc6,
        0 0 5px #00acc6,
        0 0 10px #00acc6,
        0 0 15px #00acc6,
        0 0 30px #00acc6,
        0 0 60px #00acc6,
        0 0 120px #00acc6;

    &:hover {
        color: #b9f6ff;
        text-shadow: 0 0 3px #006b79,
            0 0 5px #00ddff,
            0 0 10px #00ddff,
            0 0 15px #00ddff,
            0 0 30px #00ddff,
            0 0 60px #00ddff,
            0 0 120px #00ddff;
        cursor: auto;
    }
}
</style>
