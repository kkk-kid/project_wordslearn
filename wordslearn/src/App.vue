<template>
  <div id="app">
    <router-view>
      <HomeView></HomeView>
      <LoginFram></LoginFram>
    </router-view>
    
  </div>
</template>

<script>
import HomeView from './views/home/HomeView.vue';
import LoginFram from './views/loginframe/LoginFram.vue';

export default {
  name: 'App',
  components: {
    HomeView,
    LoginFram
  },
  mounted() {
            window.addEventListener('unload', this.saveState)
        },
        methods: {
            saveState() {
                sessionStorage.setItem('state', JSON.stringify(this.$store.state))
            }
        }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
