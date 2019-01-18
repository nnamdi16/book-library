//Import modules.
const JuniorStudent = require('./juniorStudent');
const requestList = require('../../../../data/requestList');
const returnList = require('../../../../data/returnList');

//Test cases to test the  Junior student constructor function.
describe('Check if an instance of the junior student constructor is created', () => {
	it('Should create an instance of the senior student constructor', () => {
		const juniorStudent = new JuniorStudent('Anthony Klemann', 'Student', 'Junior', 3);
		const result = {
			'name': 'Anthony Klemann',
			'status': 'Student',
			'studentLevel': 'Junior',
			'priority': 3
		}
		expect(juniorStudent).toEqual(result)
	});

	it('Check if the Object created is an instance of the junior student Constructor', () => {
		const juniorStudent = new JuniorStudent('Anthony Klemann', 'Student', 'Junior', 3);
		expect(juniorStudent).toBeInstanceOf(JuniorStudent);
	});

});

//Test cases to check the borrow book method.
describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const juniorStudent = new JuniorStudent('John Bash', 'Student', 'Junior', 3);
		juniorStudent.borrowBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{
			'BookName': 'Alexander in the wonderland',
			'BookLender': 'John Bash',
			'Author': 'Sophie Dash',
			'Priority': 3
		}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of JuniorStudent Constructor', () => {
		const juniorStudent = new JuniorStudent('John Bash', 'Student', 'Junior');
		expect(juniorStudent).toBeInstanceOf(JuniorStudent);
	});

});


//Test cases to check the return list method.
describe('Check if an instance of the returnList method is created', () => {
	it('Should create an instance of the return book list prototype method', () => {
		const juniorStudent = new JuniorStudent('John Bash', 'Student', 'Junior', 3);
		juniorStudent.returnBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{
			'BookName': 'Alexander in the wonderland',
			'BookLender': 'John Bash',
			'Author': 'Sophie Dash',
		}];
		expect(returnList).toEqual(result);
	});

	it('Check if the Object created is an instance of the teacher Constructor', () => {
		const juniorStudent = new JuniorStudent('Harvey Spectre', 'Junior', 3);
		expect(juniorStudent).toBeInstanceOf(JuniorStudent);
	});

});