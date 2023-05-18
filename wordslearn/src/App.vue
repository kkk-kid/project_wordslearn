<template>
  <div id="app">
    <HomeView></HomeView>
  </div>
</template>

<script>
import HomeView from './views/home/HomeView.vue';

export default {
  name: 'App',
  components: {
    HomeView,
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
