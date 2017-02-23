var express = require('express');
var router = express.Router();



//Get Rulespage
router.get('/rules',ensureAuthenticated,function(req,res){
	res.render('rules',{layout:'dashlayout.handlebars'});
});

//Get Clues
router.get('/clues',ensureAuthenticated,function(req,res){
	res.render('clues',{layout:'dashlayout.handlebars'});
});

//Get Leaderboard
router.get('/leaderboard',ensureAuthenticated,function(req,res){
	res.render('leaderboard',{layout:'dashlayout.handlebars'});
});

//Get panel
router.get('/panel',ensureAuthenticated,function(req,res){
	res.render('panel',{layout:'dashlayout.handlebars'});
});

//Get contact
router.get('/contact',ensureAuthenticated,function(req,res){
	res.render('contact',{layout:'dashlayout.handlebars'});
});

//Get profile
router.get('/profile',ensureAuthenticated,function(req,res){
	res.render('profile',{layout:'dashlayout.handlebars'});
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