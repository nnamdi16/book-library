const User = require('../user');
const requestList = require('../../../data/requestList');
const returnList = require('../../../data/returnList');
const library = require('../../../data/library');

//Create constructor function for the Teacher
function Teacher(name,status,priority) {
	User.apply(this,[name,status]);	
	this.priority = priority;
	
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;

//Override the borrow prototype method from the User constructor function.
User.prototype.borrowBook =  function (bookName,author) {
		requestList.push({
			'BookName' : bookName,
			'BookLender': this.name,
			'Author':author,
			'Priority' :  this.priority
		});
}

//Override the user returnList prototype method
User.prototype.returnBook = function(bookName,author) {
	
	return returnList.push({
		'BookName' : bookName,
		'BookLender': this.name,
		'Author':author,
	});
}

module.exports = Teacher;
