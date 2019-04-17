import * as React from 'react';

interface IErrorBoundaryState {
	hasError: boolean
}

export class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
	public static getDerivedStateFromError(error?: Error) {
		// update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public state: IErrorBoundaryState = {
		hasError: false
	};

	public componentDidCatch(error: Error, info: React.ErrorInfo) {
		// tslint:disable-next-line:no-console
		console.error(`ErrorBoundary caught ${error.message}\n\t${info.componentStack})`)
	}

	public render() {
		if (this.state.hasError) {
			return this.props.children;
		}

		return this.props.children;
	}

}
