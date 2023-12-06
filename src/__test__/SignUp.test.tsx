import mockRouter from "next-router-mock";
import { TestProvider } from "./utils";
import SignUpPage from "@/pages/sign-up";
import { render, screen, fireEvent } from "@testing-library/react";

describe("회원가입 페이지 테스트", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/sign-up");
  });

  //   it("0. 로그인 한 상태에서는 회원가입 페이지로 이동할 수 없다.");

  it("1. 회원가입 페이지에는 입력 폼이 있다.", async () => {
    render(
      <TestProvider router={mockRouter}>
        <SignUpPage />
      </TestProvider>
    );

    const signUpForm = await screen.findByRole("form");

    expect(signUpForm).toBeInTheDocument();
  });

  describe("2. 입력 형식 검증", () => {
    it("2-1. 이메일 입력 형식이 틀리면 틀렸다는 문구가 표시된다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <SignUpPage />
        </TestProvider>
      );

      const emailInput = await screen.findByPlaceholderText("E-mail");

      fireEvent.change(emailInput, { target: { value: "new value" } });

      const errorLabel = screen.queryByText("이메일 형식이 잘못됐습니다.");

      expect(errorLabel).toBeInTheDocument();
    });
  });
});
