const Student = require('./student');
const requestList = require('../../../data/requestList');

//Test cases to test the  student  constructor function.
describe('Check if an instance of the student constructor is created', () => {
	it('Should create an instance of the student constructor', () => {
		const student = new Student('Calvin Klien','Student','Junior');
		const result = {'name':'Calvin Klien',
						'status':'Student',
						'studentLevel':'Junior'}
		expect(student).toEqual(result)
	});

	it('Check if the Object created is an instance of the Teacher Constructor', () => {
		const student= new Student('Calvin Klien','Student','Junior');
		expect(student).toBeInstanceOf(Student)
	});

});

describe('Check if an instance of the borrowBook method is created', () => {
	it('Should create an instance of the borrow book prototype method', () => {
		const student= new Student('Calvin Klien','Student','Junior');
		student.borrowBook('Alexander in the wonderland', 'Sophie Dash');
		const result = [{'Alexander in the wonderland by Sophie Dash' : 'Calvin Klien'}];
		expect(requestList).toEqual(result);
	});

	it('Check if the Object created is an instance of the Student Constructor', () => {
		const student= new Student('Calvin Klien','Student','Junior');
		expect(student).toBeInstanceOf(Student)
	});

});