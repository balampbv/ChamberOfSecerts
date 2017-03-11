var express = require('express');
var router = express.Router();

var Handlebars = require('express-handlebars');

var User = require('../models/user');

var Clues = require('../models/clues');

//Get homepage
router.get('/',ensureAuthenticated,function(req,res){
	//console.log(user);
	var clues ={};
	var query = {qid: "ChamberOfSecret_1"};
	//console.log(query);
	Clues.findOne(query,function(err,d){
		if(err)throw err;
		//console.log(d.clue);
	var clues = d.clue;
	var comments=d.panel;
	//console.log(d);
	User.find({}, null, {sort: {points: 'descending'},limit:10}, function(err, users) {
	
	var set ={};
	set.clues=clues;
	set.comments=comments;
	set.users=users;
	//res.render('/',users);
	//console.log(clues);
	console.log(req.cookies.name);
 		
	if(err)
	console.log(err);
	
	res.render('index',set);
		});

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