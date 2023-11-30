/*
 * Created on Thu Nov 16 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { render, screen } from "@testing-library/react";
import { WhatIF } from ".";

describe("WhatIF", () => {
  it("WhatIF는 조건이 참일 경우 children을 반환한다.", () => {
    render(
      <WhatIF condition={true} falsy={<>거짓입니다.</>}>
        참입니다.
      </WhatIF>
    );
    const message = screen.getByText(/참입니다./);
    expect(message).toBeVisible();
  });
  it("WhatIF는 조건이 거짓일 경우 falsy를 반환한다.", () => {
    render(
      <WhatIF condition={false} falsy={<>거짓입니다.</>}>
        참입니다.
      </WhatIF>
    );
    const message = screen.getByText(/거짓입니다./);
    expect(message).toBeVisible();
  });
});
