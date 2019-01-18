//Import modules.
const SeniorStudent = require('./seniorStudent');
const requestList = require('../../../../data/requestList');
const returnList = require('../../../../data/returnList')

//Test cases to test the  Senior student constructor function.
describe('Check if an instance of the senior student constructor is created', () => {
	it('Should create an instance of the senior student constructor', () => {
		const seniorStudent = new SeniorStudent('John Bash', 'Student', 'Senior', 2);
		const result = {
			'name': 'John Bash',
			'status': 'Student',
			'studentLevel': 'Senior',
			'priority': 2
		}
		expect(seniorStudent).toEqual(result)
	});

	it('Check if the Object created is an instance of the senior student Constructor', () => {
		const seniorStudent = new SeniorStudent('John Bash', 'Student', 'Senior', 2);
		expect(seniorStudent).toBeInstanceOf(SeniorStudent);
	});

});

//Test cases to check  method of borrowed books
describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const student = new SeniorStudent('John Bash', 'Student', 'Student', 2);
		student.borrowBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{
			'BookName': 'Alexander in the wonderland',
			'BookLender': 'John Bash',
			'Author': 'Sophie Dash',
			'Priority': 2
		}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of SeniorStudent Constructor', () => {
		const student = new SeniorStudent('John Bash', 'Student', 'Senior');
		expect(student).toBeInstanceOf(SeniorStudent);
	});

	//Test cases to check the returnList method.
	describe('Check if an instance of the returnList method is created', () => {
		it('Should create an instance of the return book list prototype method', () => {
			const seniorStudent = new SeniorStudent('Harvey Spectre', 'Teacher', 2);
			seniorStudent.returnBook('Sherlock Holmes', 'Peter Obi');
			const result = [{
				'BookName': 'Sherlock Holmes',
				'BookLender': 'Harvey Spectre',
				'Author': 'Peter Obi',
			}];
			expect(returnList).toEqual(result);
		});

		it('Check if the Object created is an instance of the teacher Constructor', () => {
			const seniorStudent = new SeniorStudent('Harvey Spectre', 'Teacher', 1);
			expect(seniorStudent).toBeInstanceOf(SeniorStudent);
		});

	});

});