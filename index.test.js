const Lib = require('./index');
const Person = require('./person');
const books = Lib.two;
const Library = Lib.one;
describe('Check that an object is an instance of the Library Class', () => {
  const book1 = new Library('JavaScript', 2, 23, 'Nwabuokei Nnamdi');
 
  test('should return the instance of a class', () => {
    expect(book1).toBeInstanceOf(Library);
  });
  test('the book array contains  the book instance', () => {
    expect(books).toContain(book1)
  });
});


describe('Check that an object is an instance of the Person class', () => {
  const person = new Person('Nnamdi');

  test('should return the instance of a class', () => {
    expect(person).toBeInstanceOf(Person);
  });
});
