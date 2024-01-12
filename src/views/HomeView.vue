<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <main class="pb-20 max-sm:pb-12">
    <div class=" w-3/12 max-md:w-7/12 max-md:my-5 max-sm:mb-0 m-auto pb-16">
      <ThemeSelect />
    </div>
    <div class="hero flex max-sm:block pb-20 max-sm:pb-12 justify-between">
      <div class="hero__description w-6/12 max-sm:w-full max-sm:mb-8">
        <h1 class=" text-5xl text-primary font-bold pb-4 max-sm:text-justify">Créez des sites magnifiques et modernes sans toucher au css </h1>
        <p>Bienvenue sur le Projet CSS-THEME, votre outil incontournable pour la personnalisation de l'apparence de vos sites web. Vous n'avez pas besoin d'être un expert en CSS; notre librairie vous permet de générer des thèmes CSS en quelques clics. </p>
        <p class="pt-2">Libérez votre créativité et transformez l'esthétique de votre site sans tracas.</p>
        <div class="mt-5">
          <MainButton :state="buttonStateNormal">Documentation</MainButton>
          <RouterLink to="/explorer"><MainButton class="ml-4 hover:bg-white hover:!text-highlight" :state="buttonStateHighlight">Explorer</MainButton></RouterLink>
        </div>
      </div>
      <div class="hero__visual w-5/12 max-lg:w-6/12 max-lg:ml-4 max-sm:w-full max-sm:ml-0">
        <AnimatedTerminal />
      </div>
    </div>
    <div class="functionalities justify-between flex max-sm:block pb-20 max-sm:pb-12">
      <div class="w-4/12 max-lg:w-5/12 max-sm:w-full max-sm:mb-8">
        <h2 class="text-2xl font-bold pb-4">Fonctionnalités Exceptionnelles</h2>
        <p class="mb-5">Que vous soyez un débutant en CSS ou un professionnel chevronné, notre librairie offre les outils dont vous avez besoin pour transformer l'apparence de votre site en quelques étapes simples.</p>
        <MainButton :state="buttonStateNormal">En savoir plus</MainButton>
      </div>
      <div class="w-7/12 pl-32 max-lg:pl-10 grid grid-cols-2 grid-rows-2 gap-8 max-sm:gap-y-4 max-sm:w-full max-sm:pl-0 max-lg:gap-6">
          <div>
            <h3 class=" text-base pb-2 font-medium">Thèmes prédéfinis</h3>
            <p>Choisissez parmi une variété de thèmes prédéfinis pour une personnalisation rapide.</p>
          </div>
          <div className="col-start-1 row-start-2">
            <h3 class=" text-base pb-2 font-medium">Thèmes Personnalisés</h3>
            <p>Créez des thèmes personnalisés en spécifiant les couleurs, les polices et plus encore...</p>
          </div>
          <div className="col-start-2 row-start-1">
            <h3 class=" text-base pb-2 font-medium">Compatibilité</h3>
            <p>Fonctionne avec différents frameworks CSS, y compris Tailwind CSS, Bootstrap.</p>
          </div>
          <div className="row-start-2">
            <h3 class=" text-base pb-2 font-medium">Animations Fluides</h3>
            <p>Choisissez parmi une variété d'effets de transition pour rendre votre contenu encore plus dynamique.</p>
          </div>
      </div>
    </div>
    <div class="testimonies flex max-sm:block justify-between pb-20 max-sm:pb-12">
      <div class="w-4/12 max-lg:w-5/12 max-sm:w-full max-sm:mb-8">
        <h2 class="text-2xl font-bold pb-4">Ce qu'ils disent de CSS-THEME</h2>
        <p class="mb-5">Découvrez les avis de nos utilisateurs satisfaits qui ont utilisé notre librairie CSS-THEME pour personnaliser leurs sites web. Leurs retours positifs nous inspirent à continuer d'améliorer notre outil.</p>
          <RouterLink to="/explorer"><MainButton class=" hover:bg-white hover:!text-highlight" :state="buttonStateHighlight">Découvrir</MainButton></RouterLink>
      </div>
      <div class="w-6/12 max-lg:pl-10 max-lg:w-7/12 max-sm:w-full max-sm:pl-0">
        <TestimonialsSlider />
      </div>
    </div>
    <div class="about">
      <h2 class="text-2xl font-bold pb-4 text-center max-sm:text-start">Derrière les Coulisses de CSS-THEME</h2>
      <p class=" w-4/6 max-lg:w-5/6 max-sm:w-full m-auto text-center max-sm:text-justify pb-14">CSS-THEME est une initiative innovante conçue par trois passionnées de l'ingénierie web et mobile. Notre aventure a commencé avec un objectif simple : simplifier la personnalisation de l'apparence des sites web, sans sacrifier la qualité. Nous sommes étudiantes en mastère en ingénierie web et mobile, et ce projet est notre Projet de Fin d'Étude (PFE).</p>
      <div class="grid grid-cols-3 gap-20 max-sm:gap-5 px-52 max-sm:px-0 max-lg:px-10">
        <div>
          <img class="mb-5" src="@/assets/karen_azoulay.jpg" alt="AZOULAY Karen">
          <h3 class=" text-basefont-medium">AZOULAY Karen</h3>
          <p>Front-end Developer</p>
          <div class="text-primary mt-1">
            <a href="" target="_blank">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>
            <a class="mx-2" href="https://github.com/Karen160" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a href="" target="_blank">
              <font-awesome-icon icon="fa-solid fa-link" />
            </a>
          </div>
        </div>
        <div>
          <img class="mb-5" src="@/assets/fideline_bazana_ntomo.jpg" alt="BAZANA NTOMO Fideline">
          <h3 class=" text-basefont-medium">BAZANA NTOMO Fideline</h3>
          <p>Creative Developer</p>
          <div class="text-primary mt-1">
            <a href="https://www.linkedin.com/in/fideline/" target="_blank">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>
            <a class="mx-2" href="https://github.com/fifi-dev" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a href="https://fideline.fr/" target="_blank">
              <font-awesome-icon icon="fa-solid fa-link" />
            </a>
          </div>
        </div>
        <div>
          <img class="mb-5" src="@/assets/coralie_ouedraogo.jpg" alt="OUEDRAOGO Coralie">
          <h3 class=" text-basefont-medium">OUEDRAOGO Coralie</h3>
          <p>Full-stack Developer</p>
          <div class="text-primary mt-1">
            <a href="https://www.linkedin.com/in/coralie-ouedraogo/" target="_blank">
              <font-awesome-icon icon="fa-brands fa-linkedin-in" />
            </a>
            <a class="mx-2" href="https://github.com/coralieO" target="_blank">
              <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a href="" target="_blank">
              <font-awesome-icon icon="fa-solid fa-link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import MainButton from '@/components/MainButton.vue';
import TestimonialsSlider from '@/components/TestimonialsSlider.vue';
import ThemeSelect from '@/components/ThemeSelect.vue';
import AnimatedTerminal from '@/components/AnimatedTerminal.vue';

export default {
  components: {
    MainButton,
    TestimonialsSlider,
    ThemeSelect,
    AnimatedTerminal
},
  data() {
    return {
      buttonStateNormal: 'normal',
      buttonStateHighlight: 'highlight',
    };
  },
};
</script>