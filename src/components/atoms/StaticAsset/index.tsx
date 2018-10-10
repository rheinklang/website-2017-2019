import { observer } from 'mobx-react';
import * as React from 'react';
import { StaticAssetStore } from '../../../models/StaticAssetStore';

interface IStaticAssetProps {
	store: StaticAssetStore;
	name: string;
}

@observer
export class StaticAsset extends React.Component<IStaticAssetProps> {
	public render() {
		const { store, name } = this.props;
		const asset = store.getAssetByName(name);

		if (!asset) {
			return null;
		}

		// tslint:disable-next-line
		console.log(asset.blob.data);

		return (
			<img src={`https://cms.rheinklang-festival.ch${asset.blob.data.url}`} alt={asset.alt} title={asset.title} />
		);
	}
}
