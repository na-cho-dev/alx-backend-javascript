#!/usr/bin/node
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName
) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((resolve) =>
    resolve.map((response) => ({
      status: response.status,
      value:
        response.status === 'fulfilled'
          ? response.value
          : String(response.reason),
    }))
  );
}
