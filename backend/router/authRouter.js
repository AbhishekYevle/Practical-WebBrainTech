const express = require('express');
const Router = express.Router();
const Home = require('../controller/Home');
const Login = require('../controller/Login');
const Register = require('../controller/Register');
const VendorData = require('../controller/VendorData');

Router.route('/').get(Home);

Router.route('/login').post(Login);

Router.route('/register').post(Register);

Router.route('/vendor').get(VendorData);

module.exports = Router;