const User = require('../user');


function Teacher(name,status,priority) {
	User.apply(this,[name,status]);	
	this.priority = priority;
	
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;


module.exports = Teacher;
