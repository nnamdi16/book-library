const Person = require('./person');
const Library = require('./library');
const RequestList = require('./requestList');
const userState = require('./user');
const teacherState = require('./teacher');
const student = require('./student');
const issuance = require('./issuanceList');
const teacher = issuance.Teacher;
const firststudent = issuance.Student;
// const listIssuance = issuance.third;


//Create the Library's Admin constructor function
function Admin(name) {
	Person.apply(this,[name]);
	// this.bookName = bookName;
	// this.author = author;

}

Admin.prototype = Object.create(Person.prototype);
Admin.prototype.constructor = Admin;

//Create an Add book Method
Admin.prototype.addBook = function(bookName,author,quantity) {
	Library[bookName] = [bookName,author,quantity];
	// Library["quantity"] = quantity;
}


const admin = new Admin('Nnamdi');
admin.addBook('Tears of Shadows', 'Peter Obi',5);
admin.addBook('Sherlock Holmes','John Paul', 6)


// console.log(admin);
// console.log(Library);
// console.log(`${RequestList}`);
var result = Object.keys(RequestList).map(function(key) {
	return [(key), RequestList[key]];
  });
  
  console.log(result);
  console.log(issuance);
// console.log(Library['Tears of Shadows'][2]);
module.exports = Admin;