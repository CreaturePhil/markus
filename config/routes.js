var express = require('express');
var passportConf = require('./passport');
var homeController = require('../app/controllers/home_controller');
var authController = require('../app/controllers/authentication_controller');

var router = express.Router();

router.route('/')
  .get(homeController.getIndex);

router.route('/signup')
  .get(authController.getSignup)
  .post(authController.postSignup);

router.route('/login')
  .get(authController.getLogin)
  .post(authController.postLogin);

router.route('/logout')
  .get(authController.getLogout);

router.route('/forgot_password')
  .get(authController.getForgotPassword)
  .post(authController.postForgotPassword);

router.route('/reset_password/:token')
  .get(authController.getResetPassword)
  .post(authController.postResetPassword);

module.exports = router;
