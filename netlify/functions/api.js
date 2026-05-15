const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: "Hello from Express on Netlify!" });
});

// Important: Express needs to know the base path for your function
app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);