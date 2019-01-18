//Import the Person module 
const Person = require('../person');
const library = require('../../data/library');
const requestList = require('../../data/requestList');
const issueList = require('../../data/issueList');

//Create admin constructor function
function Admin(name) {
	Person.call(this,name);
}


Admin.prototype = Object.create(Person.prototype);
Admin.prototype.constructor = Admin;

//Create the addBook Prototype method.
Admin.prototype.addBook = function (bookName,author,quantity) {
	library.push({
		// [`${bookName} by ${author}`] : quantity
		'BookName' : bookName,
		'Author': author, 
		'Quantity':quantity

	})
}


  function binarySearch(arr, target) {
	// console.log(target)
	  let left = 0;
	  let right = arr.length - 1;
	  while (left <= right) {
		  const mid = left + Math.floor((right - left) / 2);
		  if (arr[mid].BookName === target && arr[mid].Quantity>0) {
				arr[mid].Quantity = arr[mid].Quantity-0.5;
				return arr[mid];
				
		  }
		  if (arr[mid].BookName < target) {
			  left = mid + 1;
		  } else {
			  right = mid - 1;
		  }
	  }
	  return 0;
  }

Admin.prototype.issueBook = function() {
	requestList.sort(function(a,b){
		return String(a['Priority']).localeCompare(String(b['Priority']));	
	});

	for (let i = 0; i < requestList.length; i++) {
		if(binarySearch(library,requestList[i].BookName)){
			console.log(`${requestList[i].BookName} issued to  ${requestList[i].BookLender}`);
			issueList.push(binarySearch(library, requestList[i].BookName));
		} else{
			console.log(`${requestList[i].BookLender} : ${requestList[i].BookName} not Found or Taken `)
		}
		
	  }

	// let result = requestList.filter(o => library.find(o2 => o['Book Name'] === o2['Book Name']));
	// console.log('Final Result',result);
}

module.exports = Admin;