var express = require('express');
var router = express.Router();
var multer = require('multer');
var mongoose = require('mongoose');
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

clues : {
 	type :String,
 	required:true
 }

 
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

router.get('/images', function(req, res) {
//calling the function from index.js class using routes object..
router.getimagebyqid(function(err, genres) {
if (err) {
throw err;
 
}
res.json(genres);
});
});
 
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
	console.log(subans);
	var query = {qid: req.body.qid};
	console.log(query);
	var points_query = {points: req.body.points};
	console.log(points_query);
	Image.findOne(query,function(err,data){
		//console.log(qid);
	var ans = data.ans;
	// console.log(data);
	 console.log(data.ans);
	if(ans == subans)
	{

		User.update(query,{ $set : {qid : (parseInt(query.qid)+1).toString()}},function(err,data){
			if(err)
				console.log(err);
			else
				console.log(data);
		});

		
		User.update(points_query,{ $set : {points : (parseInt(points_query.points)+10).toString()}},function(err,data1){
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