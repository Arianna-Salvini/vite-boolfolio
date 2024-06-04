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
    background: linear-gradient(45deg, #02202a, #003344, #003f5a, #00485a, #00505a, #004853, #043339, #011517);
    background-size: 200%;
    background-position: left;
    animation: bg_animation 10s infinite alternate;
}

@keyframes bg_animation {
    0% {
        background-position: left;
    }

    100% {
        background-position: right;
    }

}
</style>
