// server.js

const express = require('express');
const cors = require('cors');
const User = require('./user');

const app = express();

const corsOptions = {
  origin: 'https://6499872da5895612744b9d50--gorgeous-vacherin-ed86e6.netlify.app',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
