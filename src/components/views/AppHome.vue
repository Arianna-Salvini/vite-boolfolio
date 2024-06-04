<script>
// import ButtonGeneral from '../elements/ButtonGeneral.vue';

// export default {
//     name: 'AppHome',
//     components: {
//         ButtonGeneral,
//     }

// }
</script>

<template>
    <section class="body_main d-flex align-items-center">
        <div class="container d-flex align-items-center">
            <div class="left">
                <h1 class="text_neon">
                    &lt;Arianna Salvini /&gt;
                </h1>
                <h3>Full-stack Web Developer</h3>
                <p class="pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nostrum a
                    deleniti qui
                    obcaecati amet
                    adipisci
                    possimus vitae veniam earum.</p>
            </div>

            <div class="right">
                <!-- image here -->
                <div> Image</div>
            </div>
        </div>
        <div>
            <!-- <ButtonGeneral />
            <ButtonGeneral />
            <ButtonGeneral /> -->
        </div>
    </section>
</template>

<style scoped>
.body_main {
    height: 100%;
}

.left,
.right {
    width: 50%;
    height: 100%;

    h3 {
        text-shadow: 0 3px 7px #00232f;
    }

    p {
        color: #00acc6;
        text-shadow: 0 2px 10px #00232f;

    }
}

.left {
    text-align: right;
    padding-right: 1rem;
}

.right {
    text-align: left;
    padding-left: 1rem;
}
</style>