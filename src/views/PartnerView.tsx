import { observer } from 'mobx-react';
import * as React from 'react';
import { PartnerStore } from '../models/PartnerStore';
import { IPartner } from '../models/schemes/Partner';

interface IPartnerViewProps {
	store: PartnerStore;
}

@observer
export class PartnerView extends React.Component<IPartnerViewProps> {
	public render() {
		const { partners } = this.props.store;
		// tslint:disable-next-line
		console.log(partners);

		return (
			<>
				{partners.map((partner: IPartner) => {
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
