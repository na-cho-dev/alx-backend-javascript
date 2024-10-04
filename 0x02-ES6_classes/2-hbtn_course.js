#!/usr/bin/node

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Name Getter/Setter
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  // Length Getter/Setter
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  // Student Getter/Setter
  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an Array');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
