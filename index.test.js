const Lib = require('./index');
const Person = require('./person');
const Admin = require('./admin');
const User = require('./user');
const Student = require('./student');
const Teacher = require('./teacher');
const Librarys = require('./library');
const JuniorStudent = require('./juniorStudent');
const SeniorStudent = require('./seniorStudent');
const BorrowBook = require('./requestList');
const issuance = require('./issuanceList');

const firstStudent = issuance.Senior;
const secondStudent = issuance.Junior;
const books = Lib.two;
const Library = Lib.one;
//Test for Library Constructor function.
describe('Check that an object is an instance of the Library Class', () => {
  const book1 = new Library('JavaScript', 2, 23, 'Nwabuokei Nnamdi');
 
  test('should return the instance of a class', () => {
    expect(book1).toBeInstanceOf(Library);
  });
  test('the book array contains  the book instance', () => {
    expect(books).toContain(book1)
  });
});

// Test for Person constructor function.
describe('Check that an object is an instance of the Person class', () => {
  const person = new Person('Nnamdi');

  test('should return the instance of the Person class', () => {
    expect(person).toBeInstanceOf(Person);
  });
});

//Test for the Admin constructor function.
describe('Check that an object is an instance of the Admin class', () => {
  const admin = new Admin('Nnamdi');

  test('should return the instance of the Admin Class', () => {
    expect(admin).toBeInstanceOf(Admin);
  });
});

//Test the User Constructor function
describe('Check that an object is an instance of the User class', () => {
  const user = new User('Nnamdi','Teacher');

  test('should return the instance of the User Class', () => {
    expect(user).toBeInstanceOf(User)
  });
});

//Test Student Constructor function.
describe('Check that an object is an instance of the Student class', () => {
  const student = new Student('Nnamdi','Student','Senior');

  test('should return the instance of the Student Class', () => {
    expect(student).toBeInstanceOf(Student);
  });
});

//Test Teacher Constructor function.
describe('Check that an object is an instance of the Teacher class', () => {
  const teacher = new Teacher('Nnamdi','Teacher');

  test('should return the instance of the Student Class', () => {
    expect(teacher).toBeInstanceOf(Teacher);
  });
});

// Test for the Admin addbook() method.
describe('Check that a Library object is created when addmethod is called', () => {
  it('should return  a Library object', () => {
    
    const admin = new Admin('Nnamdi');
    const val = admin.addBook('Shades of Purple','Peter Obi',1)
    //const expected = {'Shades of Purple by Peter Obi':[1]}
    //admin.addBook();

    // expect(addBook).toHaveBeenCalled(1);
    expect(Object.keys(Librarys)).toContain(val);
  });
});

// Test for the User.borrow() method override in juniorstudent.js
describe('Check that the borrowBook method is created when borrow method is called', () =>{
  it('should return a borrowBook object', () => {
    const student1= new JuniorStudent('Saboginda', 'Student','Junior');
    const studentval = student1.borrowBook('Harry Porter','James Roslyn');
    
    expect(Object.keys(BorrowBook)).toContain(studentval);

  });
});

// Test for the User.borrow() method  override in seniorstudent.js
describe('Check that the borrowBook method is created when borrow method is called', () =>{
  it('should return a borrowBook object', () => {
    const student2= new Student('Nnmadi', 'Student','Senior');
    const studentval2 = student2.borrowBook('Sherlock Holmes','Peter Obi');
    
    expect(Object.keys(BorrowBook)).toContain(studentval2);

  });
});

// Test for the User.borrow() method in student.js
// describe('Check that the borrowBook method is created when borrow method is called', () =>{
//   it('should return a borrowBook object', () => {
//     const student3= new SeniorStudent('Jamal', 'Student','Senior');
//     const studentval3 = student2.borrowBook('Shades of Purple','Peter Obi');
    
//     expect(Object.keys(BorrowBook)).toContain(studentval2);

//   });
// });

