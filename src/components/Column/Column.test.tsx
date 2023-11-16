/*
 * Created on Thu Nov 16 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useRef } from "react";
import { render, renderHook } from "@testing-library/react";
import styled from "@emotion/styled";

import Column from "./Column";

describe("Column", () => {
  describe("tag", () => {
    it(`Column는 div로 렌더링된다`, () => {
      const { container } = render(<Column data-testid="root">Text Message</Column>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it(`Column의 tag를 통해 tag의 태그로 렌더링된다`, () => {
      const { container } = render(
        <Column tag="a" href="asdf" data-testid="root">
          Text Message
        </Column>
      );
      expect(container.querySelector("a")).toBeInTheDocument();
    });

    it(`Column dot를 통해 해당 태그로 렌더링된다.`, () => {
      const { container } = render(
        <Column.a href="asdf" data-testid="root">
          Text Message
        </Column.a>
      );
      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  describe("align", () => {
    it("Column의 align 기본값은 flex-start이다", () => {
      const { container } = render(<Column data-testid="root">Text Message</Column>);
      expect(container.querySelector("div")).toHaveStyle("align-items: flex-start; justify-content: flex-start");
    });

    describe("verticalAlign", () => {
      it(`verticalAlign이 top일 경우 justify-content는 flex-start이다.`, () => {
        const { container } = render(
          <Column verticalAlign="top" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: flex-start");
      });

      it(`verticalAlign이 bottom일 경우 justify-content는 flex-end이다.`, () => {
        const { container } = render(
          <Column verticalAlign="bottom" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: flex-end");
      });

      it(`verticalAlign이 center일 경우 justify-content는 center이다.`, () => {
        const { container } = render(
          <Column verticalAlign="center" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: center");
      });

      it(`verticalAlign이 distribute일 경우 justify-content는 space-between이다.`, () => {
        const { container } = render(
          <Column verticalAlign="distribute" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: space-between");
      });
    });

    describe("horizonAlign", () => {
      it(`horizonAlign left일 경우 align-items는 flex-start이다.`, () => {
        const { container } = render(
          <Column horizonAlign="left" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("align-items: flex-start");
      });

      it(`horizonAlign right 경우 align-items는 flex-end이다.`, () => {
        const { container } = render(
          <Column horizonAlign="right" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("align-items: flex-end");
      });

      it(`horizonAlign center 경우 align-items는 center이다.`, () => {
        const { container } = render(
          <Column horizonAlign="center" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("align-items: center");
      });
    });

    describe("reverse", () => {
      it(`reverse가 true일 때 verticalAlign top 경우 justify-content는 flex-end이다.`, () => {
        const { container } = render(
          <Column reverse verticalAlign="top" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: flex-end");
      });

      it(`reverse가 true일 때 verticalAlign bottom 경우 justify-content는 flex-start이다.`, () => {
        const { container } = render(
          <Column reverse verticalAlign="bottom" data-testid="root">
            Text Message
          </Column>
        );
        expect(container.querySelector("div")).toHaveStyle("justify-content: flex-start");
      });
    });
  });

  describe("override", () => {
    it(`Column은 emotion의 styled로 오버라이드 할 수 있다.`, () => {
      const StyledColumn = styled(Column)``;
      const { container } = render(<StyledColumn data-testid="root">Text Message</StyledColumn>);
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it(`emotion의 styled로 오버라이드한 Column은 dot로 태그를 지정할 수 있다.`, () => {
      const StyledColumn = styled(Column.a)``;
      const { container } = render(<StyledColumn data-testid="root">Text Message</StyledColumn>);
      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  describe("ref", () => {
    it(`Column은 ref를 받을수 있어야한다.`, () => {
      const {
        result: { current: ref },
      } = renderHook(() => useRef<HTMLButtonElement>(null));

      render(
        <Column.button data-testid="root" ref={ref}>
          Text Message
        </Column.button>
      );

      expect(ref.current).not.toBeNull();
    });
  });
});
