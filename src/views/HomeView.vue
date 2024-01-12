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
        <h1 class="text-5xl text-primary font-bold pb-4 max-sm:text-justify">{{ $t('hero.title') }}</h1>
        <p>{{ $t('hero.welcome') }}</p>
        <p class="pt-2">{{ $t('hero.topline') }}</p>
        <div class="mt-5">
          <MainButton :state="buttonStateNormal">{{ $t('hero.documentationButton') }}</MainButton>
          <RouterLink to="/explorer">
            <MainButton class="ml-4 hover:bg-white hover:!text-highlight" :state="buttonStateHighlight">
              {{ $t('hero.exploreButton') }}
            </MainButton>
          </RouterLink>
        </div>
      </div>
      <div class="hero__visual w-5/12 max-lg:w-6/12 max-lg:ml-4 max-sm:w-full max-sm:ml-0">
        <AnimatedTerminal />
      </div>
    </div>
    <div class="functionalities justify-between flex max-sm:block pb-20 max-sm:pb-12">
      <div class="w-4/12 max-lg:w-5/12 max-sm:w-full max-sm:mb-8">
        <h2 class="text-2xl font-bold pb-4">{{ $t('func_title') }}</h2>
        <p class="mb-5">{{ $t('func_desc') }}</p>
        <MainButton :state="buttonStateNormal">{{ $t('learn_more') }}</MainButton>
      </div>
      <div class="w-7/12 pl-32 max-lg:pl-10 grid grid-cols-2 grid-rows-2 gap-8 max-sm:gap-y-4 max-sm:w-full max-sm:pl-0 max-lg:gap-6">
          <div>
            <h3 class="text-base pb-2 font-medium">{{ $t('predefined_themes.title') }}</h3>
            <p>{{ $t('predefined_themes.description') }}</p>
          </div>
          <div class="col-start-1 row-start-2">
            <h3 class="text-base pb-2 font-medium">{{ $t('custom_themes.title') }}</h3>
            <p>{{ $t('custom_themes.description') }}</p>
          </div>
          <div class="col-start-2 row-start-1">
            <h3 class="text-base pb-2 font-medium">{{ $t('compatibility.title') }}</h3>
            <p>{{ $t('compatibility.description') }}</p>
          </div>
          <div class="row-start-2">
            <h3 class="text-base pb-2 font-medium">{{ $t('smooth_animations.title') }}</h3>
            <p>{{ $t('smooth_animations.description') }}</p>
          </div>
      </div>
    </div>
    <div class="testimonies flex max-sm:block justify-between pb-20 max-sm:pb-12">
      <div class="w-4/12 max-lg:w-5/12 max-sm:w-full max-sm:mb-8">
        <h2 class="text-2xl font-bold pb-4">{{ $t('testimonies.title') }}</h2>
        <p class="mb-5">{{ $t('testimonies.description') }}</p>
        <RouterLink to="/explorer">
          <MainButton class="hover:bg-white hover:!text-highlight" :state="buttonStateHighlight">
            {{ $t('testimonies.discover') }}
          </MainButton>
        </RouterLink>
      </div>
      <div class="w-6/12 max-lg:pl-10 max-lg:w-7/12 max-sm:w-full max-sm:pl-0">
        <TestimonialsSlider />
      </div>
    </div>
    <div class="about">
      <h2 class="text-2xl font-bold pb-4 text-center max-sm:text-start">{{ $t('about.title') }}</h2>
      <p class="w-4/6 max-lg:w-5/6 max-sm:w-full m-auto text-center max-sm:text-justify pb-14">{{ $t('about.description') }}</p>
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