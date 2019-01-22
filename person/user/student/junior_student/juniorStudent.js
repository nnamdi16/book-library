//Import modules.
const Student = require('../student');



//Create the Junior Student constructor function
function JuniorStudent(name, status, studentLevel, priority) {
	Student.apply(this, [name, status, studentLevel]);
	this.priority = 3;
}

//Change the prototype name of the JuniorStudent.
JuniorStudent.prototype = Object.create(Student.prototype);
JuniorStudent.prototype.constructor = JuniorStudent;




module.exports = JuniorStudent;