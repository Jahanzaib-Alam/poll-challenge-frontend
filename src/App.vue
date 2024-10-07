<template>
  <img alt="Dizplai logo" height="80" width="120"
    src="https://dizplai.com/wp-content/themes/neverno/library/images/logo.svg">
  <PollComponent />
</template>

<script>
import PollComponent from './components/PollComponent.vue';

export default {
  name: 'App',
  components: {
    PollComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-image: url('@/assets/hero.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
}
</style>
