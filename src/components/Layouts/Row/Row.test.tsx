/*
 * Created on Thu Nov 16 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useRef } from "react";
import { render, renderHook } from "@testing-library/react";
import styled from "@emotion/styled";

import Row from "./Row";

describe("Row", () => {
  describe("tag", () => {
    it(`Row는 div로 렌더링된다`, () => {
      const { container } = render(<Row data-testid="root">Text Message</Row>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it(`Row의 tag를 통해 tag의 태그로 렌더링된다`, () => {
      const { container } = render(
        <Row tag="a" href="asdf" data-testid="root">
          Text Message
        </Row>
      );
      expect(container.querySelector("a")).toBeInTheDocument();
    });

    it(`Row dot를 통해 해당 태그로 렌더링된다.`, () => {
      const { container } = render(
        <Row.a href="asdf" data-testid="root">
          Text Message
        </Row.a>
      );
      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  describe("align", () => {
    it("Row의 align 기본값은 flex-start이다", () => {
      const { container } = render(<Row data-testid="root">Text Message</Row>);
      expect(container.querySelector("div")).toHaveStyle("align-items: flex-start; justify-content: flex-start");
    });

    describe("verticalAlign", () => {
      it(`verticalAlign이 top일 경우 align-items는 flex-start이다.`, () => {
        const { container } = render(
          <Row verticalAlign="top" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("align-items: flex-start");
      });

      it(`verticalAlign이 bottom일 경우 align-items는 flex-end이다.`, () => {
        const { container } = render(
          <Row verticalAlign="bottom" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("align-items: flex-end");
      });

      it(`verticalAlign이 center일 경우 align-items는 center이다.`, () => {
        const { container } = render(
          <Row verticalAlign="center" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("align-items: center");
      });
    });

    describe("horizonAlign", () => {
      it(`horizonAlign left일 경우 justify-content는 flex-start이다.`, () => {
        const { container } = render(
          <Row horizonAlign="left" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: flex-start");
      });

      it(`horizonAlign right 경우 justify-content는 flex-end이다.`, () => {
        const { container } = render(
          <Row horizonAlign="right" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: flex-end");
      });

      it(`horizonAlign center 경우 justify-content는 center이다.`, () => {
        const { container } = render(
          <Row horizonAlign="center" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: center");
      });

      it(`horizonAlign distribute일 경우 justify-content는 space-between이다.`, () => {
        const { container } = render(
          <Row horizonAlign="distribute" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: space-between");
      });
    });

    describe("reverse", () => {
      it(`reverse가 true일 때 horizonAlign left 경우 justify-content는 flex-end이다.`, () => {
        const { container } = render(
          <Row reverse horizonAlign="left" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: flex-end");
      });

      it(`reverse가 true일 때 horizonAlign right 경우 justify-content는 flex-start이다.`, () => {
        const { container } = render(
          <Row reverse horizonAlign="right" data-testid="root">
            Text Message
          </Row>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: flex-start");
      });
    });
  });

  describe("override", () => {
    it(`Row은 emotion의 styled로 오버라이드 할 수 있다.`, () => {
      const StyledRow = styled(Row)``;
      const { container } = render(<StyledRow data-testid="root">Text Message</StyledRow>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it(`emotion의 styled로 오버라이드한 Row은 dot로 태그를 지정할 수 있다.`, () => {
      const StyledRow = styled(Row.a)``;
      const { container } = render(<StyledRow data-testid="root">Text Message</StyledRow>);
      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  describe("ref", () => {
    it(`Row은 ref를 받을수 있어야한다.`, () => {
      const {
        result: { current: ref },
      } = renderHook(() => useRef<HTMLButtonElement>(null));

      render(
        <Row.button data-testid="root" ref={ref}>
          Text Message
        </Row.button>
      );

      expect(ref.current).not.toBeNull();
    });
  });
});
