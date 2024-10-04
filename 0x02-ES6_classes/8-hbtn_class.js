#!/usr/bin/node

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // Size Getter/Setter
  set size(size) {
    if (typeof size !== 'number') {
      throw new TypeError('size must be a number');
    }
    this._size = size;
  }

  get size() {
    return this._size;
  }

  // Location Getter/Setter
  set location(location) {
    if (typeof location !== 'string') {
      throw new TypeError('location must be a number');
    }
    this._location = location;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](castedTyped) {
    if (castedTyped === 'number') {
      return this._size;
    }
    if (castedTyped === 'string') {
      return this._location;
    }
    return this;
  }
}
