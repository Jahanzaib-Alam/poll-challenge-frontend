<template>
  <img alt="Dizplai logo" height="248" width="120"
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

  background-image: url('@/assets/hero.webp');
  background-size: cover;
  background-position: center;
  height: 100vh;
}

@media (max-width: 768px) {
  body {
    background-image: url('@/assets/hero.webp');
    background-size: auto;
    /* Keep the original size */
    background-attachment: scroll;
    /* Allows scrolling */
    height: 200vh;
  }
}

/* Remove default padding added around Vue app */
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
</style>
