import * as React from 'react';
import { LogDnaAPI } from './api/logdna';

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
		this.setState({
			hasError: true
		});
		// tslint:disable-next-line:no-console
		alert(`ErrorBoundary caught ${error.message}\n\t${info.componentStack})`);
		LogDnaAPI.postLog({
			componentStack: info.componentStack,
			error,
		});
	}

	public render() {
		return this.props.children;
	}

}
