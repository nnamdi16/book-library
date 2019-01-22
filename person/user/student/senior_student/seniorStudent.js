const Student = require('../student');
const User = require('../../user');
const requestList = require('../../../../data/requestList');
const returnList = require('../../../../data/returnList');


//Create the Senior Student constructor function
function SeniorStudent(name, status, studentLevel, priority) {
	Student.apply(this, [name, status, studentLevel]);
	this.priority = 2;
}

//Change the prototype method of SeniorStudent constructor.
SeniorStudent.prototype = Object.create(Student.prototype);
SeniorStudent.prototype.constructor = SeniorStudent;






module.exports = SeniorStudent;