require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};
const openai = new OpenAIApi(configuration);

async function analyzeEmailForPhishing(emailContent) {
  const prompt = `Analyze the following email and determine if it is a phishing attempt:\n\n${emailContent}`;
  
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 150,
  });
  
  const analysis = response.data.choices[0].text.trim();
  return analysis;
}

module.exports = analyzeEmailForPhishing;
