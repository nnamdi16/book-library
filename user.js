const Person = require('./person');
const BorrowBook= require('./requestList');
//Create the library constructor function 

function User (name,status) {
	Person.apply (this,[name]);
	this.status = status;
}

User.prototype = Object.create(Person.prototype);
User.prototype.constructor = User;

User.prototype.borrowBook = function (name,bookName,author) {
	BorrowBook[name] = [name,bookName,author];
}



const user = new User('Nnamdi', 'Teacher');
user.borrowBook('Nnamdi', 'Sherlock Holmes','Peter Obi');

// console.log(user);
console.log(BorrowBook);
module.exports = User;

