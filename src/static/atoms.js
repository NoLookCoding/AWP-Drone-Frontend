import { atom } from 'recoil';

export const userIdState = atom({
  key: 'userId',
  default: -1,
});

export const userNameState = atom({
    key: 'name',
    default: '',
  });

export const userIdxState = atom({
    key: 'userIdx',
    default: 0,
});

export const adminState = atom({
    key: 'admin',
    default: 1,
});