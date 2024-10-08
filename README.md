# poll-challenge-frontend
Front end Vue application for Poll application

# Assumptions/Considerations
In a live environment, a session variable or cookie would be used to prevent someone from submitting multiple votes from the same browser by just refreshing the page. This has been left out to make it easy to demo the application.

Another point is that on the results page, we should have a get request sent every 10 seconds or so to ensure that when other votes come in, the results are updated on the page in real time. This is something I forgkt to implement before submitting the challenge.

# Prerequisites
- Node JS
- Vue CLI

# Instructions for local setup
1. Ensure the back-end API is running at localhost on port 8081.
2. Ensure NodeJS and Vue CLI are installed on your machine.
3. Clone the front end git repository from GitHub to your machine.
4. Navigate to the folder where it was cloned and run the command npm run serve.
5. You should now be able to access the application in a browser via localhost:8080.
6. To run unit tests, stop the dev server and run npm run test:unit.
