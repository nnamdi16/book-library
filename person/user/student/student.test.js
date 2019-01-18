const Student = require('./student');
const requestList = require('../../../data/requestList');
const returnList = require('../../../data/returnList');

//Test cases to test the  student  constructor function.
describe('Check if an instance of the student constructor is created', () => {
	it('Should create an instance of the student constructor', () => {
		const student = new Student('Calvin Klien', 'Student', 'Junior');
		const result = {
			'name': 'Calvin Klien',
			'status': 'Student',
			'studentLevel': 'Junior'
		}
		expect(student).toEqual(result)
	});

	it('Check if the Object created is an instance of the Teacher Constructor', () => {
		const student = new Student('Calvin Klien', 'Student', 'Junior');
		expect(student).toBeInstanceOf(Student)
	});

});

//Test case to check borrowBook method.
describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const student = new Student('Calvin Klien', 'Student', 'Junior');
		student.borrowBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{
			'BookName': 'Alexander in the wonderland',
			'BookLender': 'Calvin Klien',
			'Author': 'Sophie Dash'
		}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of the Student Constructor', () => {
		const student = new Student('Calvin Klien', 'Student', 'Junior');
		expect(student).toBeInstanceOf(Student)
	});

});


//Test cases to check the returnList method.
describe('Check if an instance of the returnList method is created', () => {
	it('Should create an instance of the return book list prototype method', () => {
		const student = new Student('Harvey Spectre', 'Teacher', 2);
		student.returnBook('Sherlock Holmes', 'Peter Obi');
		const result = [{
			'BookName': 'Sherlock Holmes',
			'BookLender': 'Harvey Spectre',
			'Author': 'Peter Obi',
		}];
		expect(returnList).toEqual(result);
	});

	it('Check if the Object created is an instance of the teacher Constructor', () => {
		const student = new Student('Harvey Spectre', 'Teacher', 1);
		expect(student).toBeInstanceOf(Student);
	});

});