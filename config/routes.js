var express = require('express');
var homeController = require('../app/controllers/home_controller');
var authController = require('../app/controllers/authentication_controller');

var router = express.Router();

router.route('/')
  .get(homeController.getIndex);

router.route('/signup')
  .get(authController.getSignup);

router.route('/login')
  .get(authController.getLogin);

router.route('/logout')
  .get(authController.getLogout);

router.route('/forgot_password')
  .get(authController.getForgotPassword);

router.route('/reset_password/:token')
  .get(authController.getResetPassword);

module.exports = router;
