/*
 * Created on Sat Jan 20 2024
 *
 * Copyright (c) 2024 Your Company
 */

import { atomWithStorage } from "jotai/utils";

const themeModeAtom = atomWithStorage<"light" | "dark">("mode", "light");

export default themeModeAtom;
