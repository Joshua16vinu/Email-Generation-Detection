const axios = require('axios');

// Function to generate email
async function generateEmail() {
  try {
    const response = await axios.post('http://localhost:3000/generate-email', {
      recipientName: 'John Doe',
      purpose: 'inviting to a meeting next week',
      tone: 'formal'
    });
    console.log('Generated Email:', response.data.emailContent);
  } catch (error) {
    console.error('Error generating email:', error);
  }
}

// Function to analyze email for phishing
async function analyzeEmail() {
  try {
    const response = await axios.post('http://localhost:3000/analyze-email', {
      emailContent: 'Dear User,\n\nWe noticed suspicious activity in your account. Please click the link below to verify your information:\n\nhttp://example-phishing-link.com\n\nThank you,\nSecurity Team'
    });
    console.log('Analysis Result:', response.data.analysisResult);
  } catch (error) {
    console.error('Error analyzing email:', error);
  }
}

// Call the functions
generateEmail();
analyzeEmail();
