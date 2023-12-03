/*
 * Created on Sun Dec 03 2023
 *
 * Copyright (c) 2023 Your Company
 */

import v from "validator";

function validator() {
  const password = (value: string) => {
    return v.isStrongPassword(value, {
      minLength: 8,
      minSymbols: 1,
      minUppercase: 0,
    });
  };

  const email = (value: string) => {
    return v.isEmail(value);
  };

  return { password, email };
}

export default validator();
