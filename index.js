const User = require('./person/user/user');
const requestList = require('./data/requestList');
const issueList = require('./data/issueList')
const Teacher = require('./person/user/teacher/teacher');
const Student = require('./person/user/student/student');
const Admin = require('./person/admin/admin');
const library = require('./data/library');
const SeniorStudent = require('./person/user/student/senior_student/seniorStudent');
const JuniorStudent = require('./person/user/student/junior_student/juniorStudent');
const returnList = require('./data/returnList');
const replaceList = require('./data/replaceList');

const user1 = new JuniorStudent('Nnamdi','Student','junior');
const user4 = new Teacher ('Shakira','Teacher');
const user2 = new SeniorStudent('Sammy','Student','senior');
const user3 = new Teacher ('Sophie','Teacher');

const admin = new Admin('Galvin Belson');
admin.addBook('Shades of Home', 'Bachir Lawal', 9);
admin.addBook('Simple Crazy', 'Antolva Cripal',8);

user1.borrowBook('Shades of Home', 'Bachir Lawal');
user4.borrowBook('Simple Crazy', 'Antolva Cripal');
user2.borrowBook('Fall An Emperor', 'Goodwill Sand');
user3.borrowBook('Simple Crazy', 'Antolva Cripal');




console.log('List of books in the library',library);


// // console.log(user1);



// console.log('Request List',requestList);
admin.issueBook();
console.log('Request List after book issued ',requestList);
console.log('Library', library);
// // console.log('Lib',library);
console.log('List of books issued',issueList);
user1.returnBook('Simple Crazy', 'Antolva Cripal');
user3.returnBook('Simple Crazy', 'Antolva Cripal');

// console.log('Library return', returnList);
admin.replaceBook();

console.log('library',library);
console.log('ReplaceList',replaceList);