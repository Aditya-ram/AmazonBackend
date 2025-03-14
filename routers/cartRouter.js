var express = require('express');
const { sendCartProducts } = require('../controllers/products.controller');

var cartRouter = express.Router();

cartRouter.post('/cartPost',sendCartProducts);

module.exports = {cartRouter}