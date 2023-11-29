import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";

import LoginPage from "@/pages/login";
import { TestProvider } from "./utils";

describe("로그인 페이지 테스트", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/login");
  });
  it("1. 로그인 페이지에는 입력 폼이 있다.", async () => {
    render(
      <TestProvider router={mockRouter}>
        <LoginPage />
      </TestProvider>
    );

    const loginForm = await screen.findByRole("form");

    expect(loginForm).toBeInTheDocument();
  });
});
