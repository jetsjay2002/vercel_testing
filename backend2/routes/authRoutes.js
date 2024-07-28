const express = require('express');
const { registerAgent } = require('../controllers/createAgent');

const router = express.Router();

router.post('/register', registerAgent);

module.exports = router;
