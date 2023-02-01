# Gyani API
This is a very basic project to answer one liner questions using ChatGPT behind the scenes. Built with NodeJs (v16+) & Express, this application serves an API to send questions to and receive the answer in response.

### Prequisites
- NodeJs v16+

### The Environment
To run the app, you'll need to place a `.env` file with the following values at the root of the project. 
```
OPENAI_MODEL=text-davinci-002
API_KEY=your_chatgpt_token
STATIC_TOKEN=a_token_that_must_be_included_in_your_requests_within_authorization_header
PORT=the_port_on_which_the_express_app_would_run
```

### Running the App
Execute: `npm run start`

### Sending Requests to the App
Ensure the requests contain a `authorization` header with a value same as the `STATIC_TOKEN` environment variable.

### API
 - POST /ask
    - Body: { question: "Is 2020 a leap year?" }


