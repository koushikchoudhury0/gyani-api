const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

async function answerOneLinerQuestion(input) {
    try {
        const completion = await openai.createCompletion({
            model: process.env.OPENAI_MODEL,
            prompt: input,
            max_tokens: 1000,
            temperature: 0
        });
        return {
            success: true,
            answer: completion.data.choices[0].text.trimStart()
        }
    } catch(err) {
        console.error(err);
        return {
            success: false,
            msg: "Something went wrong"
        }
    }
}

async function completeCode(input) {
    try {
        const completion = await openai.createCompletion({
            model: 'code-davinci-002',
            prompt: input,
            max_tokens: 2047,
            temperature: 0
        });
        return {
            success: true,
            answer: completion.data.choices[0].text.trimStart()
        }
    } catch(err) {
        console.error(err);
        return {
            success: false,
            msg: "Something went wrong"
        }
    }
}

module.exports = {
    answerOneLinerQuestion, completeCode
}