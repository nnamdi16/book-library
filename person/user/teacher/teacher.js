const User = require('../user');
const requestList = require('../../../data/requestList');

//Create constructor function for the Teacher
function Teacher(name,status) {
	User.apply(this,[name,status]);	
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;

//Override the borrow prototype method from the User constructor function.
User.prototype.borrowBook =  function (bookName,author) {
		requestList.push({
			[`${bookName} by ${author}`]: this.name,
			'Priority' : 1
		});
}

module.exports = Teacher;
