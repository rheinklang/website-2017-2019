import { observer } from 'mobx-react';
import * as React from 'react';
import Helmet from 'react-helmet';

import './assets/css/index.scss';

// Component imports
import { getLabelFor } from './components/abstract/I18n';

// Store imports
import { i18n } from './store';
import { ConfigurationStore } from './store/ConfigurationStore';
import { TicketingStore } from './store/TicketingStore';

// Views
import TicketsView from './components/views/tickets';

export interface ITicketAppProps {
	configurationStore: ConfigurationStore,
	ticketingStore: TicketingStore
}

@observer
class TicketApp extends React.Component<ITicketAppProps> {
	public componentDidMount() {
		window.scrollTo({ top: 0 });
	}

	public render() {
		this.injectDynamicMetaData();

		return (
			<main className="o-react-ticket-app">
				<TicketsView ticketingStore={this.props.ticketingStore} />
			</main>
		);
	}

	private injectDynamicMetaData() {
		const seoDescription = getLabelFor('seo.description', i18n);
		const seoTitle = getLabelFor('seo.title', i18n);
		const metaRobots = getLabelFor('meta.robots', i18n);
		const ogTitle = getLabelFor('og.title', i18n);
		const ogDescription = getLabelFor('og.description', i18n);
		const ogImage = getLabelFor('og.image', i18n);
		const ogUrl = getLabelFor('og.url', i18n);

		return (
			<Helmet>
				{seoTitle && <title>{seoTitle}</title>}
				{seoDescription && <meta name="description" content={seoDescription} />}
				{metaRobots && <meta name="robots" content="index, follow" />}
				{ogTitle && <meta property="og:title" content={ogTitle} />}
				{ogDescription && <meta property="og:description" content={ogDescription} />}
				{ogUrl && <meta property="og:url" content={ogUrl} />}
				{ogImage && <meta property="og:image" content={ogImage} />}
			</Helmet>
		);
	}
}

export default TicketApp;
