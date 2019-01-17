//Import modules.
const SeniorStudent = require('./seniorStudent');
const requestList = require('../../../../data/requestList');

//Test cases to test the  Senior student constructor function.
describe('Check if an instance of the senior student constructor is created', () => {
	it('Should create an instance of the senior student constructor', () => {
		const seniorStudent = new SeniorStudent('John Bash','Student','Senior');
		const result = {'name':'John Bash',
						'status':'Student',
						'studentLevel':'Senior'}
		expect(seniorStudent).toEqual(result)
	});

	it('Check if the Object created is an instance of the senior student Constructor', () => {
		const seniorStudent= new SeniorStudent('John Bash','Student','Senior');
		expect(seniorStudent).toBeInstanceOf(SeniorStudent);
	});

});

describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const student= new SeniorStudent('John Bash','Student','Student');
		student.borrowBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{'Alexander in the wonderland by Sophie Dash' : 'John Bash',
						'Priority':2}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of SeniorStudent Constructor', () => {
		const student= new SeniorStudent('John Bash','Student','Senior');
		expect(student).toBeInstanceOf(SeniorStudent);
	});

});