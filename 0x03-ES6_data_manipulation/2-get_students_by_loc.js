#!/usr/bin/node

export default function getStudentsByLocation(getListStudents, city) {
  const locationArray = getListStudents.filter(
    (studentCity) => studentCity.location === city,
  );

  return locationArray;
}
