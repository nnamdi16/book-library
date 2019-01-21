const Student = require('../student');
const User = require('../../user');
const requestList = require('../../../../data/requestList');
const returnList = require('../../../../data/returnList');


//Create the Senior Student constructor function
function SeniorStudent(name, status, studentLevel, priority) {
	Student.apply(this, [name, status, studentLevel]);
	this.priority = priority;
}

//Change the prototype method of SeniorStudent constructor.
SeniorStudent.prototype = Object.create(Student.prototype);
SeniorStudent.prototype.constructor = SeniorStudent;


//Override the borrow prototype method from the User constructor function.
User.prototype.borrowBook = function (bookName, author) {
	requestList.push({
		'BookName': bookName,
		'BookLender': this.name,
		'Author': author,
		'Priority': this.priority

	})
}

//Override the returnBook prototype method from the User constructor function.
User.prototype.returnBook = function (bookName, author) {
	return returnList.push({
		'BookName': bookName,
		'BookLender': this.name,
		'Author': author,
	});
}



module.exports = SeniorStudent;