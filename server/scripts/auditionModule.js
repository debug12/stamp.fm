AuditionModule = function(){};

var db = require('mongojs').connect("db", ["votes"]);

AuditionModule.prototype.UpdateDB = function(callback){
	db.votes.update({ votes: 0 }, { $inc: {votes:1}}, { multi: true});
};

exports.AuditionModule = AuditionModule;