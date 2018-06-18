import * as React from 'react';
import './assets/css/index.css';
import { Separator } from './components/abstract/Separator';
import { AnimatedLogo } from './components/atoms/AnimatedLogo';
import { Countdown } from './components/atoms/Countdown';
import { Footer } from './components/atoms/Footer';
import { TourDates } from './components/atoms/TourDates';
// import { Loader } from './components/atoms/Loader';
// import { AvatarTree } from './components/molecules/AvatarTree';
import { Column, Grid } from './components/molecules/Grid';
import { PresaleInfo } from './components/molecules/PresaleInfo/index';
import { Section } from './components/molecules/Section';
import { SocialMediaLinks } from './components/molecules/SocialMediaLinks';
import { Sponsors } from './components/molecules/Sponsors';

export interface IAppState {
	display: boolean;
}

class App extends React.Component<any, IAppState> {
	public state = {
		display: true,
	};

	public render() {
		return (
			<main className="o-react-app">
				<Section id="logo">
					<AnimatedLogo />
				</Section>
				<Section id="tour-dates" colorize="red" title="Tourdaten">
					<TourDates />
				</Section>
				<Section id="about-us" colorize="green" title="Über uns">
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
					{/* <AvatarTree /> */}
				</Section>
				<Section id="countdown" colorize="dark-turquise" title="Es geht schon bald los!">
					<PresaleInfo />
					<Grid>
						<Column>
							<Countdown />
						</Column>
					</Grid>
				</Section>
				<Section id="sponsors" colorize="white" title="Unsere Unterstützung">
					<Sponsors />
				</Section>
				<Separator modifier="dark" />
				<Section
					id="social"
					title="Social Media"
					description="Wir befinden uns auch in den sozialen Medien. Klicke auf das entsprechen Symbol um auf die Seite zu
				gelangen."
				>
					<SocialMediaLinks />
				</Section>
				<Footer />
			</main>
		);
	}
}

export default App;
