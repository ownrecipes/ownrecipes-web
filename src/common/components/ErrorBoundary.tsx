import { Component } from 'react';
import { AnyComponent } from '../../types/Types';

interface IErrorBoundaryProps {
  /** Print message? */
  verbose:    boolean;
  /** Print error stack? */
  printStack: boolean;
}

interface IErrorBoundaryState {
  readonly hasError: boolean;
  readonly error: Error | null | undefined;
}

interface IErrorBoundaryContainerProps {
  /** The error. */
  children: AnyComponent;
}

const ErrorBoundaryContainer: React.FC<IErrorBoundaryContainerProps> = (props: IErrorBoundaryContainerProps) => (
  <div>
    {props.children}
  </div>
);

/**
 * Simple error catcher.
 *
 * Wrap the usage of components to prevent any error from leaving.
 *
 * Example:
 * ```
 * <ErrorBoundary>
 *     <MyComponent ... />
 * </ErrorBoundary>
 * ```
 *
 * See also: {@link https://reactjs.org/docs/error-boundaries.html}
 */
 class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    return { error: error, hasError: true };
  }

  componentDidCatch(error: Error | null) {
    this.setState({ error: error || new Error('Error missing') });
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ErrorBoundaryContainer>
          <h1>Error</h1>
          {this.props.verbose && (
            <>
              <h2>Message:</h2>
              <p>{this.state.error.message}</p>
            </>
          )}
          {this.props.printStack && (
            <>
              <h2>Stack:</h2>
              <p>{this.state.error.stack}</p>
            </>
          )}
        </ErrorBoundaryContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;