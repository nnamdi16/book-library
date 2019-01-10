const User = require('./user');

//Create constructor function for the Teacher
function Teacher(name,status) {
	User.apply(this,[name,status]);
	
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;

const teacher = new Teacher('Nnamdi','Teacher');
console.log(teacher);
module.exports = Teacher;