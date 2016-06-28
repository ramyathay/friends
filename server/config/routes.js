var friends = require('./../controllers/friends.js');

module.exports = function(app){
	app.get('/friends',function(req,res){
		friends.show(req,res);
	});
	app.post('/addFriend',function(req,res){
		friends.addFriend(req,res);
	});
	app.get('/deleteFriend/:id',function(req,res){
		friends.deleteFriend(req,res);
	});
}