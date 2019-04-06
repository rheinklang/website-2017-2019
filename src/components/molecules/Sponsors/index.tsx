import { observer } from 'mobx-react';
import * as React from 'react';


import { IPartner } from '../../../schemes/Partner';
import { PartnerStore } from '../../../store/PartnerStore';
import { Sponsor } from '../../atoms/Sponsor';

import './css/base.scss';

interface ISponsorsProps {
	parnterStore: PartnerStore
}

@observer
export class Sponsors extends React.Component<ISponsorsProps> {
	public render() {
		const { partners } = this.props.parnterStore;

		return (
			<div className="m-sponsors">
				<div className="columns is-mobile is-centered is-multiline">
					{partners.map(partner => this.renderSponsor(partner))}
				</div>
			</div>
		)
	}

	private renderSponsor(props: IPartner) {
		const classNames = ['a-sponsors__entry', 'column', 'is-vcentered', 'is-narrow', 'is-12-mobile'];
		if (props.is_primary) {
			classNames.push('is-6-desktop');
			classNames.push('is-6-tablet');
		} else if (props.package === 'gold') {
			classNames.push('is-4-desktop');
			classNames.push('is-4-tablet');
		}


		if (!props.image && process.env.NODE_ENV !== 'production') {
			// tslint:disable-next-line:no-console
			console.warn(`Error in Sponsor ${props.name}: no image set`);
			return null;
		}

		return (
			<div className={classNames.join(' ')} key={props.id}>
				<Sponsor
					image={props.image.data}
					tooltip={props.tooltip}
					name={props.name}
					link={props.homepage}
					primary={Boolean(props.is_primary)}
					package={props.package} />
			</div>
		)
	}
}
