<template>
  <div class="submit-button-container">
    <button @click="$emit('submit')" class="submit-button">SUBMIT</button>
  </div>
</template>

<style scoped>
.submit-button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px;
}

.submit-button {
  background-color: white;
  border: 2px solid #ffffff;
  color: purple;
  padding: 10px 20px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 30%;
}

.submit-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}
</style>