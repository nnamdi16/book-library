const User = require('../user');


function Teacher(name,status) {
	User.apply(this,[name,status]);	
	this.priority = 1;
	
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;


module.exports = Teacher;
