const Teacher = require('./teacher');
const requestList = require('../../../data/requestList');

//Test to check for instance creation of the Teacher constructor function.
describe('Check if an instance of the Teacher constructor is created', () => {
	it('Should create an instance of the Teacher constructor', () => {
		const teacher = new Teacher('Harvey Spectre','Teacher');
		const result = {'name':'Harvey Spectre',
						'status':'Teacher'}
		expect(teacher).toEqual(result)
	});

	it('Check if the Object created is an instance of the Teacher Constructor', () => {
		const teacher= new Teacher('Harvey Spectre','Teacher');
		expect(teacher).toBeInstanceOf(Teacher)
	});

});

describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const teacher = new Teacher('Harvey Spectre','Teacher');
		teacher.borrowBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{'Alexander in the wonderland by Sophie Dash' : 'Harvey Spectre',
						'Priority':1}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of the User Constructor', () => {
		const teacher = new Teacher('Harvey Spectre','Teacher');
		expect(teacher).toBeInstanceOf(Teacher)
	});

});