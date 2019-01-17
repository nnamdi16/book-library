const User = require('../user');
const requestList = require('../../../data/requestList');

//Create the Student constructor function
function Student(name,status,studentLevel) {
	User.apply(this,[name,status]);
	this.studentLevel = studentLevel;	
}

Student.prototype =Object.create(User.prototype);
Student.prototype.constructor = Student;


// Create the borrowBook prototype method
User.prototype.borrowBook =  function (bookName,author) {
	requestList.push({
		[`${bookName} by ${author}`] : this.name
	})
	
}



module.exports = Student;