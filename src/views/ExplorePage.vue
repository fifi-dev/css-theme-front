<template>
    <main class="pb-20">
        <div class="hero pb-6">
            <div class=" w-7/12">
                <h1 class=" text-4xl text-primary font-bold pb-4">Une variété de thèmes CSS personnalisés rien que pour vous !</h1>
                <p class="mt-4">Découvrez les thèmes que nous avons créés, ainsi que ceux qui ont été généreusement partagés par notre communauté de contributeurs.</p>
            </div>
            <div class="flex justify-between items-stretch mt-6">
                <div class="w-9/12">
                    <div class="theme-visual"></div>
                    <div class="mt-8">
                        <h3 class=" text-base pb-4 font-bold">Nom du theme 1</h3>
                        <p class="w-4/5">Découvrez les thèmes que nous avons créés, ainsi que ceux qui ont été généreusement partagés par notre communauté de contributeurs.</p>
                    </div>
                </div>
                <div class="w-2/12 flex flex-wrap justify-between flex-col">
                    <div class=" border-b-2 pb-8">
                        <h4 class="font-bold mb-2">Thèmes Officiels</h4>
                        <div class=" h-44 overflow-y-scroll mb-3">
                            <p class="font-medium mb-1 text-primary">C Monochromatic</p>
                            <p>Spider-man</p>
                            <p class="my-1">Hunter X Hunter</p>
                            <p>Barbie</p>
                            <p>Spider-man</p>
                            <p class="my-1">Hunter X Hunter</p>
                            <p>Barbie</p>
                            <p>Spider-man</p>
                            <p class="my-1">Hunter X Hunter</p>
                            <p>Barbie</p>
                        </div>
                    </div>
                    <div class="flex w-full justify-end items-center h-32">
                        <div class="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="community-theme">
            <h2 class="text-2xl font-bold pb-4">Ce qu'ils disent de CSS-THEME</h2>
            <p class="w-7/12 mb-8">Nous remercions la communauté pour ses précieuses contributions ! Si vous êtes passionné par la conception de thèmes et que vous souhaitez partager votre créativité avec la communauté, nous vous invitons chaleureusement à contribuer à notre projet.</p>
            <a href="https://github.com/fifi-dev/csstheme" target="_blank"> <MainButton :state="buttonStateNormal">Contribuer</MainButton></a>
            <div class="w-full flex justify-center py-9">
                <p>Pas encore de contribution</p>
            </div>
        </div>
    </main>
</template>

<script>
import MainButton from '@/components/MainButton.vue';

export default {
    components: {
    MainButton,
    },
    data() {
        return {
        buttonStateNormal: 'normal',
        };
    },
}
</script>

<style scoped>

.theme-visual{
    min-height: 250px;
    width: 100%;
    background: url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2855&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    background-size: cover;
    background-position: center;
}

</style>
