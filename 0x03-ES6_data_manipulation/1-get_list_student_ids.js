#!/usr/bin/node

export default function getListStudentIds(getListStudents) {
  if (!(getListStudents instanceof Array)) {
    return [];
  }

  const myArrayId = getListStudents.map((studentId) => studentId.id);

  return myArrayId;
}
