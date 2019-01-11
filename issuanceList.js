let senior = [];
let junior = [];
let teacher = [];
let student = [senior,junior];
[senior,junior] = student;
// let studentLevel = [];
// const issuanceList = [teacher,student];

exports.Teacher = teacher;
exports.Senior = student[0];
exports.Junior = student[1];// exports.Student = student;

// exports.Student.Senior = studentLevel;
// exports.third = issuanceList