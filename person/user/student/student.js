//Import files 
const User = require('../user');

//Create the Student constructor function
function Student(name, status, studentLevel) {
	User.apply(this, [name, status]);
	this.studentLevel = studentLevel;
}

//Change the prototype name of the Student constructor.
Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;





module.exports = Student;