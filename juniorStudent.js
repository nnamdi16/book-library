const User = require('./user');
const BorrowBook= require('./requestList');
const issuance = require('./issuanceList');
const secondStudent = issuance.Junior;
const Student = require('./student');

//Create the Student constructor function
function Junior(name,status,studentLevel) {
	Student.apply(this,[name,status,studentLevel]);		
}

Junior.prototype =Object.create(Student.prototype);
Junior.prototype.constructor = Junior;



User.prototype.borrowBook =  function (bookName,author='unknown') {
		secondStudent[`${bookName} by ${author}`] = [this.name];
		return `${bookName} by ${author}`;
}
	

const student = new Junior('Saboginda', 'Student','Junior');
const student1 = new Junior('Galadime', 'Student', 'Junior');
const student2 = new Junior('Boluwa','Student', 'Junior');


student.borrowBook('Sherlock Holmes','Peter Obi');
student1.borrowBook('Tales of Thames', 'Chinua Achebe');
student2.borrowBook('Alexander in the Wonderland', 'Flavio Copes');
// console.log(BorrowBook);
module.exports = Junior;