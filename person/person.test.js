//Import the person.js file
const Person = require('./person');

//Test to check for instance creation of the person constructor function.
describe('Check if an instance of the Person constructor is created', () => {
	it('Should create an instance of the Person constructor', () => {
		const person = new Person('Nnamdi');
		const result = {'name':'Nnamdi'}
		expect(person).toEqual(result)
	});
});