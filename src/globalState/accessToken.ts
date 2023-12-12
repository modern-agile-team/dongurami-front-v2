/*
 * Created on Sun Dec 03 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { atomWithStorage } from "jotai/utils";

type AccessToken = string | null;

const accessTokenAtom = atomWithStorage<AccessToken>("an", null);

export default accessTokenAtom;
