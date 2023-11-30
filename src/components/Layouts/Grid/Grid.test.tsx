/*
 * Created on Thu Nov 16 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { useRef } from "react";
import { render, renderHook } from "@testing-library/react";
import styled from "@emotion/styled";

import Grid from "./Grid";

describe("Grid", () => {
  describe("tag", () => {
    it(`Grid는 div로 렌더링된다`, () => {
      const { container } = render(
        <Grid data-testid="root">Text Message</Grid>
      );
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it(`Grid의 tag를 통해 tag의 태그로 렌더링된다`, () => {
      const { container } = render(
        <Grid tag="a" href="asdf" data-testid="root">
          Text Message
        </Grid>
      );
      expect(container.querySelector("a")).toBeInTheDocument();
    });

    it(`Grid dot를 통해 해당 태그로 렌더링된다.`, () => {
      const { container } = render(
        <Grid.a href="asdf" data-testid="root">
          Text Message
        </Grid.a>
      );
      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  describe("props", () => {
    it("Grid의 인자로 column을 추가하면 행의 갯수를 지정할 수 있다.", () => {
      const { container } = render(
        <Grid column={3} href="asdf" data-testid="root">
          Text Message
        </Grid>
      );
      expect(container.querySelector("div")).toHaveStyle(
        "grid-template-columns: repeat(3, 1fr)"
      );
    });

    it("Grid의 인자로 row을 추가하면 열의 갯수를 지정할 수 있다.", () => {
      const { container } = render(
        <Grid row={3} href="asdf" data-testid="root">
          Text Message
        </Grid>
      );
      expect(container.querySelector("div")).toHaveStyle(
        "grid-template-rows: repeat(3, 1fr)"
      );
    });

    it("Grid의 인자로 gridGap을 추가하면 요소 사이의 간격이 생긴다.", () => {
      const { container } = render(
        <Grid gridGap={3} href="asdf" data-testid="root">
          Text Message
        </Grid>
      );
      expect(container.querySelector("div")).toHaveStyle("row-gap: 3px");
      expect(container.querySelector("div")).toHaveStyle("column-gap: 3px");
    });
  });

  describe("override", () => {
    it(`Grid은 emotion의 styled로 오버라이드 할 수 있다.`, () => {
      const StyledGrid = styled(Grid)``;
      const { container } = render(
        <StyledGrid data-testid="root">Text Message</StyledGrid>
      );
      expect(container.querySelector("div")).toBeInTheDocument();
    });

    it(`emotion의 styled로 오버라이드한 Grid은 dot로 태그를 지정할 수 있다.`, () => {
      const StyledGrid = styled(Grid.a)``;
      const { container } = render(
        <StyledGrid data-testid="root">Text Message</StyledGrid>
      );
      expect(container.querySelector("a")).toBeInTheDocument();
    });
  });

  describe("ref", () => {
    it(`Grid은 ref를 받을수 있어야한다.`, () => {
      const {
        result: { current: ref },
      } = renderHook(() => useRef<HTMLButtonElement>(null));

      render(
        <Grid.button data-testid="root" ref={ref}>
          Text Message
        </Grid.button>
      );

      expect(ref.current).not.toBeNull();
    });
  });
});
