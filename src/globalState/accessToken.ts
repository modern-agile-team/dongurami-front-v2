/*
 * Created on Sun Dec 03 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { atomWithStorage } from "jotai/utils";

type AccessToken = string | null;

const accessTokenAtom = atomWithStorage<AccessToken>("an", null, {
  getItem(key, initialValue) {
    return localStorage.getItem(key) || initialValue;
  },
  setItem(key, newValue) {
    localStorage.setItem(key, `${newValue}`);
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
});

export default accessTokenAtom;
