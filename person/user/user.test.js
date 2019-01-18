const User = require('./user');
const requestList = require('../../data/requestList');
const returnList = require('../../data/returnList');

//Test to check for instance creation of the user constructor function.
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

//Test to check the borrowBook prototype method
describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const user = new User('Galvin Belson');
		user.borrowBook('Sherlock Holmes', 'Peter Obi');
		const result = [{
			'Sherlock Holmes by Peter Obi': 'Galvin Belson'
		}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of the User Constructor', () => {
		const user = new User('Galvin Belson');
		expect(user).toBeInstanceOf(User)
	});

});

//Test cases to check the returnList prototype method.
describe('Check if an instance of the returnList method is created', () => {
	it('Should create an instance of the return book list prototype method', () => {
		const user = new User('Galvin Belson');
		user.returnBook('Sherlock Holmes', 'Peter Obi');
		const result = [{
			'Sherlock Holmes by Peter Obi': 'Galvin Belson'
		}];
		expect(returnList).toEqual(result);
	});

	it('Check if the Object created is an instance of the User Constructor', () => {
		const user = new User('Galvin Belson');
		expect(user).toBeInstanceOf(User)
	});

});