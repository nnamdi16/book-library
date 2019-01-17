const Student = require('../student');
const User = require('../../user');
const requestList = require('../../../../data/requestList');


//Create the Senior Student constructor function
function JuniorStudent(name,status,studentLevel) {
	Student.apply(this,[name,status,studentLevel]);		
}

JuniorStudent.prototype =Object.create(Student.prototype);
JuniorStudent.prototype.constructor = JuniorStudent;


// //Override the borrow prototype method from the User constructor function.
User.prototype.borrowBook =  function (bookName,author) {
		requestList.push({
			[`${bookName} by ${author}`]: this.name,
			'Priority' : 3
		});
	}

module.exports = JuniorStudent;
	