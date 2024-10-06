<template>
  <div class="button-container">
    <button v-for="option in options" :key="option.id"
      :class="['poll-button', { selected: selectedOptionId === option.id }]" @click="selectOption(option.id)">
      {{ option.optionText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedOptionId: null
    };
  },
  methods: {
    selectOption(optionId) {
      this.selectedOptionId = optionId;
      this.$emit('selectOption', optionId);
    }
  }
};
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 0px;
}

.poll-button {
  background-color: rgba(255, 255, 255, 0.2);
  border: 2px solid #ffffff;
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  width: 30%;
  height: 3em;
}

.poll-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.poll-button.selected {
  background-color: rgba(255, 255, 255, 0.8);
  color: purple;
}
</style>
