import * as jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';

export const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

export const setAccessToken = (token: string) => {
  return localStorage.setItem('accessToken', token);
}

export const getUserInfo = (): (IUser & { iat: number }) | null => {
  const { NEXT_PUBLIC_ACCESS_SECRET_TOKEN } = process.env;
  const accessToken = localStorage.getItem('accessToken');

  return jwt.decode<IUser>(accessToken ?? '', NEXT_PUBLIC_ACCESS_SECRET_TOKEN ?? '');
};
