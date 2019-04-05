import * as React from 'react';
import { Icon } from '../../atoms/Icon';
import { SocialShare } from '../../molecules/SocialShare';
import './css/tickets.scss';

export class Tickets extends React.Component<{}> {
	public render() {
		return (
			<div className="w-tickets">
				<div className="columns is-centered w-tickets__embedd-container">
					<div className="column is-full">
						<div className="w-tickets__coming-soon">
							<h3>In kürze Erhältlich ...</h3>
							<Icon select="price-tags" />
						</div>
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
							<Icon select="credit-card" /> Zahlung via Kreditkarte, PostFinance oder Twint möglich.
						</p>
					</div>
				</div>
				<div className="is-mobile is-centered w-tickets__share-container">
					{/* <div className="column is-half is-hidden-desktop">
						<a href={createDeepLink('whatsapp', 'send', {
							text: 'Tickets für das Rheinklang Festival 2019!'
						})}>
							<Icon select="whatsapp" appendClass="w-tickets__share-whatsapp" />
						</a>
					</div> */}
					<SocialShare text="Tickets für das Rheinklang Festival 2019! https://rheinklang-festival.ch?shared-ticketing=true" url="https://rheinklang-festival.ch" />
				</div>
			</div>
		)
	}
}
