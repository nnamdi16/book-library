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
// console.log(teacher);

User.prototype.borrowBook =  function (bookName,author='unknown') {
	BorrowBook[`${bookName} ${author}`] = [this.name,this.status];
	firstTeacher[`${bookName} ${author}`] = [this.name,this.status];
}

teacher.borrowBook('Harry Porter','James Roslyn') ;

module.exports = Teacher;