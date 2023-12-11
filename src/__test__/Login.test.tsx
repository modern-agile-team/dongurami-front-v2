import { render, screen, fireEvent } from "@testing-library/react";
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

  describe("2. 입력 형식 검증", () => {
    it("2-1. 이메일 입력 형식이 틀리면 틀렸다는 문구가 표시된다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <LoginPage />
        </TestProvider>
      );

      const emailInput =
        await screen.findByPlaceholderText("아이디를 입력하세요");

      fireEvent.change(emailInput, { target: { value: "new value" } });

      const errorLabel = screen.queryByText("이메일 형식이 잘못됐습니다.");

      expect(errorLabel).toBeInTheDocument();
    });

    it("2-2. 이메일 입력 형식이 맞으면 틀렸다는 문구는 표시되지 않는다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <LoginPage />
        </TestProvider>
      );

      const emailInput =
        await screen.findByPlaceholderText("아이디를 입력하세요");

      fireEvent.change(emailInput, {
        target: { value: "alstnsrl98@gmail.com" },
      });

      const errorLabel = screen.queryByText("이메일 형식이 잘못됐습니다.");

      expect(errorLabel).not.toBeInTheDocument();
    });
  });
});
