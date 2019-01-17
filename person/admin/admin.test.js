//Import files from admin.js
const Admin = require('./admin');
const library = require('../../data/library');
const issuedBook = require('../../data/issueList');
const requestList = require('../../data/requestList');

//Test case to check for instance creation of the admin constructor function.
describe('Check if an instance of the Admin constructor is created', () => {
	it('Should create an instance of the Admin constructor', () => {
		const admin = new Admin('Galvin Belson');
		const result = {'name':'Galvin Belson'}
		expect(admin).toEqual(result)
	});

	it('Check if the Object created is an instance of the  Constructor', () => {
		const admin = new Admin('Galvin Belson');
		expect(admin).toBeInstanceOf(Admin)
	});

});

//Test case to test the  addBook prototype method.
describe('Create book when the name of the book is added',() =>{
	it('Should create an array of object of new books whe instantiated', () => {
		const admin = new Admin('Galvin Belson');
		admin.addBook('Spiral Shift Island','Anslem Crenshaw', 9);
		const result = [{'Spiral Shift Island by Anslem Crenshaw':9}];
		expect(result).toEqual(library);
	});
});

//Test case to test the issue book prototype method.
describe('Issues book  from the request list', () => {
	it('Should create an array of object stating the user issued book to and the name of the book', () =>{
		const admin = new Admin('Galvin Belson');
		admin.issueBook ();
		const result = [{'Spiral Shift Island by Anslem Crenshaw':'Nnamdi' ,
						'Books remaining': 8}];
		expect(result).toEqual(issuedBook)
	} );
});