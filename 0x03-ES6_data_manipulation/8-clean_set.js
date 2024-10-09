#!/usr/bin/node

export default function cleanSet(mySet, startString) {
  if (
    !mySet
    && !startString
    && !(mySet instanceof Set)
    && typeof startString !== 'string'
  ) {
    return '';
  }

  const cleanSetArray = [];

  for (const value of mySet.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        cleanSetArray.push(valueSubStr);
      }
    }
  }
  return cleanSetArray.join('-');
}
