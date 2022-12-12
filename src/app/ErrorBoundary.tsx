import React, { ReactNode } from "react";
import { ErrorLayout } from "shared/ui/layouts";

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorLayout />;
    }

    return this.props.children;
  }
}
