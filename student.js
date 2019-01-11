const User = require('./user');
const BorrowBook= require('./requestList');
const issuance = require('./issuanceList');
const firstStudent = issuance.Senior;
const secondStudent = issuance.Junior;

//Create the Student constructor function
function Student(name,status,studentLevel) {
	User.apply(this,[name,status]);
	this.studentLevel = studentLevel;
	
}

Student.prototype =Object.create(User.prototype);
Student.prototype.constructor = Student;



User.prototype.borrowBook =  function (bookName,author='unknown') {
	BorrowBook[this.name] = [this.status,this.studentLevel,bookName,author];
	
}


const student = new Student('Nnmadi', 'Student','Senior');
// const student1 = new Student('Balogun', 'Student', 'Junior');
// const student2 = new Student('Moses','Student', 'Senior');
//  console.log(student);

student.borrowBook('Sherlock Holmes','Peter Obi');
// student1.borrowBook('Tales of Thames', 'Chinua Achebe');
// student2.borrowBook('Alexander in the Wonderland', 'Flavio Copes');
console.log(BorrowBook);
module.exports = Student;