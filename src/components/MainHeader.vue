<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <header class="p-0 flex justify-between items-center pb-4">
        <SiteLogo />
        <nav class=" w-fit flex items-center">
            <RouterLink class="pr-8 text-primary font-semibold" to="/">Accueil</RouterLink>
            <RouterLink class="pr-8 text-primary font-semibold" to="/explorer">Explorer</RouterLink>
            <a class="pr-8 font-semibold text-primary" href="https://github.com/fifi-dev/csstheme" target="_blank">Github</a>
            <MainButton><a href="#">Documentation</a></MainButton>
        </nav>
    </header>
</template>


<script>
import SiteLogo from '@/components/SiteLogo.vue';
import MainButton from '@/components/MainButton.vue';

export default {
    components: {
        SiteLogo,
        MainButton,
    },
};
</script>

<style scoped>

    nav a.router-link-exact-active {
    color: #000 !important;
    font-weight: bold;
    }

    nav a {
    display: inline-block;
    }

    @media (min-width: 1024px) {

    .logo {
        margin: 0 2rem 0 0;
    }

    nav {
        text-align: center;
        font-size: 1rem;
        padding: 1rem 0;
    }
    }
</style>