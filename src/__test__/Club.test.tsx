import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import userEvent from "@testing-library/user-event";

import ClubPage from "@/pages/club/[clubID]";
import { TestProvider } from "./utils";

describe("동아리 페이지 테스트", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/club/[clubID]");
    mockRouter.query = { clubID: "1" };
  });
  it("동아리 페이지에서는 홈이 먼저 표시된다.", async () => {
    render(
      <TestProvider router={mockRouter}>
        <ClubPage />
      </TestProvider>
    );

    expect(mockRouter.query.tab).toBe("home");
  });

  it("탭 전환 버튼을 클릭하면 쿼리스트링이 바뀐다.", async () => {
    render(
      <TestProvider router={mockRouter}>
        <ClubPage />
      </TestProvider>
    );
    const noticeButton = await screen.findByRole("button", { name: "공지" });
    await userEvent.click(noticeButton);
    expect(mockRouter.query.tab).toBe("notice");
  });
});
