var express = require('express');
const { getSignupData } = require('../controllers/products.controller');
var signUpRouter = express.Router();

signUpRouter.get('/Signup',getSignupData);

module.exports = {signUpRouter}