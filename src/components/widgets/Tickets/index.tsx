import { observer } from 'mobx-react';
import * as React from 'react';

import { Icon } from '../../atoms/Icon';
import { SocialShare } from '../../molecules/SocialShare';

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
			embeddFrameContents,
			comingSoonText
		} = this.props.ticketingStore;

		return (
			<div className="w-tickets">
				{!isTicketShopOnline && <div className="columns is-centered w-tickets__embedd-container">
					<div className="column is-full">
						{!embeddFrameContents && <div className="w-tickets__coming-soon">
							<h3>{comingSoonText}</h3>
							<Icon select="price-tags" />
						</div>}
						{embeddFrameContents && (
							<div className="w-tickets__embedded" dangerouslySetInnerHTML={{ __html: embeddFrameContents }} />
						)}
					</div>
				</div>}
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
					{/* <div className="column is-half is-hidden-desktop">
						<a href={createDeepLink('whatsapp', 'send', {
							text: 'Tickets für das Rheinklang Festival 2019!'
						})}>
							<Icon select="whatsapp" appendClass="w-tickets__share-whatsapp" />
						</a>
					</div> */}
					<SocialShare text="Tickets für das Rheinklang Festival 2019! https://rheinklang-festival.ch?shared-ticketing=true" url="https://rheinklang-festival.ch" />
				</div>}
			</div>
		)
	}
}

export default Tickets;
