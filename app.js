require('dotenv').config();
const express = require('express');
const generateEmail = require('./generateEmail');
const analyzeEmailForPhishing = require('./detectPhishing');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/generate-email', async (req, res) => {
  const { recipientName, purpose, tone } = req.body;
  try {
    const emailContent = await generateEmail(recipientName, purpose, tone);
    res.json({ emailContent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/analyze-email', async (req, res) => {
  const { emailContent } = req.body;
  try {
    const analysisResult = await analyzeEmailForPhishing(emailContent);
    res.json({ analysisResult });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
