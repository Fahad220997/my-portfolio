const express = require('express');
const router = express.Router();

// POST contact form
router.post('/', async (req, res) => {
  res.json({ message: 'Contact form received (placeholder)' });
});

module.exports = router; 