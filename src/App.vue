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

/* BUTTON Nuon */

:root {
    --color-lighter: #00ddff;
    --color-light: #019bb2;
    --color-medium: #006676;
    --color-dark: #003941;
}

button {
    border: none;
}

.btn_general {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: transparent;
    padding: 1rem 1.5rem;
    border-radius: 0.7rem;
    position: relative;
    color: #96f0fe;
    border: 3px solid #96f0fe;
    text-shadow: 0 0 3px #00505a,
        0 0 5px #00acc6,
        0 0 5px #00acc6,
        0 0 10px #00acc6,
        0 0 15px #00acc6,
        0 0 30px #00acc6,
        0 0 60px #00acc6,
        0 0 120px #00acc6;

    box-shadow: 0 0 3px #00505a,
        0 0 5px #00acc6,
        0 0 5px #00acc6,
        0 0 10px #00acc6,
        0 0 15px #00acc6,
        0 0 30px #00acc6,
        0 0 60px #00acc6,
        0 0 120px #00acc6;

    position: relative;

    &:hover {
        color: #001823;
        background-color: #96f0fe;
        text-shadow: 0 0 3px #006b79,
            0 0 5px #00ddff,
            0 0 10px #00ddff,
            0 0 15px #00ddff,
            0 0 30px #00ddff,
            0 0 60px #00ddff,
            0 0 120px #00ddff;
        cursor: auto;
        box-shadow: 0 0 3px #006b79,
            0 0 5px #00ddff,
            0 0 10px #00ddff,
            0 0 15px #00ddff,
            0 0 30px #00ddff,
            0 0 60px #00ddff,
            0 0 120px #00ddff;
        ;
    }
}

.btn_general:hover::before {
    content: '';
    background-color: #96f0fe;
    position: absolute;
    top: 110%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    height: 100%;

    transform: perspective(2rem) rotateX(40deg) translateZ(-1rem) scale(1.2, 0.50);
    filter: blur(2.5rem);
}

/* #region Animatio BorderButton*/

/* @property --gradient-angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
}

button {
    border: none;
}

.btn_general {
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    background-color: var(--color-dark);
    padding: 1rem 1.5rem;
    border-radius: 0.7rem;
    position: relative;
}

.btn_general::before,
.btn_general::after {
    content: "";
    position: absolute;
    inset: -0.3rem;
    z-index: -1;
    border-radius: inherit;
    background: conic-gradient(
            /* from var(--gradient-angle), 
0deg,
var(--color-medium),
var(--color-light),
var(--color-lighter),
var(--color-medium),
);

}

/.btn_general:hover::before,
.btn_general:hover::after {
    animation: circleFrame 20s linear infinite;

}

.btn_general::after {
    filter: blur(3rem);
}

@keyframes circleFrame {
    0% {
        --gradient-angle: 0deg
    }

    100% {
        --gradient-angle: 360deg
    }

}

*/
/*#endregion Animatio BorderButton*/
</style>
