#!/usr/bin/node

export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);

  if (position >= length) {
    throw new Error('Position outside range');
  }

  const dataView = new DataView(buffer, 0, length);
  dataView.setInt8(position, value);

  return dataView;
}
