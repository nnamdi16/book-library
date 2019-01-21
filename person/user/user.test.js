const User = require('./user');
const requestList = require('../../data/requestList');
const returnList = require('../../data/returnList');

//Test case to check if the instance of the user constructor function was created.
describe('Check if an instance of the User constructor is created', () => {
	it('Should create an instance of the User constructor', () => {
		const user = new User('Galvin Belson', 'Student');
		const result = {
			'name': 'Galvin Belson',
			'status': 'Student'
		}
		expect(user).toEqual(result)
	});

	it('Check if the Object created is an instance of the User Constructor', () => {
		const user = new User('Galvin Belson', 'Student');
		expect(user).toBeInstanceOf(User)
	});

});



//Test cases to check for borrowBook method.
describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const teacher = new User('Harvey Spectre', 'Teacher');
		teacher.borrowBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{
			'BookName': 'Alexander in the wonderland',
			'BookLender': 'Harvey Spectre',
			'Author': 'Sophie Dash'
			
		}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of the teacher Constructor', () => {
		const user = new User('Harvey Spectre', 'Teacher');
		expect(user).toBeInstanceOf(User)
	});

});

//Test cases for returnList prototype method.
describe('Check if an instance of the returnList method is created', () => {
	it('Should create an instance of the return book list prototype method', () => {
		const teacher = new User('Harvey Spectre', 'Teacher');
		teacher.returnBook('Sherlock Holmes', 'Peter Obi');
		const result = [{
			'BookName': 'Sherlock Holmes',
			'BookLender': 'Harvey Spectre',
			'Author': 'Peter Obi',
		}];
		expect(returnList).toEqual(result);
	});

	it('Check if the Object created is an instance of the teacher Constructor', () => {
		const user = new User('Harvey Spectre', 'Teacher');
		expect(user).toBeInstanceOf(User)
	});

});