require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};
const openai = new OpenAIApi(configuration);

async function generateEmail(recipientName, purpose, tone) {
  const prompt = `Write a ${tone} email to ${recipientName} about ${purpose}.`;
  
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 200,
  });
  
  const email = response.data.choices[0].text.trim();
  return email;
}

module.exports = generateEmail;
