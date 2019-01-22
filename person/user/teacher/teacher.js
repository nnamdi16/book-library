//Import required files
const User = require('../user');

//Creating a teacher constructor
function Teacher(name,status) {
	User.apply(this,[name,status]);	
	this.priority = 1;
	
}

//Changing the prototype of the Teacher constructor to Teacher
Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;


module.exports = Teacher;
