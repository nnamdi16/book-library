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

const user1 = new JuniorStudent('Nnamdi','Student','junior',1);
const user4 = new Teacher ('Shakira','Teacher',3);
const user2 = new SeniorStudent('Sammy','Student','senior',2);
const user3 = new Teacher ('Sophie','Teacher',3);

user1.borrowBook('Shades of Home', 'Bachir Lawal');
user4.borrowBook('Simple Crazy', 'Antolva Cripal');
user2.borrowBook('Fall An Emperor', 'Goodwill Sand');
user3.borrowBook('Simple Crazy', 'Antolva Cripal');





const admin = new Admin('Galvin Belson');
admin.addBook('Shades of Home', 'Bachir Lawal', 9);
admin.addBook('Simple Crazy', 'Antolva Cripal',8);

// console.log(user1);



console.log('Request',requestList);
admin.issueBook();
// console.log('Request',requestList);
// console.log('Lib',library);
// console.log(issueList);
user1.returnBook('Simple Crazy', 'Antolva Cripal');
user3.returnBook('Simple Crazy', 'Antolva Cripal');

console.log('Library return', returnList);
admin.replaceBook();

console.log('library',library);
console.log('IssueList',issueList);