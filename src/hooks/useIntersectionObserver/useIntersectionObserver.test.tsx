/*
 * Created on Thu Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

import { render, act } from "@testing-library/react";

import useIntersectionObserver from "./useIntersectionObserver";

const observe = jest.fn();
const unobserve = jest.fn();

// IntersectionObserver 모킹
const mockIntersectionObserver = jest.fn((callback: any, options: any) => ({
  observe,
  unobserve,
  ...options,
}));

window.IntersectionObserver = mockIntersectionObserver;

const TestComponent = () => {
  const { observerRef } = useIntersectionObserver<HTMLDivElement>();
  return <div ref={observerRef} />;
};

describe("useIntersectionObserver", () => {
  it("should attach observer to the ref", () => {
    render(<TestComponent />);
    expect(mockIntersectionObserver).toHaveBeenCalled();
  });

  it("should update isShow when intersection changes", () => {
    let observerCallback: (args: [{ isIntersecting: boolean }]) => void;
    mockIntersectionObserver.mockImplementation((callback, options) => {
      observerCallback = callback;
      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
      };
    });

    const TestComponent = () => {
      const { observerRef, isShow } = useIntersectionObserver<HTMLDivElement>();
      return <div ref={observerRef}>{isShow ? "Visible" : "Not Visible"}</div>;
    };

    const { getByText } = render(<TestComponent />);

    // 가시성 변경 시뮬레이션
    act(() => {
      observerCallback([{ isIntersecting: true }]);
    });
    expect(getByText("Visible")).toBeInTheDocument();

    act(() => {
      observerCallback([{ isIntersecting: false }]);
    });
    expect(getByText("Not Visible")).toBeInTheDocument();
  });

  it("should call callback when intersection changes", () => {
    const mockCallback = jest.fn();
    let observerCallback: (args: [{ isIntersecting: boolean }]) => void;
    mockIntersectionObserver.mockImplementation((callback, options) => {
      observerCallback = callback;
      return {
        observe: jest.fn(),
        unobserve: jest.fn(),
      };
    });

    const TestComponent = () => {
      const { observerRef } =
        useIntersectionObserver<HTMLDivElement>(mockCallback);
      return <div ref={observerRef} />;
    };

    render(<TestComponent />);

    // 가시성 변경 시뮬레이션
    act(() => {
      observerCallback([{ isIntersecting: true }]);
    });
    expect(mockCallback).toHaveBeenCalledWith(expect.anything());
  });
});
