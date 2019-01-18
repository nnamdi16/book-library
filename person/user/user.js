//Import Person module to user.js
const Person = require('../person');
const requestList = require('../../data/requestList');

//Create the user constructor function
function User (name,status) {
	Person.apply (this,[name]);
	this.status = status;
}

User.prototype = Object.create(Person.prototype);
User.prototype.constructor = User;

User.prototype.borrowBook = function (bookName,author) {
	return requestList.push({
		[`${bookName} by ${author}`]: this.name,
	})
};



module.exports = User;