/**
 * Route /signup
 * --------------------
 */

// Signup page.
exports.getSignup = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('authentication/signup', {
    title: 'Create Account'
  });
};

/**
 * Route /login
 * --------------------
 */

// Login page.
exports.getLogin = function(req, res) {
  if (req.user) return res.redirect('/');
  res.render('authentication/login', {
    title: 'Login'
  });
};

/**
 * Route /logout
 * --------------------
 */

// Log the user out.
exports.getLogout = function(req, res) {
  req.logout();
  res.redirect('/');
};

/**
 * Route /forgot_password
 * --------------------
 */

// Forgot password page.
exports.getForgotPassword = function(req, res) {
  if (req.isAuthenticated()) return res.redirect('/');
  res.render('authentication/forgot_password', {
    title: 'Forgot Password'
  });
};

/**
 * Route /reset_password
 * --------------------
 */

// Get reset password page.
exports.getResetPassword = function(req, res) {
  if (req.isAuthenticated()) return res.redirect('/');
  User
    .findOne({ resetPasswordToken: req.params.token })
    .where('resetPasswordExpires').gt(Date.now())
    .exec(function(err, user) {
      if (!user) {
        req.flash('errors', { msg: 'Password reset token is invalid or has expired.' });
        return res.redirect('/forgot');
      }
      res.render('authentication/reset_password', {
        title: 'Password Reset'
      });
    });
};
