import { useEffect } from "react";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";

import { TestProvider } from "./utils";

const TextComponent = () => {
  useEffect(() => {
    throw new Error("에러 발생");
  }, []);
  return <div>에러 발생 안함</div>;
};

describe("에러 바운더리 테스트", () => {
  it("1. 에러가 발생하면 에러바운더리 화면으로 이동한다.", async () => {
    render(
      <TestProvider router={mockRouter}>
        <TextComponent />
      </TestProvider>
    );

    expect(
      screen.getByText("예상하지 못한 에러가 발생했습니다!")
    ).toBeInTheDocument();
  });
});
