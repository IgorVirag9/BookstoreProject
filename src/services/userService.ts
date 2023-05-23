import axios from "axios";
import User from "../model/user";

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get(
    `${process.env.REACT_APP_FIREBASE_URL}/users.json`
  );
  const usersData = response.data;
  const usersArray: User[] = Object.keys(usersData).map((key) => ({
    ...usersData[key],
    id: key,
  }));
  return usersArray;
};

export const postUser = async (user: User): Promise<User> => {
  const response = await axios.post(
    `${process.env.REACT_APP_FIREBASE_URL}/users.json`,
    user
  );
  console.log(response);
  const createdUser: User = {
    ...user,
    id: response.data.name,
  };
  return createdUser;
};
