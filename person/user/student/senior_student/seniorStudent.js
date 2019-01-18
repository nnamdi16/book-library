const Student = require('../student');
const User = require('../../user');
const requestList = require('../../../../data/requestList');


//Create the Senior Student constructor function
function SeniorStudent(name,status,studentLevel,priority) {
	Student.apply(this,[name,status,studentLevel]);	
	this.priority = priority;	
}

SeniorStudent.prototype =Object.create(Student.prototype);
SeniorStudent.prototype.constructor = SeniorStudent;


//Override the borrow prototype method from the User constructor function.
User.prototype.borrowBook =  function (bookName,author) {
	requestList.push({
		'BookName' : bookName,
		'BookLender': this.name,
		'Author':author,
		'Priority':this.priority
		
	})
	}

module.exports = SeniorStudent;
	