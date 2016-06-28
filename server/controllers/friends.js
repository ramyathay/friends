var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
  return {
    show: function(req, res) {
    	Friend.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   	});
   },
   addFriend : function(req,res){
   	var friend = new Friend({name : req.body.name , age : req.body.age});
   	friend.save(function(err){
   		if(err){
   			console.log("Error while creating document");
   		}
   		else{
   			res.json();
   		}
   	});
   },
   deleteFriend : function(req,res){
   	Friend.remove({_id : req.params.id},function(err){
   		if(err){
   			console.log("Error occurred while removing entry ");
   		}
   		else{
   			res.json();
   		}
   	});
   }
  }
})();