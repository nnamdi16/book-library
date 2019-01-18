//Import files from admin.js
const Admin = require('./admin');
const library = require('../../data/library');
const issueList = require('../../data/issueList');
const requestList = require('../../data/requestList');
const Teacher = require('../user/teacher/teacher');
const SeniorStudent = require('../user/student/senior_student/seniorStudent');
const JuniorStudent = require('../user/student/junior_student/juniorStudent')

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
		admin.addBook('Shades of Home', 'Bachir Lawal', 9);
		admin.addBook('Simple Crazy', 'Antolva Cripal',9);
		const result = [{'BookName':'Shades of Home',
						'Author':'Bachir Lawal',
						'Quantity': 9},
						{'BookName':'Simple Crazy',
						'Author':'Antolva Cripal',
						'Quantity': 9}];
		expect(result).toEqual(library);
	});
});

//Test case to test the issue book prototype method.
describe('Issues book  from the request list', () => {
	it('Should create an array of object stating the user issued book to and the name of the book', () =>{
		const admin = new Admin('Galvin Belson');
		admin.addBook('Shades of Home', 'Bachir Lawal', 9);
		admin.addBook('Simple Crazy', 'Antolva Cripal',8);
		const user1 = new JuniorStudent('Nnamdi','Student','junior',1);
		const user4 = new Teacher ('Shakira','Teacher',3);
		const user2 = new SeniorStudent('Sammy','Student','senior',2);
		const user3 = new Teacher ('Sophie','Teacher',3);

		user1.borrowBook('Shades of Home', 'Bachir Lawal');
		user4.borrowBook('Simple Crazy', 'Antolva Cripal');
		user2.borrowBook('Fall An Emperor', 'Goodwill Sand');
		user3.borrowBook('Simple Crazy', 'Antolva Cripal');

		admin.issueBook ();
		const result = [ { BookName: 'Shades of Home',
							Author: 'Bachir Lawal',
							Quantity: 8 },
						{ BookName: 'Simple Crazy',
							Author: 'Antolva Cripal',
							Quantity: 7 },
							{ BookName: 'Simple Crazy',
							Author: 'Antolva Cripal',
							Quantity: 7 } ]
		expect(issueList).toEqual(result)
	} );
});

