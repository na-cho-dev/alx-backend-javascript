#!/usr/bin/node
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classRoomObj1 = new ClassRoom(19);
  const classRoomObj2 = new ClassRoom(20);
  const classRoomObj3 = new ClassRoom(34);
  const classArray = [classRoomObj1, classRoomObj2, classRoomObj3];

  return classArray;
}
