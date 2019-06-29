import { observer } from 'mobx-react';
import * as React from 'react';

import { IButtonProps } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { ButtonGroup } from '../ButtonGroup';
import { SocialShare } from '../SocialShare';

import { TicketingStore } from '../../../store/TicketingStore';

import './css/tickets.scss';

interface ITicketsProps {
	ticketingStore: TicketingStore;
	colorScheme?: 'dark' | 'light';
	hideSocialShare?: boolean;
	additionalButtons?: IButtonProps[];
}

@observer
export class Tickets extends React.Component<ITicketsProps> {
	public render() {
		const { colorScheme = 'dark', hideSocialShare, ticketingStore, additionalButtons } = this.props;
		const {
			isTicketShopOnline,
			areShareLinksEnabled,
			paymentMethodsText,
			comingSoonText,
		} = ticketingStore;

		return (
			<div className={`w-tickets w-tickets--cs-${colorScheme}`}>
				<div className="columns is-centered is-vcentered w-tickets__embedd-container">
					<div className="column is-full">
						{!isTicketShopOnline && <div className="w-tickets__coming-soon">
							<h3>{comingSoonText}</h3>
							<Icon select="price-tags" />
						</div>}
						<ButtonGroup buttons={[isTicketShopOnline ? { text: "Tickets kaufen", link: "/tickets" } : undefined].concat((additionalButtons || []))} />
					</div>
				</div>
				<div className="columns w-tickets__payment-container">
					<div className="column is-full">
						<p
							className="w-tickets__payment-foot-node"
							data-microtip-position="top"
							role="tooltip"
							aria-label="Zahlungsabwicklung durch Eventfrog"
						>
							<Icon select="credit-card" />{` ${paymentMethodsText}`}
						</p>
					</div>
				</div>
				{(areShareLinksEnabled && !hideSocialShare) && <div className="is-mobile is-centered w-tickets__share-container">
					<SocialShare text="Tickets für das Rheinklang Festival 2019! https://rheinklang-festival.ch/tickets?shared-visit" url="https://rheinklang-festival.ch/tickets?shared-visit" />
				</div>}
			</div>
		)
	}
}

export default Tickets;
