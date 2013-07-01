UserModule = function(){};

var db = require('mongojs').connect("stampfm", ["profiles"])

//take bio, take their name, basic information
UserModule.prototype.updateDB = function(name, location, bio, fb, twit, id, gender, birthday, callback)
{
	db.profiles.save({_id: id, name: name, location: location, bio: bio, facebook: fb, twitter: twit, following: [], followers: [], shared: []}, function(e,o){
		callback(true);
	});
}

//take in a picture, and post it to S3

//Music uploads

//Displaying playlists

exports.UserModule = UserModule;