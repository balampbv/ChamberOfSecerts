// var express = require('express');
// var router = express.Router();
// var multer = require('multer');
// var mongoose = require('mongoose');
// var app=express();


// //path and originalname are the fields stored in mongoDB
// var imageSchema = mongoose.Schema({
//  path: {
//  type: String,
//  required: true,
//  trim: true
//  },
//  originalname: {
//  type: String,
//  required: true
//  },
//  qid : {
//  	type :String,
//  	required:true
//  },
 
//  points : {
//  	type :String,
//  	required:true
//  }
 
// });
 
 
// var Image = module.exports = mongoose.model('files', imageSchema);
 
// var Image = mongoose.model('files', imageSchema);
 
// router.getImages = function(callback, limit) {
 
//  Image.find(callback).limit(limit);
// }
 
 
// router.getImageById = function(id, callback) {
  
//  Image.findById(id, callback);
 
// }

// router.getImageByName = function(name, callback){
// 	var query = {originalname: name};
// 	Image.findOne(query, callback);
// }

 
// router.addImage = function(image, callback) {
//  Image.create(image, callback);
// }
 
 
// // To get more info about 'multer'.. you can go through https://www.npmjs.com/package/multer..
// var storage = multer.diskStorage({
//  destination: function(req, file, cb) {
//  cb(null, 'public/questions')
//  },
//  filename: function(req, file, cb) {
//  cb(null, file.originalname);
//  }
// });
 
// var upload = multer({
//  storage: storage
// });
//  