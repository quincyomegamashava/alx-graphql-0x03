import React, { ReactNode } from "react";

interface State {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>Oops, there is an error!</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
              background: "#0070f3",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            Try again?
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
