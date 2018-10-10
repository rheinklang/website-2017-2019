import { observer } from 'mobx-react';
import * as React from 'react';
import { RouteStore } from '../../../models/RouteStore';
import { StaticAssetStore } from '../../../models/StaticAssetStore';
import { Loader } from '../../atoms/Loader/index';

export interface ILoadingStateProps {
	children: any;
	routeStore: RouteStore;
	assetStore: StaticAssetStore;
}

@observer
export class LoadingState extends React.Component<ILoadingStateProps> {
	private get loaded(): boolean {
		const { assetStore, routeStore } = this.props;

		return [routeStore.loaded, routeStore.routes.length > 0, assetStore.loaded].every((loadedState: boolean) => {
			// ensure those props are already loaded to proceed
			return loadedState === true;
		});
	}

	public render() {
		return this.loaded ? this.props.children : <Loader />;
	}
}
