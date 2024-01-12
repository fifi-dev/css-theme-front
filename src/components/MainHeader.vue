<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
    <header class="p-0 flex justify-between items-center pb-4 max-sm:pb-8 max-sm:pt-4">
        <SiteLogo />
        <button  @click="openMenu" class="text-2xl hidden max-sm:block">☰</button>
        <nav v-if="isMenuOpen" class="w-fit flex items-center max-sm:fixed max-sm:w-full max-sm:bg-white max-sm:px-14 max-sm:py-48">
            <button @click="closeMenu" class="text-2xl hidden max-sm:block z-50 absolute text-primary top-8 right-10">x</button>
            <RouterLink @click="closeMenu" class="pr-8 text-primary font-semibold" to="/">{{ $t('nav.home') }}</RouterLink>
            <RouterLink @click="closeMenu" class="pr-8 text-primary font-semibold" to="/explorer">{{ $t('nav.explorer') }}</RouterLink>
            <a @click="closeMenu" class="pr-8 font-semibold text-primary" href="https://github.com/fifi-dev/csstheme" target="_blank">{{ $t('nav.github') }}</a>
            <MainButton @click="closeMenu" class="max-sm:m-auto"><a href="#">{{ $t('nav.documentation') }}</a></MainButton>
        </nav>
    </header>
</template>


<script>
import SiteLogo from '@/components/SiteLogo.vue';
import MainButton from '@/components/MainButton.vue';

export default {
    data() {
        return {
        isMenuOpen: false
        };
    },
    components: {
        SiteLogo,
        MainButton,
    },
    methods: {
        openMenu() {
        this.isMenuOpen = true;
        },
        closeMenu() {
            this.isSmallScreen = window.innerWidth <= 640;
            if (!this.isSmallScreen) {
                this.isMenuOpen = true; // Afficher la nav sur les grands écrans
            }else{
                this.isMenuOpen = false;
            }
        },
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth <= 640;
            if (!this.isSmallScreen) {
                this.isMenuOpen = true; // Afficher la nav sur les grands écrans
            }
        }
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    }
};
</script>

<style scoped>

    nav a.router-link-exact-active {
    color: #000 !important;
    font-weight: bold;
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
        nav a {
            display: inline-block;
        }
    }
    @media (max-width: 639px){
        nav{
            top: 0;
            height: 100vh;
            z-index: 49;
            left: 0;
            flex-wrap: wrap;
            text-align: center;
        }
        nav a {
            display: block;
            width: 100%;
            height: 5%;
        }
    }

</style>