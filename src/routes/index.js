const express = require('express');
const { testEnvironmentVariable } = require('../settings');

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

module.exports = router;
