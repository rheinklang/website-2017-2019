import * as React from 'react';

interface IAsyncComponentState {
	component: any | null
}

interface IAsyncComponentOpts {
	useSynthethicDefaultImport?: boolean
}

type ComponentImporter<T> = () => Promise<T>;

const asyncComponent = <T extends any>(importComponent: ComponentImporter<T>, opts?: IAsyncComponentOpts) => {
	return class AsyncComponent extends React.Component<{}, IAsyncComponentState> {
		public state: IAsyncComponentState = {
			component: null
		}

		public componentDidMount() {
			importComponent()
				.then(imported => {
					if (opts && opts.useSynthethicDefaultImport === false) {
						this.setState({
							component: imported
						});
					} else {
						this.setState({
							component: imported.default
						});
					}
				});
		}

		public render() {
			// tslint:disable-next-line:no-console
			const C = this.state.component;
			return C ? <C {...this.props} /> : null;
		}
	}
};

export default asyncComponent;
