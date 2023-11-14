<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <MainHeader />
  <RouterView />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
  components: {
    MainHeader,
  },
};
</script>

