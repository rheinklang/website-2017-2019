import { observer } from 'mobx-react';
import * as React from 'react';
import { ConfigurationStore } from './models/ConfigurationStore';

interface IPlatformProps {
	configuration: ConfigurationStore;
	children: any;
}

@observer
export class Platform extends React.Component<IPlatformProps> {
	public render() {
		return this.props.children;
	}
}
