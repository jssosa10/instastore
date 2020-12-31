const express = require('express');
const track = require('../services/tracking');
const authenticate = require('../middleware/auth');
const findClosest = require('../controllers/stores');
const storesRouter = express.Router();

storesRouter.get('/', authenticate, async (req, res) =>{
  const store = await findClosest(req.body);
  if(store){
    track(req, 200, store);
    res.status(200).json(store);
  }
  else{
    const errorMsg = {'message': 'no stores available'};
    track(req, 404, errorMsg)
    res.status(404).json(errorMsg);
  }
});

module.exports = storesRouter;
