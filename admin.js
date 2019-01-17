const Person = require('./person');
const Library = require('./library');
const RequestList = require('./requestList');
const userState = require('./user');
const teacherState = require('./teacher');
const senior = require('./seniorStudent');
const junior = require('./juniorStudent');
const issuance = require('./issuanceList');
const teacher = issuance.Teacher;
const firstStudent = issuance.Senior;
const secondStudent = issuance.Junior;
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
	Library[`${bookName} by ${author}`] = quantity;
	return `${bookName} by ${author}`;
	// Library["quantity"] = quantity;
}

//instance of admin and book created
const admin = new Admin('Nnamdi');
admin.addBook('Harry Porter','James Rosyln',3);
admin.addBook('Shades of Purple','Peter Obi', 1);
admin.addBook('When Nations fall','Chinua Achebe', 1);
admin.addBook('Common land','Flavio Copes', 1);
admin.addBook('Sherlock Holmes','Peter Obi', 1);
admin.addBook('Tales of Thames','Chinua Achebe', 1);
admin.addBook('Alexander in the Wonderland','Flavio Copes', 1);



// console.log(admin);
 console.log('Library list:',Library);

//Properties of library like names of books
 let booksName = Object.keys(Library);
 console.log(booksName);



console.log('Request List ->',RequestList);
const libraryEntries = Object.entries(Library);
// console.log('Library Entries', libraryEntries);


let result = Object.keys(issuance).map(function(key) {
	return [(key), issuance[key]];
  });
  
//   console.log(result);
  let sample = [];
 var reloop = function (arr) {
	  for (let index = 0; index < arr.length; index++) {
		sample.push(arr[index][1]);
	  }
	  return sample;
  }

//   console.log('stop',reloop(result));
//   console.log('Issuance List:', issuance);
  console.log('Issueing Order:', reloop(result));
  let issuedPerson = reloop(result);
// console.log(Library['Tears of Shadows'][2]);

// const entries = Object.entries(Library);
// console.log(entries);






Admin.prototype.bookIssue =function() {
	let bookArr = [];
	let bookQty = [];
	let bookTaken = [];
	let unIssuedUser = [];
	let bookIssued = [];
	let issuedUser = [];

Object.keys(Library).forEach(function(item){
	bookArr.push(item)
});

Object.keys(Library).forEach(function(item){
	// let num = Number((Library[item]).join());
	let num = Library[item];
	bookQty.push(num);
});


//Teachers Array
let teacherArr = [];
let teacherName = [];

Object.keys(issuedPerson[0]).forEach(function(item){
	teacherArr.push(item)
});

Object.keys(issuedPerson[0]).forEach(function(item){
	let num = (issuedPerson[0][item]);
	teacherName.push(num);
});



//Senior Array
let seniorArr = [];
let seniorName = [];

Object.keys(issuedPerson[1]).forEach(function(item){
	seniorArr.push(item)
});

Object.keys(issuedPerson[1]).forEach(function(item){
	let num = (issuedPerson[1][item]).join();
	seniorName.push(num);
});
console.log(seniorName);

//Junior Array
let juniorArr = [];
let juniorName = [];

Object.keys(issuedPerson[2]).forEach(function(item){
	juniorArr.push(item)
});

Object.keys(issuedPerson[2]).forEach(function(item){
	let num = (issuedPerson[2][item]).join();
	juniorName.push(num);
});
console.log(juniorName);


let userArr = [];
let userName = [];
userArr.push(teacherArr,seniorArr,juniorArr);
userName.push(teacherName,seniorName,juniorName);
console.log('First User',userName[0][0]);
console.log('First book',userArr[0][0]);
console.log(Boolean(userArr[0][1] === bookArr[1]));


console.log('BookArr',bookArr);
console.log('BookQty',bookQty);
console.log('UserArr', userArr);
console.log('UserName', userName);
	for(let index = 0; index < bookArr.length; index++){
		for(let j = 0; j < userArr.length; j++){
			for(let k = 0; k < userArr[j].length; k++) {
				if(userArr[j][k] == bookArr[index] && bookQty[index] > 0 ) {
					bookIssued.push(bookArr[index]);
					issuedUser.push(userName[j][k]);
					console.log(`${bookArr[index]} issued to ${userName[j][k]}`);
					 bookQty[index]--;
					 

				}else if(userArr[j][k] === bookArr[index] && bookQty[index] <=  0 ){
					console.log('Book Taken');
					unIssuedUser.push(userName[j][k]);
					bookTaken.push(bookArr[index]);
				}
				
			}
			
		}
	}
	console.log('Book Taken', bookTaken);
	console.log('Unissued user', unIssuedUser);
	console.log('Book Issued', bookIssued);
	console.log('Issued User', issuedUser);
	return bookQty;
	
}

admin.bookIssue()
// Admin.prototype.returnBook = function () {
// 	return console.log('The book', bookTaken);
// }
// admin.returnBook();
module.exports = Admin;