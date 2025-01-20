"use strict";
const studentMarks = ["Rakshit", 70, 77];
const calculateTotalMarks = (studentMarks) => {
    return studentMarks[1] + studentMarks[2];
};
const getStudentReport = (studentMarks) => {
    return `Name: ${studentMarks[0]}, \n Marks in Math: ${studentMarks[1]}, \n Marks in Science: ${studentMarks[2]}`;
};
console.log(calculateTotalMarks(studentMarks));
console.log(getStudentReport(studentMarks));
