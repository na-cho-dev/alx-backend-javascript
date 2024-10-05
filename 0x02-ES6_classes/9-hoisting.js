export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  // year Setter/Getter
  set year(year) {
    if (typeof year !== 'number') {
      throw new TypeError('year must be a number');
    }
    this._year = year;
  }

  get year() {
    return this._year;
  }

  // location Setter/Getter
  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a number');
    }
    this._location = location;
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.holbertonClass = holbertonClass;
  }

  // fullName Setter/Getter
  set fullName(fullName) {
    if (typeof fullName !== 'string') {
      throw new TypeError('fullName must be a string');
    }
    const [first, last] = fullName.split(' ');
    this.firstName = first;
    this.lastName = last;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // holbertonClass Setter/Getter
  set holbertonClass(holbertonClass) {
    if (!(holbertonClass instanceof HolbertonClass)) {
      throw new TypeError(
        'holbertonClass must be an instance of HolbertonClass',
      );
    }
    this._holbertonClass = holbertonClass;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this.firstName} ${this.lastName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];

export default listOfStudents;
