import { observer } from 'mobx-react';
import * as React from 'react';
import Helmet from 'react-helmet';

import './assets/css/index.scss';

import { Loader } from './components/atoms/Loader/index';

// Component imports
import { getLabelFor } from './components/abstract/I18n';
const AnimatedLogo = React.lazy(() =>
	import(/* webpackChunkName: 'animatedLogo'*/ './components/atoms/AnimatedLogo')
);
const Countdown = React.lazy(() =>
	import(/* webpackChunkName: 'countdown'*/ './components/atoms/Countdown')
);
// import { Footer } from './components/atoms/Footer';
const Footer = React.lazy(() =>
	import(/* webpackChunkName: 'footer'*/ './components/atoms/Footer')
);
import { TourDates } from './components/atoms/TourDates'; // can't load async due widget embedd
const Jumbotron = React.lazy(() =>
	import(/* webpackChunkName: 'jumbotron'*/ './components/molecules/Jumbotron')
)
const Section = React.lazy(() =>
	import(/* webpackChunkName: 'section'*/ './components/molecules/Section')
);
const SocialMediaLinks = React.lazy(() =>
	import(/* webpackChunkName: 'socialMediaLinks'*/ './components/molecules/SocialMediaLinks')
);
const Sponsors = React.lazy(() =>
	import(/* webpackChunkName: 'sponsors'*/ './components/molecules/Sponsors')
);
const Articles = React.lazy(() =>
	import(/* webpackChunkName: 'articles'*/ './components/organisms/Articles')
);
import { Cookies } from './components/atoms/Cookies';
import { FacebookWidget } from './components/widgets/Facebook';
const Tickets = React.lazy(() =>
	import(/* webpackChunkName: 'tickets'*/ './components/molecules/Tickets')
);
// import { GoogleAnalytics } from './partials/GoogleAnalytics';
// import { GoogleTagManager } from './partials/GoogleTagManager';

// Store imports
import { articles, configuration, i18n, partner, ticketing } from './store';
import { ConfigurationStore } from './store/ConfigurationStore';

// analytics stuff
import { initialize } from './analytics';


export interface IAppProps {
	configurationStore: ConfigurationStore
}

export interface IAppState {
	display: boolean;
}
@observer
class App extends React.Component<IAppProps, IAppState> {
	public state = {
		display: true,
	};

	public componentWillMount() {
		initialize();
	}

	public render() {
		if(this.props.configurationStore) {
			// tslint:disable-next-line:no-console
			// console.log(this.props.configurationStore.display || 'none')
		}

		return (
			<React.Suspense fallback="">
				<Cookies />
				<Jumbotron />
				<Section colorize="dark-turquise" title={ticketing.isTicketShopOnline ? undefined : "Tickets"}>
					<Tickets
						ticketingStore={ticketing}
						additionalButtons={[
							{ text: "Zum Festival 2019", link: "/festival-2019" }
						]}
					/>
				</Section>
				{articles.loaded && <Articles articlesStore={articles} />}
				{!articles.loaded && <Loader />}
				<Section id="tour-dates" colorize="red" title="Weitere Tourdaten">
					<TourDates />
				</Section>
				{/* <Section id="about-us" colorize="green" title="Über uns">
					<Grid>
						<Column spacing="md">
							<p>
								Wir sind sehr stolz darauf, uns als DAS Festival für elektronische Musik im Rheintal
								bezeichnen zu dürfen. Unser Ziel ist es, die immer populärer werdende elektronische
								Musik mit einer frischen Brise ins sonnige Rheintal zu bringen und die deepen Vibes des
								House, vermischt mit technoiden Klängen dem Rhein entlang mit dem Winde bis weit in die
								Ferne zu tragen.{' '}
							</p>
						</Column>
						<Column spacing="md">
							<p>
								Sei auch dabei und feier durch den hell erleuchteten Tag bis weit in die dunkle Nacht
								hinein und tanze zusammen mit den tiefen Bässen der elektronischen Musik um das Rheintal
								beben zu lassen, bis eine riesige Welle aus Euphorie aus dem Rhein emporsteigt und dich
								und die Festivalbesucher mit Endorphinen überschütten wird. Wir freuen uns, auch Dir am
								Rheinklang-Festival auf unserem Gelände "über den Weg zu tanzen"!
							</p>
						</Column>
					</Grid>
					<AvatarTree />
				</Section> */}
				{this.shouldShowSponsors && <Section id="sponsors" colorize="white" title="Unsere Unterstützung">
					<Sponsors parnterStore={partner} />
				</Section>}
				<Section id="countdown" colorize="green" leaveContentSkewed={true}>
					<div className="columns is-mobile is-centered">
						{configuration.loaded && <Countdown configurationStore={configuration} />}
						{!configuration.loaded && <Loader />}
					</div>
				</Section>
				<Section id="logo">
					<AnimatedLogo />
				</Section>
				{/* <Separator modifier="dark" /> */}
				<Section
					id="social"
					title="Social Media"
					description="Wir befinden uns auch in den sozialen Medien. Klicke auf das entsprechen Symbol um auf die Seite zu
				gelangen."
				>
					<SocialMediaLinks />
				</Section>
				<br/>
				<FacebookWidget />
				<Footer />
				{this.injectDynamicMetaData()}
				{/* <GoogleAnalytics />
				<GoogleTagManager /> */}
			</React.Suspense>
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

	private get shouldShowSponsors(): boolean {
		return this.props.configurationStore.display.sponsors;
	}
}

export default App;
