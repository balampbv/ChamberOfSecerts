var express = require('express');
var router = express.Router();

var Handlebars = require('express-handlebars');

var User = require('../models/user');

//Get homepage
router.get('/',ensureAuthenticated,function(req,res){

	User.find({}, null, {sort: {points: 'descending'}}, function(err, users) {
	
	//console.log(users);
	//res.render('/',users);
//
if(err)
	console.log(err);
	res.render('index',{users});
 });
});
 
 function ensureAuthenticated (req, res, next){
 	if(req.isAuthenticated()){
 		return next();
 	}
 	else{
 	//req.flash('error_msg','You are not logged in');
 	res.redirect('/users/login');
 	}
 }

module.exports =router;