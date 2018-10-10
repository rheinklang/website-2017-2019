import { observer } from 'mobx-react';
import * as React from 'react';
import { Loader } from '../components/atoms/Loader';
import { PartnerStore } from '../models/PartnerStore';
import { IPartnerSchema } from '../schemes/Partner';

interface IPartnerViewProps {
	store: PartnerStore;
}

@observer
export class PartnerView extends React.Component<IPartnerViewProps> {
	public render() {
		const { partners, loaded } = this.props.store;

		if (!loaded) {
			return <Loader />;
		}

		return (
			<>
				{partners.map((partner: IPartnerSchema) => {
					return (
						<div key={partner.id}>
							<h2>{partner.name}</h2>
							{partner.image && (
								<img
									src={`https://cms.rheinklang-festival.ch${partner.image.data.url}`}
									title={partner.image.data.title}
									alt={partner.image.data.title}
								/>
							)}
							<p dangerouslySetInnerHTML={{ __html: partner.description }} />
							<a href={'/partners/' + partner.slug} title={partner.name}>
								Mehr dazu
							</a>
							<a href={partner.homepage} title={partner.name}>
								Webseite
							</a>
						</div>
					);
				})}
			</>
		);
	}
}
