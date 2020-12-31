const express = require('express');
const authenticate = require('../middleware/auth');
const indexRouter = express.Router();

indexRouter.get('/', authenticate, (req, res) =>
  res.status(200).json({ message: 'Welcome to Express API template :v' })
);

module.exports = indexRouter;
