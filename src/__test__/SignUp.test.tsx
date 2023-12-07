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

    it("2-2. 이메일 입력 형식이 맞으면 틀렸다는 문구는 표시되지 않는다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <SignUpPage />
        </TestProvider>
      );

      const emailInput = await screen.findByPlaceholderText("E-mail");

      fireEvent.change(emailInput, {
        target: { value: "rhksflwkqkrgusdn@email.com" },
      });

      const errorLabel = screen.queryByText("이메일 형식이 잘못됐습니다.");

      expect(errorLabel).not.toBeInTheDocument();
    });

    it("2-3. 비밀번호 입력 형식이 틀리면 틀렸다는 문구가 표시된다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <SignUpPage />
        </TestProvider>
      );

      const passwordInput = await screen.findByPlaceholderText("password");

      fireEvent.change(passwordInput, { target: { value: "new value" } });

      const errorLabel = screen.queryByText(
        "비밀번호는 영어 + 숫자 + 특수문자 조합 8자리 이상 15자리 이하 문자입니다."
      );
      expect(errorLabel).toBeInTheDocument();
    });

    it("2-4. 비밀번호 입력 형식이 맞으면 틀렸다는 문구는 표시되지 않는다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <SignUpPage />
        </TestProvider>
      );

      const passwordInput = await screen.findByPlaceholderText("password");

      fireEvent.change(passwordInput, { target: { value: "123abcef@!" } });

      const errorLabel = screen.queryByText(
        "비밀번호는 영어 + 숫자 + 특수문자 조합 8자리 이상 15자리 이하 문자입니다."
      );
      expect(errorLabel).not.toBeInTheDocument();
    });

    it("2-5. 전화번호 입력 형식이 틀리면 틀렸다는 문구가 표시된다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <SignUpPage />
        </TestProvider>
      );

      const passwordInput = await screen.findByPlaceholderText("phoneNumber");

      fireEvent.change(passwordInput, { target: { value: "hi" } });

      const errorLabel = screen.queryByText(
        "전화번호는 '-' 를 제외한 숫자만 입력해주세요."
      );
      expect(errorLabel).toBeInTheDocument();
    });

    it("2-6. 전화번호 입력 형식이 맞으면 틀렸다는 문구는 표시되지 않는다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <SignUpPage />
        </TestProvider>
      );

      const passwordInput = await screen.findByPlaceholderText("phoneNumber");

      fireEvent.change(passwordInput, { target: { value: "01000000000" } });

      const errorLabel = screen.queryByText(
        "전화번호는 '-' 를 제외한 숫자만 입력해주세요."
      );
      expect(errorLabel).not.toBeInTheDocument();
    });
  });
});
