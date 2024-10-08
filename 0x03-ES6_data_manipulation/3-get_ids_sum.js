#!/usr/bin/node

export default function getStudentIdsSum(getListStudents) {
  const arrayIdSum = getListStudents.reduce(
    (acc, student) => acc + student.id,
    0,
  );

  return arrayIdSum;
}
