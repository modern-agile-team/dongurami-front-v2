/*
 * Created on Thu Nov 30 2023
 *
 * Copyright (c) 2023 Your Company
 */

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>예상하지 못한 에러가 발생했습니다!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            다시 시도하시겠어요?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
