import { getData, setData } from './dataStore';
import HttpError from 'http-errors';
import { medicalDataType, user, data } from './types';

export function setMedicalInfo(medicalDataType: medicalDataType, username: string): medicalDataType {
  const data: data = getData();
  // check user exists 
  const users: user[] = data.users;
  const findUser: user | undefined = users.find((u) => u.username === username);
  if (findUser === undefined) {
    throw HttpError(400, 'username is not a valid user');
  }
  // set new data
  findUser.medicalInfo = medicalDataType;
  const userInfo = findUser.medicalInfo;
  setData(data);
  return userInfo;
}