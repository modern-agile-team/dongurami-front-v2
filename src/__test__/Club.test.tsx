import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import userEvent from "@testing-library/user-event";
import { Session } from "next-auth";

import ClubPage from "@/pages/club/[clubID]";
import { TestProvider } from "./utils";

describe("동아리 페이지 테스트", () => {
  const session: Session = {
    expires: "ISODateString",
  };
  beforeEach(() => {
    mockRouter.setCurrentUrl("/club/[clubID]");
    mockRouter.query = { clubID: "1" };
  });
  it("1. 동아리 페이지에서는 홈이 먼저 표시된다.", async () => {
    render(
      <TestProvider router={mockRouter} session={session}>
        <ClubPage />
      </TestProvider>
    );

    expect(mockRouter.query.tab).toBe("home");
  });

  it("2. 탭 전환 버튼을 클릭하면 쿼리스트링이 바뀐다.", async () => {
    render(
      <TestProvider router={mockRouter} session={session}>
        <ClubPage />
      </TestProvider>
    );
    const calendarButton = await screen.findByRole("button", {
      name: "캘린더",
    });
    await userEvent.click(calendarButton);
    expect(mockRouter.query.tab).toBe("calendar");
  });

  it("3. URL을 통해 잘못된 탭으로 접근시 home 탭으로 이동한다.", async () => {
    mockRouter.query = { ...mockRouter.query, tab: "wrong_tab" };
    render(
      <TestProvider router={mockRouter} session={session}>
        <ClubPage />
      </TestProvider>
    );
    expect(mockRouter.query.tab).toBe("home");
  });
});
