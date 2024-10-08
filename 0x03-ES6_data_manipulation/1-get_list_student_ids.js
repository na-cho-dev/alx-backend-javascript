#!/usr/bin/node

export default function getListStudentIds(getListStudents) {
  if (!(getListStudents instanceof Array)) {
    return [];
  }

  const myArrayId = [];

  for (const student of getListStudents) {
    myArrayId.push(student.id);
  }

  return myArrayId;
}
