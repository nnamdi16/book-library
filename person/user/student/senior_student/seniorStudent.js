const Student = require('../student');
const User = require('../../user');
const requestList = require('../../../../data/requestList');


//Create the Senior Student constructor function
function SeniorStudent(name,status,studentLevel) {
	Student.apply(this,[name,status,studentLevel]);		
}

SeniorStudent.prototype =Object.create(Student.prototype);
SeniorStudent.prototype.constructor = SeniorStudent;


//Override the borrow prototype method from the User constructor function.
User.prototype.borrowBook =  function (bookName,author) {
		requestList.push({
			[`${bookName} by ${author}`]: this.name,
			'Priority' : 2
		});
	}

module.exports = SeniorStudent;
	