// var express = require('express');
// var router = express.Router();
// var multer = require('multer');
// var mongoose = require('mongoose');
// var app=express();

// var User = require('../models/user');

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
//  },


// ans : {
//  	type :String,
//  	required:true
//  },
//  clues :{
//  	type :String,
//  	required:true
//  }

// });
//  //var q = exports.user;
//  //console.log(user);
// var Image = module.exports = mongoose.model('files', imageSchema);
 
// var Image = mongoose.model('files', imageSchema);
 
// router.getImages = function(callback, limit) {
 
//  Image.find(callback).limit(limit);
// }

// // Image.findOne({qid: 2}, function(err, files) {
// //   console.log(files.path);
// //   var repath = files.path;
// // });
 
// router.getImageById = function(qid, callback) {
  
//  Image.findById(qid, callback);
 
// }
