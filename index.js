const User = require('./person/user/user');
const requestList = require('./data/requestList');
const Teacher = require('./person/user/teacher/teacher');
const Student = require('./person/user/student/student');
const Admin = require('./person/admin/admin');
const library = require('./data/library');

const user1 = new Student('Nnamdi','teacher','junior');
user1.borrowBook('Shades of Home', 'Bachir Lawal');
console.log(user1);
console.log(requestList);

const admin = new Admin('Galvin Belson');
admin.addBook('Spiral Shift Island','Anslem Crenshaw', 9);
console.log(library);