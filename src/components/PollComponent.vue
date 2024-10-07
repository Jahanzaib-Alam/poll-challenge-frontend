<template>
  <div>
    <div v-if="!submitted">
      <PollHeader :headerText="question" />
      <PollButtons :options="options" @selectOption="selectOption" />
      <SubmitButton @submit="submitOption" />
    </div>
    <div v-else>
      <PollHeader headerText="Thank you for your response" />
      <PollResults :options="options" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PollHeader from './PollHeader.vue';
import PollButtons from './PollButtons.vue';
import SubmitButton from './SubmitButton.vue';
import PollResults from './PollResults.vue';

export default {
  components: {
    PollHeader,
    PollButtons,
    SubmitButton,
    PollResults
  },
  data() {
    return {
      question: '',
      options: [],
      selectedOptionId: null,
      submitted: false
    };
  },
  async mounted() {
    await this.fetchPollData();
  },
  methods: {
    async fetchPollData() {
      try {
        const response = await axios.get('api/polls/active');
        this.question = response.data.questionText;
        this.options = response.data.options;
      } catch (error) {
        console.error('Error fetching poll data:', error);
      }
    },
    selectOption(optionId) {
      this.selectedOptionId = optionId;
    },
    async submitOption() {
      if (this.selectedOptionId) {
        try {
          await axios.post('api/polls/vote/' + this.selectedOptionId);
          this.submitted = true;
          await this.fetchPollData();
        } catch (error) {
          console.error('Error submitting option:', error);
        }
      } else {
        alert('Please select an option before submitting.');
      }
    }
  }
};
</script>