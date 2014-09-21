var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    res.send('<form method="post"><button type="submit">Click me</button></form>');
  })
  .post(function(req, res) {
    res.redirect('/itwork');
  });

module.exports = router;
