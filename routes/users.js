var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');
//Front page
router.get('/indexpage', function(req, res){
	res.render('index',{layout:'front.handlebars'});
});

// Register
router.get('/registerabc', function(req, res){
	res.render('register',{layout:'layout.handlebars'});
});

// Login
router.get('/loginabc', function(req, res){
	if(req.isAuthenticated())
	{
	//	var username = {name : user};
		res.redirect('/');
	}
	else
		res.render('login',{layout:'layout.handlebars'});
});

// Register User
router.post('/register', function(req, res){
	var name = req.body.usernamesignup;
	var email = req.body.emailsignup;
	var password = req.body.passwordsignup;
	var password2 = req.body.passwordsignup_confirm;
	var qid = "ChamberOfSecret_1";
	var points = 0;
// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
	User.getUserBymail(email, function(err, m){
   	if(err) throw err;
   			if(m){
   				//console.log(m);
   				req.flash('error_msg', 'Email already exits!!!');

				res.redirect('/users/register');
				}
   	else
   	{
	var errors = req.validationErrors();
	console.log(errors);
	if(!errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newUser = new User({
			name: name,
			email:email,
//			username: username,
			password: password,
			qid:qid,
			points:points
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');

	}
}
});
});

passport.use(new LocalStrategy(
  function(email, password, done) {
   User.getUserBymail(email, function(err, user){
//    function(req, res){
//   res.cookie("key", user);
// });
   	if(err) throw err;
   	if(!user){	

   		return done(null, false, {message: 'Unknown User'});
   	}

   	User.comparePassword(password, user.password, function(err, isMatch){
   		if(err) throw err;
   		if(isMatch){
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });
//   callback(user);
}));



passport.serializeUser(function(user, done) {
  done(null, user.id);
   
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});
router.post('/login', passport.authenticate('local',{failureRedirect : '/users/login',
    failureFlash : true}), function(req, res) {
	res.redirect('/');
});



router.get('/logout', function(req, res){
	
	req.flash('success_msg', 'You are logged out');

	//req.session.destroy();
	req.session.destroy(function (err) {
	req.logout();//Removes login sessions
	
	res.redirect('/users/login');
	
  });

	
});





module.exports = router;

