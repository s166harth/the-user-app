const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();

    // Send the users data as a JSON response
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

module.exports = router;
