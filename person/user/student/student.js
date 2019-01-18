const User = require('../user');
const requestList = require('../../../data/requestList');
const returnList = require('../../../data/returnList');

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
		'BookName' : bookName,
		'BookLender': this.name,
		'Author':author,
		
	});
	
}

//Override the returnBook prototype method from the User constructor function.
User.prototype.returnBook = function(bookName,author) {
	return returnList.push({
		'BookName' : bookName,
		'BookLender': this.name,
		'Author':author,
		});
	}


module.exports = Student;