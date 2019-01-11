const User = require('./user');
// const BorrowBook= require('./requestList');
const issuance = require('./issuanceList');
const firstStudent = issuance.Senior;
const Student = require('./student');

//Create the Student constructor function
function Senior(name,status,studentLevel) {
	Student.apply(this,[name,status,studentLevel]);		
}

Senior.prototype =Object.create(Student.prototype);
Senior.prototype.constructor = Senior;



User.prototype.borrowBook =  function (bookName,author='unknown') {
		firstStudent[this.name] = [this.status,this.studentLevel,bookName,author];
	}
	

const student = new Senior('Jamal', 'Student','Senior');
const student1 = new Senior('Bode', 'Student', 'Senior');
const student2 = new Senior('Femi','Student', 'Senior');
 

student.borrowBook('Shades of Purple','Peter Obi');
student1.borrowBook('When Nations fall', 'Chinua Achebe');
student2.borrowBook('Common land', 'Flavio Copes');
// console.log(BorrowBook);
module.exports = Senior;