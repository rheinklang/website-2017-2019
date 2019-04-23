import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '../../atoms/Icon';
import { SocialShare } from '../SocialShare';

import { TicketingStore } from '../../../store/TicketingStore';

import './css/tickets.scss';

interface ITicketsProps {
	ticketingStore: TicketingStore
}

@observer
export class Tickets extends React.Component<ITicketsProps> {
	public render() {
		const {
			isTicketShopOnline,
			areShareLinksEnabled,
			paymentMethodsText,
			comingSoonText
		} = this.props.ticketingStore;

		return (
			<div className="w-tickets">
				<div className="columns is-centered is-vcentered w-tickets__embedd-container">
					<div className="column is-full">
						{!isTicketShopOnline && <div className="w-tickets__coming-soon">
							<h3>{comingSoonText}</h3>
							<Icon select="price-tags" />
						</div>}
						{isTicketShopOnline && <button className="w-tickets__button">
							<Link to="/tickets" className="w-tickets__button-link">Tickets kaufen</Link>
						</button>}
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
				{areShareLinksEnabled && <div className="is-mobile is-centered w-tickets__share-container">
					<SocialShare text="Tickets für das Rheinklang Festival 2019! https://rheinklang-festival.ch/tickets?shared-visit" url="https://rheinklang-festival.ch/tickets?shared-visit" />
				</div>}
			</div>
		)
	}
}

export default Tickets;
