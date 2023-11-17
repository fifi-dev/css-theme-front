<template>
  <main>
    <div class=" w-3/12 m-auto pb-16">
      <ThemeSelect />
    </div>
    <div class="hero flex pb-20">
      <div class="hero__description w-6/12">
        <h1 class=" text-5xl text-primary font-bold pb-4">Créez des sites magnifiques et modernes sans toucher au css </h1>
        <p>Bienvenue sur le Projet CSS Theme, votre outil incontournable pour la personnalisation de l'apparence de vos sites web. Vous n'avez pas besoin d'être un expert en CSS; notre librairie vous permet de générer des thèmes CSS en quelques clics. </p>
        <p class="pt-2">Libérez votre créativité et transformez l'esthétique de votre site sans tracas.</p>
        <div class="mt-5">
          <MainButton :state="buttonStateNormal">Documentation</MainButton>
          <MainButton class="ml-4 hover:bg-white hover:!text-highlight" :state="buttonStateHighlight">Explorer</MainButton>
        </div>
      </div>
      <div class="hero__visual w-5/12">
        <pre>
          <code>
            djdlsjld
          </code>
        </pre>
      </div>
    </div>
    <div class="functionalities justify-between flex pb-20">
      <div class="w-4/12">
        <h2 class="text-2xl font-bold pb-4">Fonctionnalités Exceptionnelles</h2>
        <p class="mb-5">Que vous soyez un débutant en CSS ou un professionnel chevronné, notre librairie offre les outils dont vous avez besoin pour transformer l'apparence de votre site en quelques étapes simples.</p>
        <MainButton :state="buttonStateNormal">En savoir plus</MainButton>
      </div>
      <div class="w-7/12 pl-32 grid grid-cols-2 grid-rows-2 gap-8">
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
    <div class="testimonies flex justify-between pb-20">
      <div class="w-4/12">
        <h2 class="text-2xl font-bold pb-4">Ce qu'ils disent de CSS-THEME</h2>
        <p class="mb-5">Découvrez les avis de nos utilisateurs satisfaits qui ont utilisé notre librairie CSS Theme pour personnaliser leurs sites web. Leurs retours positifs nous inspirent à continuer d'améliorer notre outil.</p>
        <MainButton :state="buttonStateNormal">Découvrir</MainButton>
      </div>
      <div class="w-6/12">
        <TestimonialsSlider />
      </div>
    </div>
    <div class="about pb-20">
      <h2 class="text-2xl font-bold pb-4 text-center">Derrière les Coulisses de CSS Theme</h2>
      <p class=" w-4/6 m-auto text-center pb-14">CSS-THEME est une initiative innovante conçue par trois passionnées de l'ingénierie web et mobile. Notre aventure a commencé avec un objectif simple : simplifier la personnalisation de l'apparence des sites web, sans sacrifier la qualité. Nous sommes étudiantes en mastère en ingénierie web et mobile, et ce projet est notre Projet de Fin d'Étude (PFE).</p>
      <div class="grid grid-cols-3 gap-20 px-52">
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
    <FooterBloc />
  </main>
</template>
<script>
import MainButton from '@/components/MainButton.vue';
import FooterBloc from '@/components/FooterBloc.vue';
import TestimonialsSlider from '@/components/TestimonialsSlider.vue';
import ThemeSelect from '@/components/ThemeSelect.vue';

export default {
  components: {
    MainButton,
    FooterBloc,
    TestimonialsSlider,
    ThemeSelect
  },
  data() {
    return {
      buttonStateNormal: 'normal',
      buttonStateHighlight: 'highlight',
    };
  },
};
</script>