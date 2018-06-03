import * as React from 'react';
import './assets/css/index.css';
import { AnimatedLogo } from './components/atoms/AnimatedLogo';
import { TourDates } from './components/atoms/TourDates';
// import { Loader } from './components/atoms/Loader';
import { Section } from './components/molecules/Section';
import { SocialMediaLinks } from './components/molecules/SocialMediaLinks';

export interface IAppState {
	display: boolean;
}

class App extends React.Component<any, IAppState> {
	public state = {
		display: true,
	};

	// public componentDidMount() {
	// 	const tid = setTimeout(() => {
	// 		this.setState({ display: true });
	// 		clearTimeout(tid);
	// 	}, 1000);
	// }

	public render() {
		// const { display } = this.state;

		// if (!display) {
		// 	return (
		// 		<main className="o-react-app">
		// 			<Loader />
		// 		</main>
		// 	);
		// }

		return (
			<main className="o-react-app">
				<Section id="logo">
					<AnimatedLogo />
				</Section>
				<Section id="tour-dates" title="Tourdaten">
					<TourDates />
				</Section>
				<Section
					id="social"
					title="Social Media"
					description="Wir befinden uns auch in den sozialen Medien. Klicke auf das entsprechen Symbol um auf die Seite zu
				gelangen."
				>
					<SocialMediaLinks />
				</Section>
			</main>
		);
	}
}

export default App;
