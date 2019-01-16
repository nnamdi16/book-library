//Import the Person module 
const Person = require('../person');

//Create admin constructor function
function Admin(name) {
	Person.call(this,name);
}


Admin.prototype = Object.create(Person.prototype);
Admin.prototype.constructor = Admin;

//Create the addBook Prototype method.
Admin.prototype.addBook = function () {
	
}

module.exports = Admin;