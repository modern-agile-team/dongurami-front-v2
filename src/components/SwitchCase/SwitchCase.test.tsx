/**
 * @copyright (C) 2023, Rsupport. All rights reserved
 *
 * @license
 * This software and/or source code may be used, copied and/or disseminated only
 * with the written permission of Rsupport, or in accordance with the terms
 * and conditions stipulated in the agreement/contract under which the software
 * and/or source code has been supplied by Rsupport or its affiliates.
 * Unauthorized use, copying, or dissemination of this file, via any medium, is
 * strictly prohibited, and will constitute an infringement of copyright.
 *
 * @description
 *
 * @created at Tue Aug 22 2023
 **/
import { render } from "@testing-library/react";
import SwitchCase from "./SwitchCase";

describe("SwitchCase", () => {
  it("SwitchCase는 조건을 받을 수 있어야 한다.", () => {
    const { container } = render(<SwitchCase condition={0 as number} cases={{ 0: <div>1</div> }} />);
    expect(container.querySelector("div")).toBeInTheDocument();
  });
});
