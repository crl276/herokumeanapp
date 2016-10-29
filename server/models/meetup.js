var mongoose = require('mongoose');

//add it to exports so people can have access to the module
module.exports = mongoose.model('Meetup', {
	name: { type: String }
});