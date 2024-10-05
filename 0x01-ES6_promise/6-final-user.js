import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => [
    {
      status: values[0].status,
      value:
        values[0].status === 'fulfilled'
          ? values[0].value
          : String(values[0].reason),
    },
    {
      status: values[1].status,
      value:
        values[1].status === 'fulfilled'
          ? values[1].value
          : String(values[1].reason),
    },
  ]);
}
