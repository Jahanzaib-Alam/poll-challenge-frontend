<template>
  <h2 class="poll-header">{{ headerText }}</h2>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.poll-header {
  color: white;
  font-size: 2em;
}
</style>
