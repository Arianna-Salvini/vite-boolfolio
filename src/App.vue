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
    <div container>

        <AppHeader />

        <RouterView />

        <AppFooter />

    </div>
</template>

<style>
.app {
    min-width: 940px;
    max-width: 1440px;
}
</style>
