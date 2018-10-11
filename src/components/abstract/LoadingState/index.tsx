import { observer } from 'mobx-react';
import * as React from 'react';
import { ConfigurationStore } from '../../../models/ConfigurationStore';
import { RouteStore } from '../../../models/RouteStore';
import { StaticAssetStore } from '../../../models/StaticAssetStore';
import { Loader } from '../../atoms/Loader/index';

export interface ILoadingStateProps {
	children: any;
	routeStore: RouteStore;
	assetStore: StaticAssetStore;
	configurationStore: ConfigurationStore;
}

@observer
export class LoadingState extends React.Component<ILoadingStateProps> {
	private get loaded(): boolean {
		const { assetStore, routeStore, configurationStore } = this.props;

		return [configurationStore.loaded, routeStore.loaded, routeStore.routes.length > 0, assetStore.loaded].every(
			(loadedState: boolean) => {
				// ensure those props are already loaded to proceed
				return loadedState === true;
			}
		);
	}

	private get maintenance(): boolean {
		return this.props.configurationStore.env.maintenance;
	}

	public render() {
		// tslint:disable-next-line
		console.log(this.loaded ? 'render page' : 'loading');

		if (!this.loaded) {
			return <Loader />;
		}

		if (this.maintenance) {
			return <h1>Maintenance</h1>;
		}

		return this.props.children;
	}
}
