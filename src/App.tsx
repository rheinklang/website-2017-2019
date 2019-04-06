import { observer } from 'mobx-react';
import * as React from 'react';
import * as ReactGA from 'react-ga';

import './assets/css/index.scss';

// Component imports
// import { Separator } from './components/abstract/Separator';
// import { AnimatedLogo } from './components/atoms/AnimatedLogo';
// import { Countdown } from './components/atoms/Countdown';
import { Footer } from './components/atoms/Footer';
import { TourDates } from './components/atoms/TourDates';
// import { Article } from './components/molecules/Article';
// import { TourDates } from './components/atoms/TourDates';
// import { Loader } from './components/atoms/Loader';
// import { AvatarTree } from './components/molecules/AvatarTree';
// import { Column, Grid } from './components/molecules/Grid';
import { Jumbotron } from './components/molecules/Jumbotron';
import { Section } from './components/molecules/Section';
// import { PresaleInfo } from './components/molecules/PresaleInfo/index';
// import { Section } from './components/molecules/Section';
// import { SocialMediaLinks } from './components/molecules/SocialMediaLinks';
import { SocialMediaLinks } from './components/molecules/SocialMediaLinks';
import { Sponsors } from './components/molecules/Sponsors';
import { Articles } from './components/organisms/Articles';
import { FacebookWidget } from './components/widgets/Facebook';
import { Tickets } from './components/widgets/Tickets';
import { GoogleAnalytics } from './partials/GoogleAnalytics';
import { GoogleTagManager } from './partials/GoogleTagManager';

// Store imports
import { articles, ticketing } from './store';
import { ConfigurationStore } from './store/ConfigurationStore';
import { PartnerStore } from './store/PartnerStore';

const IS_PROD = process.env.NODE_ENV === 'production';

export interface IAppProps {
	configurationStore: ConfigurationStore
}

export interface IAppState {
	display: boolean;
}

ReactGA.initialize('UA-57645783-4', {
	debug: !IS_PROD,
	gaOptions: { cookieDomain: 'none' }
});
ReactGA.pageview(window.location.pathname + window.location.search);

if(!IS_PROD) {
	// tslint:disable-next-line:variable-name
	const _gaq: any[] = (window as any)._gaq || [];
	_gaq.push(["_setAccount", "UA-1234-1"]);
	_gaq.push(["_setDomainName", "none"]);
	_gaq.push(["_trackPageview"]);
}

@observer
class App extends React.Component<IAppProps, IAppState> {
	public state = {
		display: true,
	};

	public render() {
		if(this.props.configurationStore) {
			// tslint:disable-next-line:no-console
			console.log(this.props.configurationStore.display || 'none')
		}
		return (
			<main className="o-react-app">
				<Jumbotron />
				<Section colorize="dark-turquise" title="Tickets">
					<Tickets ticketingStore={ticketing} />
				</Section>
				<Articles articlesStore={articles} />
				{/* <Section id="logo">
					<AnimatedLogo />
				</Section> */}
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
				{/* <Section id="countdown" colorize="dark-turquise" title="Es geht schon bald los!">
					<PresaleInfo />
					<Grid>
						<Column>
							<Countdown />
						</Column>
					</Grid>
				</Section> */}
				{this.shouldShowSponsors && <Section id="sponsors" colorize="white" title="Unsere Unterstützung">
					<Sponsors parnterStore={new PartnerStore()} />
				</Section>}
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
				<GoogleAnalytics />
				<GoogleTagManager />
			</main>
		);
	}

	private get shouldShowSponsors(): boolean {
		return this.props.configurationStore.display.sponsors;
	}
}

export default App;
