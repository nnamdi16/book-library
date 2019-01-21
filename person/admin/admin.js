//Import modules.
const Person = require('../person');
const library = require('../../data/library');
const requestList = require('../../data/requestList');
const issueList = require('../../data/issueList');
const returnList = require('../../data/returnList');
const binarySearch = require('../../util/binarySearch');
const replaceSearch = require('../../util/replaceSearch');
const replaceList = require('../../data/replaceList');

//Create admin constructor function
function Admin(name) {
	Person.call(this, name);
}

//Change the prototype name of the admin constructor
Admin.prototype = Object.create(Person.prototype);
Admin.prototype.constructor = Admin;

//Create the addBook Prototype method.
Admin.prototype.addBook = function (bookName, author, quantity) {
	//Add books to the library
	library.push({
		'BookName': bookName,
		'Author': author,
		'Quantity': quantity

	});

	// Sort the books in the library in aplhabetical order.
	library.sort(function (a, b) {
		return a['BookName'].localeCompare(b['BookName']);
	});
	return library;

}



//Prototype method used to issueBook
Admin.prototype.issueBook = function () {
	//Sort the request list based on their priority
	requestList.sort(function (a, b) {
		return String(a['Priority']).localeCompare(String(b['Priority']));
	});

	//Check if the book requested is in the library and the issue it if it exist.
	for (let i = 0; i < requestList.length; i++) {
		if (binarySearch(library, requestList[i].BookName)) {
			console.log(`${requestList[i].BookName} issued to  ${requestList[i].BookLender}`);
			issueList.push(requestList[i]);

		} else {
			console.log(`${requestList[i].BookLender} : ${requestList[i].BookName} not Found or Taken `)
		}

	}


}

//Method for returning books back to the library by the admin
Admin.prototype.replaceBook = function () {
	for (let i = 0; i < returnList.length; i++) {
		if (replaceSearch(library, returnList[i].BookName)) {
			console.log(returnList[i].BookName);
			replaceList.push({
				'BookName': `${returnList[i].BookName}`,
				'Author': `${returnList[i].Author}`
			});

		}
	}
	

}

module.exports = Admin;