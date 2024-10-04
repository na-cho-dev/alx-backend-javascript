#!/usr/bin/node

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // Name Getter/Setter
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a number');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  // Code Getter/Setter
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('code must be a number');
    }
    this._code = code;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
