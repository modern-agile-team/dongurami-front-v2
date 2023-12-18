import mockRouter from "next-router-mock";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PaginationBoard, InfinityScrollBoard } from "@/containers/Board";

import { TestProvider } from "./utils";

describe("게시판 템플릿 페이지 테스트", () => {
  describe("1. 페이지네이션 템플릿 테스트", () => {
    beforeEach(() => {
      mockRouter.setCurrentUrl("/board/pagination");
    });

    it("1-1. 페이지네이션 양식에는 페이지 이동 버튼이 있다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <PaginationBoard />
        </TestProvider>
      );

      const pageButton = await screen.findByText("1");

      expect(pageButton).toBeInTheDocument();
    });

    it("1-2. 페이지 버튼 클릭시 쿼리스트링 'page' 값이 변경된다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <PaginationBoard />
        </TestProvider>
      );

      const firstPageButton = await screen.findByText("1");
      await userEvent.click(firstPageButton);
      expect(mockRouter.query.page).toBe("1");
    });
    // it("1-N. 페이지 이동 버튼 좌측에 prev 버튼이 있다.", () => {});
    // it("1-M. 페이지 이동 버튼 우측에 next 버튼이 있다.", () => {});
    // 기획 필요(1 > 2 || 1 > 6)
  });

  describe("2. 무한스크롤 템플릿 테스트", () => {
    beforeEach(() => {
      mockRouter.setCurrentUrl("/board/infinity");
    });

    it("2-1. 페이지 하단 부분으로 스크롤을 내리면 다음 페이지가 렌더된다.", async () => {
      render(
        <TestProvider router={mockRouter}>
          <InfinityScrollBoard />
        </TestProvider>
      );
      //todo 스크롤 내리는 기능 구현 후 나타나는 두번째 요청 데이터 테스트
    });
  });
});
