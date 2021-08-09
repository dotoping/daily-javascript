let studentID: number = 123456;
let studentName: string = 'Daniel';
let age: number = 30;
let gender: string = "male";
let email: string = 'daniel.dotping@gmail.com';
let majob: string = "CS";
let isAvailable: boolean = true;

let student1 = {
    studentID: 4567890,
    studentName: 'Sunny',
    age: 30,
    major: "CS",
    gender: "female",
    email: 'sunny.dotping@gmail.com',
    isAvailable: true
}

interface Student {
    studentID: number;
    studentName: string;
    age: number;
    gender?: string;
    major: string;
    email: string;
    isAvailable: boolean;
}

function getStudent(studentID: number): Student {
    return {
        studentID: 123456,
        studentName: 'Daniel',
        age: 30,
        major: "PS",
        gender: "male",
        email: 'daniel.dotping@gmail.com',
        isAvailable: true
    };
}

function addStudent(student: Student): void {

}

addStudent(student1);

function removeStudent(studentID: number): Student {
    return null;
}