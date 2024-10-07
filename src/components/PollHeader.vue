<template>
  <div class="header-container">
    <h2 class="poll-header">{{ headerText }}</h2>
  </div>

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
.header-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
}

.poll-header {
  color: white;
  font-size: 2em;
  width: 30%;
}
</style>
