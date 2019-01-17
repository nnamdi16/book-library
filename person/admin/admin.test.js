//Import files from admin.js
const Admin = require('./admin');

//Test to check for instance creation of the admin constructor function.
describe('Check if an instance of the Admin constructor is created', () => {
	it('Should create an instance of the Admin constructor', () => {
		const admin = new Admin('Galvin Belson');
		const result = {'name':'Galvin Belson'}
		expect(admin).toEqual(result)
	});

	it('Check if the Object created is an instance of the  Constructor', () => {
		const admin = new Admin('Galvin Belson');
		expect(admin).toBeInstanceOf(Admin)
	});

});

describe('Create book when the name of the book is added',() =>{
	it('Should create an array of object of new books whe instantiated', () => {
		
	})
})