var mongoose = require('mongoose');



// Clue Schema
var ClueSchema = mongoose.Schema({
	
	qid: {
		type :String
	},
	clue: {
		type : String,
		required:true

	}
	
});


var Clues = module.exports = mongoose.model('Clues', ClueSchema);



module.exports.getclue= function(qid, callback){
	var query = {qid: qid};
	Clues.findOne(query, callback);
}

Clues.getclue(name,function(err,clue){
		if(err) throw err;
	});