#!/usr/bin/node
import ClassRoom from './0-classroom';

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  const classArray = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];

  return classArray;
}
