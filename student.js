const User = require('./user');

//Create the Student constructor function
function Student(name,status,studentLevel) {
	User.apply(this,[name,status]);
	this.studentLevel = studentLevel;
	
}

Student.prototype =Object.create(User.prototype);
Student.prototype.constructor = Student;

const student = new Student('Nnmadi', 'Student','Senior');
console.log(student);
module.exports = Student;