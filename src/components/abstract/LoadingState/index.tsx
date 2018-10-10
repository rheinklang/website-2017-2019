import { observer } from 'mobx-react';
import * as React from 'react';
import { RouteStore } from '../../../models/RouteStore';
import { Loader } from '../../atoms/Loader/index';

export interface ILoadingStateProps {
	children: any;
	routeStore: RouteStore;
}

@observer
export class LoadingState extends React.Component<ILoadingStateProps> {
	private get loaded(): boolean {
		const { routeStore } = this.props;

		return [routeStore.loaded].every((loadedState: boolean) => loadedState === true);
	}

	public render() {
		return this.loaded ? this.props.children : <Loader />;
	}
}
