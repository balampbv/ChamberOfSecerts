var express = require('express');
var router = express.Router();
var moment = require('moment')

var Handlebars = require('express-handlebars');

var User = require('../models/user');

var Clues = require('../models/clues');

//Get homepage
router.get('/',ensureAuthenticated,function(req,res){
	var query = {qid: req.user.qid};
	//console.log(query);
	if(query.qid=="LeVeLComPletEd_!998")
	{
	res.render('index',{layout:'finish.handlebars'});
  		
    }
else
  {
  	Clues.findOne(query,function(err,d){
		if(err)throw err;
		var clue1 = d.clue1;
		var clue2 = d.clue2;
		var clue3 = d.clue3;
		
		var max =d.max;
		var comments=d.panel;
		User.find({}, function(err, users) { 
		if(err)
		console.log(err);	
		else
		{
			if(users)
			{
				users.sort(function (x, y) {
	    		var n = y.points - x.points;
	    		if (n !== 0) {
	        		return n;
	    			}

	    return moment(x.date).diff(y.date, 'seconds');
	});
	}
  }
  //console.log(users.slice(0,10));
users = users.slice(0,10);
		var set ={};
		set.clue1=clue1;
		set.clue2=clue2;
		set.clue3=clue3;
		set.max=max;
		set.comments=comments;
		set.users=users;
		//console.log(set);	
		
	res.render('index',set);

		});

 });
  }	

});
 
 function ensureAuthenticated (req, res, next){
 	if(req.isAuthenticated()){
 		return next();
 	}
 	else{
 	//req.flash('error_msg','You are not logged in');
 	res.redirect('/users/indexpage');
 	}
 }

module.exports =router;