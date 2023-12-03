/*
 * Created on Sun Dec 03 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { atom } from "jotai";
// import {atomWithStorage} from 'jotai/utils'

type loginStatus = {
  isLoggedIn: boolean;
  accessToken?: string;
};

const loginStatusAtom = atom<loginStatus>({
  isLoggedIn: false,
  accessToken: undefined,
});

// const loginStatusAtom = atomWithStorage<loginStatus>("ls", {
//   isLoggedIn: false,
//   accessToken: undefined
// })

export default loginStatusAtom;
