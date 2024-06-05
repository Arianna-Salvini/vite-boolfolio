<script>

export default {
    name: 'ButtonGeneral',
    data() {
        return {
            menu: [
                {
                    'text': 'About',
                    'route': 'about'
                },
                {
                    'text': 'Projects',
                    'route': 'projects'
                },
                {
                    'text': 'Contacts',
                    'route': 'contacts'
                }
            ]
        }
    }
};

</script>

<template>
    <router-link :to="{ name: item.route }" v-for="item in menu">
        <button class=" btn_general">

            {{ item.text }}
        </button>
    </router-link>
</template>

<style></style>
