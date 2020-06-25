var passport = require('passport')
var BearerStrategy = require('passport-http-bearer');
var userlogin =require("./../models/UserSchema")
var jwt = require("jsonwebtoken")
passport.use(new BearerStrategy(
    function(token, done) {
        jwt.verify(token, 'secret', function(err,decoded){
      console.log(decoded)
      userlogin.findOne({ _id: decoded.data._id }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        return done(null,true);
      });
    })}
  ));