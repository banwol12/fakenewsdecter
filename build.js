const fs = require('fs');
const apiKey = process.env.GEMINI_API_KEY || '';

const config = {
  GEMINI_API_KEY: apiKey
};

fs.writeFileSync('config.json', JSON.stringify(config, null, 2));
console.log('config.json has been generated successfully from environment variables.');
