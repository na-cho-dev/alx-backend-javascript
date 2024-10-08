#!/usr/bin/node

export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades,
) {
  const studentArray = getListStudents
    .filter((student) => student.location === city)
    .map((studentGrade) => {
      const foundGradeObj = newGrades.find(
        (grade) => grade.studentId === studentGrade.id,
      );
      studentGrade.grade = foundGradeObj ? foundGradeObj.grade : 'N/A'; // eslint-disable-line no-param-reassign
      return studentGrade;
    });
  return studentArray;
}
