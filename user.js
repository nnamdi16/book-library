const Person = require('./person');
//Create the library constructor function 

function User (name,status) {
	Person.apply (this,[name]);
	this.status = status;
}

User.prototype = Object.create(Person.prototype);
User.prototype.constructor = User;

const user = new User('Nnamdi', 'Teacher');
console.log(user);
module.exports = User;

