<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <MainHeader />
  <RouterView />
  <FooterBloc />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import FooterBloc from '@/components/FooterBloc.vue';

export default {
  components: {
    MainHeader,
    FooterBloc,
  },
};
</script>

