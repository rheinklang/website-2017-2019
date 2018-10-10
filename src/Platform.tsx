import { observer } from 'mobx-react';
import * as React from 'react';
import { Loader } from './components/atoms/Loader';
import { ConfigurationStore } from './models/ConfigurationStore';

interface IPlatformProps {
	configuration: ConfigurationStore;
	children: any;
}

@observer
export class Platform extends React.Component<IPlatformProps> {
	public render() {
		const { configuration, children } = this.props;

		if (!configuration.loaded) {
			return <Loader />;
		}

		// tslint:disable-next-line
		console.log('c', configuration.env);

		if (configuration.env.maintenance) {
			return <h1>Maintenance mode</h1>;
		}

		return children;
	}
}
