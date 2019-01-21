//Import modules.
const Student = require('../student');
const User = require('../../user');
const requestList = require('../../../../data/requestList');
const returnList = require('../../../../data/returnList');


//Create the Junior Student constructor function
function JuniorStudent(name, status, studentLevel, priority) {
	Student.apply(this, [name, status, studentLevel]);
	this.priority = priority;
}

//Change the prototype name of the JuniorStudent.
JuniorStudent.prototype = Object.create(Student.prototype);
JuniorStudent.prototype.constructor = JuniorStudent;


//Override the borrow prototype method from the User constructor function.
User.prototype.borrowBook = function (bookName, author) {
	requestList.push({
		'BookName': bookName,
		'BookLender': this.name,
		'Author': author,
		'Priority': this.priority

	});

}

//Prototype method for returning books
User.prototype.returnBook = function (bookName, author) {
	return returnList.push({
		'BookName': bookName,
		'BookLender': this.name,
		'Author': author,
	});
}

module.exports = JuniorStudent;