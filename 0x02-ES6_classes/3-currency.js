#!/usr/bin/node

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Code Getter/Setter Method
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  // Name Getter/Setter Method
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  // Return the attributes in the following format name (code)
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
