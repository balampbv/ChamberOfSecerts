var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
var moment = require('moment')

var app=express();

var User = require('../models/user');

//path and originalname are the fields stored in mongoDB
var imageSchema = mongoose.Schema({
 path: {
 type: String,
 required: true,
 trim: true
 },
 originalname: {
 type: String,
 required: true
 },
 qid : {
 	type :String,
 	required:true
 },
 
 points : {
 	type :String,
 	required:true
 },


ans : {
 	type :String,
 	required:true
 },
 
});
 //var q = exports.user;
 //console.log(user);
var Image = module.exports = mongoose.model('files', imageSchema);
 
var Image = mongoose.model('files', imageSchema);
 
router.getImages = function(callback, limit) {
 
 Image.find(callback).limit(limit);
}

// Image.findOne({qid: 2}, function(err, files) {
//   console.log(files.path);
//   var repath = files.path;
// });
 
router.getImageById = function(qid, callback) {
  
 Image.findById(qid, callback);
 
}

// router.get('/images', function(req, res) {
// //calling the function from index.js class using routes object..
// router.getimagebyqid(function(err, genres) {
// if (err) {
// throw err;
 
// }
// res.json(genres);
// });
// });
 
router.getImageByName = function(name, callback){
	var query = {originalname: name};
	Image.findOne(query, callback);
}

// var qid = user.qid;
 

// router.getimagebyqid = function(qid, callback){
// 	var query = {qid: qid};
// 	Image.findOne(query, callback);
// }

 
router.addImage = function(image, callback) {
 Image.create(image, callback);
}
 
 
// To get more info about 'multer'.. you can go through https://www.npmjs.com/package/multer..
var storage = multer.diskStorage({
 destination: function(req, file, cb) {
 cb(null, 'public/questions')
 },
 filename: function(req, file, cb) {
 cb(null, file.originalname);
 }
});
 
var upload = multer({
 storage: storage
});
 

 router.get('/upload', function(req, res, next) {
 res.render('index',{layout:'imgupload.handlebars'});
});
 
router.post('/upload', upload.any(), function(req, res, next) {
 
 res.send(req.files);
 
/*req.files has the information regarding the file you are uploading...
from the total information, i am just using the path and the imageName to store in the mongo collection(table)
*/
 var path = req.files[0].path;
 var imageName = req.files[0].originalname;
 var id = req.body.id;
 var points = req.body.points;
	
 var imagepath = {};
 imagepath['path'] = path;
 imagepath['originalname'] = imageName;
 imagepath['qid'] = id;
 imagepath['points'] = points;
 
 //imagepath contains two objects, path and the imageName
 
 //we are passing two objects in the addImage method.. which is defined above..
 router.addImage(imagepath, function(err) {
 
 });
 
});


// Verify user
router.post('/verify', function(req, res){

//	console.log(req.body);
	var subans = req.body.subans;
	//console.log(subans);
	var query = {qid: req.user.qid};
	var u_query = {email :req.user.email};
	//console.log(u_query);
	//console.log(query);
	var points_query = {points: req.user.points};
	console.log(points_query);
	Image.findOne(query,function(err,data){
		//console.log(qid);
	var ans = data.ans;
	//// console.log(data);
	console.log(data.ans);
	if(ans == subans)
	{
			

		//Model.update(query, { $set: { name: 'jason borne' }}, options, callback)
		if(ans=="chamberofsecrets")
		{
		// 	var date = + new Date();
		// 	console.log(date+"=========================================================");
			User.findOneAndUpdate(u_query,{ $set : {"qid" : 'FindMeIfUDare_2' , "date":Date.now()}},function(err,data){
			if(err)
				console.log(err);
			});
		}
		if(ans=="fantasticbeastsandwheretofindthem")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'DecryptMe_3' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
				});
		}
		if(ans=="cherami")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'EncryptOnMe_4' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="bobdylan")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'RevealTheSecrets_5' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="sandstorminnings")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'TearsOfThePhoenix_6' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="pangrams")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'FloatingBroomStick_7' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="huygens")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'TomRiddle_8' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="ericcantona")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'HarryFriendZoned_9' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="unknown")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'LordVoldemort_10' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="ozymandias")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'HouseSlytherine_11' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="leshorriblescernettes")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'GodrickGriffindor_12' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="oneshotonekill")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'Basilisk_13' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="femmefatale")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'ParselTongue_14' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="waroftheroses")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'HarRy_PoTter_15' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="wikipedia")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'LuciusMalfoy_16' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		
		if(ans=="hochiminhtrail")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'JKRowling_17' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}

		if(ans=="venividivici")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'SwordOfGG_18' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		if(ans=="santa'sreindeer")
		{
			User.findOneAndUpdate(u_query,{ $set : {qid : 'LeVeLComPletEd_!998' ,date:Date.now()}},function(err,data){
			if(err)
				console.log(err);
			
		});
		}
		
		User.findOneAndUpdate(u_query,{ $set : {points : (parseInt(points_query.points)+10).toString()}},function(err,data1){
			if(err)
				console.log(err);
			else
				console.log(data1);
		});
		res.send("correct");
	}
	else
	{
		res.send("Incorrect");
	}

	
	});
	


	});

module.exports = router;