const User = require('./user');
const BorrowBook= require('./requestList');
const issuance = require('./issuanceList');
const firstTeacher = issuance.Teacher;

//Create constructor function for the Teacher
function Teacher(name,status) {
	User.apply(this,[name,status]);
	
}

Teacher.prototype = Object.create(User.prototype);
Teacher.prototype.constructor = Teacher;

const teacher = new Teacher('Nnamdi','Teacher');
const teacher1 = new Teacher('Sopuluchukwu','Teacher');
// console.log(teacher);

User.prototype.borrowBook =  function (bookName,author='unknown') {
	BorrowBook[`${bookName} by ${author}`] = [this.name];
	firstTeacher[`${bookName} by ${author}`] = [this.name];
}

teacher.borrowBook('Harry Porter','James Roslyn') ;
teacher1.borrowBook('Shades of Purple','Peter Obi');

module.exports = Teacher;