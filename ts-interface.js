var studentID = 123456;
var studentName = 'Daniel';
var age = 30;
var gender = "male";
var email = 'daniel.dotping@gmail.com';
var majob = "CS";
var isAvailable = true;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
;
;
var student1 = {
    studentID: 4567890,
    studentName: 'Sunny',
    age: 30,
    major: "CS",
    gender: 'female',
    email: 'sunny.dotping@gmail.com',
    isAvailable: true
};
function getStudent(studentID) {
    return {
        studentID: 123456,
        studentName: 'Daniel',
        age: 30,
        major: "PS",
        gender: 'male',
        email: 'daniel.dotping@gmail.com',
        isAvailable: true
    };
}
function addStudent(student) {
}
addStudent(student1);
function removeStudent(studentID) {
    return null;
}
