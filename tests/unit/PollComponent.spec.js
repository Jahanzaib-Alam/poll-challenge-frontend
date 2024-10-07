import { mount } from '@vue/test-utils';
import PollComponent from '@/components/PollComponent.vue';
import axios from 'axios';
import flushPromises from 'flush-promises';
import '@testing-library/jest-dom';

jest.mock('axios');

describe('PollComponent', () => {
  let pollWrapper;

  const mockPollData = {
    data: {
      questionText: 'What is your favorite pet?',
      options: [
        { id: 1, optionText: 'Dinosaur' },
        { id: 2, optionText: 'Turtle' }
      ]
    }
  };

  beforeEach(async () => {
    axios.get.mockResolvedValue(mockPollData);
    pollWrapper = mount(PollComponent);
    await flushPromises();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Verify that poll question displayed after fetching poll', () => {
    expect(pollWrapper.text()).toContain('What is your favorite pet?');
  });

  it('Verify poll buttons shown based on options in fetch poll response', () => {
    const pollButtons = pollWrapper.findComponent({ name: 'PollButtons' });
    expect(pollButtons.exists()).toBe(true);
    expect(pollButtons.props().options).toHaveLength(2);
  });

  it('Verify results displayed after vote submitted', async () => {
    axios.post.mockResolvedValue({});

    const pollButtons = pollWrapper.findComponent({ name: 'PollButtons' });
    pollButtons.vm.$emit('selectOption', 1); // Trigger option selected

    const submitButton = pollWrapper.findComponent({ name: 'SubmitButton' });
    await submitButton.vm.$emit('submit'); // Trigger submit button clicked

    await flushPromises(); // Wait for refetching poll data for results
    expect(pollWrapper.text()).toContain('Thank you for your response');
    expect(pollWrapper.findComponent({ name: 'PollResults' }).exists()).toBe(true);
  });

  it('Verify no active poll message displayed when no active poll', async () => {
    axios.get.mockRejectedValue(new Error('No active poll found'));
    pollWrapper = mount(PollComponent);
    await flushPromises();
    expect(pollWrapper.text()).toContain('There is no active poll, please come back later');
  });
});
