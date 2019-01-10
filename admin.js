const Person = require('./person');

//Create the Library's Admin constructor function
function Admin(name) {
	Person.apply(this,[name]);
}

Admin.prototype = Object.create(Person.prototype);
Admin.prototype.constructor = Admin;

const admin = new Admin('Nnamdi');
console.log(admin);

module.exports = Admin;