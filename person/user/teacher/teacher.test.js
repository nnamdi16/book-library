const Teacher = require('./teacher');
const requestList = require('../../../data/requestList');

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
		expect(teacher).toBeInstanceOf(Teacher)
	});

});

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