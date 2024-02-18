/*
 * Created on Sun Dec 03 2023
 *
 * Copyright (c) 2023 Your Company
 */

import v from "validator";

class Validator {
  password(value: string) {
    if (value.length > 15) return false;
    return v.isStrongPassword(value, {
      minLength: 8,
      minSymbols: 1,
      minUppercase: 0,
    });
  }

  email(value: string) {
    return v.isEmail(value);
  }

  phoneNumber(value: string) {
    return v.isMobilePhone(value);
  }

  get isClient() {
    return typeof window !== "undefined";
  }
}

export default new Validator();
