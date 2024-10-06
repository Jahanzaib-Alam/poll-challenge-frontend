<template>
  <h2 class="poll-question">{{ question }}</h2>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.poll-question {
  color:white;
  font-size:2em;
}
</style>
