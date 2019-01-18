const Teacher = require('./teacher');
const requestList = require('../../../data/requestList');
const returnList = require('../../../data/returnList');

//Test to check for instance creation of the Teacher constructor function.
describe('Check if an instance of the Teacher constructor is created', () => {
	it('Should create an instance of the Teacher constructor', () => {
		const teacher = new Teacher('Harvey Spectre','Teacher',1);
		const result = {'name':'Harvey Spectre',
						'status':'Teacher',
					'priority':1}
		expect(teacher).toEqual(result)
	});

	it('Check if the Object created is an instance of the Teacher Constructor', () => {
		const teacher= new Teacher('Harvey Spectre','Teacher',1);
		expect(teacher).toBeInstanceOf(Teacher);
	});

});

//Test cases to check for borrowBook method.
describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const teacher = new Teacher('Harvey Spectre','Teacher',1);
		teacher.borrowBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{'BookName':'Alexander in the wonderland',
		'BookLender':'Harvey Spectre',
		'Author':'Sophie Dash',
		'Priority':1
		}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of the teacher Constructor', () => {
		const teacher = new Teacher('Harvey Spectre','Teacher');
		expect(teacher).toBeInstanceOf(Teacher)
	});

});

//Test cases for returnList prototype method.
describe('Check if an instance of the returnList method is created', () => {
	it('Should create an instance of the return book list prototype method', () => {
		const teacher = new Teacher('Harvey Spectre','Teacher',1);
		teacher.returnBook('Sherlock Holmes', 'Peter Obi');
		const result = [{'BookName':'Sherlock Holmes',
		'BookLender':'Harvey Spectre',
		'Author':'Peter Obi',
		}];
		expect(returnList).toEqual(result);
	});

	it('Check if the Object created is an instance of the teacher Constructor', () => {
		const teacher = new Teacher('Harvey Spectre','Teacher',1);
		expect(teacher).toBeInstanceOf(Teacher)
	});

});