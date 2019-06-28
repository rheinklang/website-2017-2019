import * as React from 'react';
import { GuideMap } from './Guide.map';
import { AnimatedLogo } from '../../atoms/AnimatedLogo';
import { Section } from '../../molecules/Section';
import Timetable from '../../molecules/Timetable';
import { Footer } from '../../atoms/Footer';
import { FacebookWidget } from '../../widgets/Facebook';
import { SocialMediaLinks } from '../../molecules/SocialMediaLinks';

export const Guide = () => {
	return (
		<React.Fragment>
			<AnimatedLogo />
			<Section id="home" title="Wilkommen!" description="Hier findest du alle Information rund um das Rheinklang Festival 2019" colorize="red">
				{null}
			</Section>
			<Section id="map" title="Karte" description="Das Rheinklang Festival 2019 im Überblick – Lageplan">
				<GuideMap />
			</Section>
			<Section id="timetable" title="Timetable" description="Alle Artists &amp; Playtimes" colorize="dark-turquise">
				<Timetable />
			</Section>
			<Section
				id="social"
				title="Social Media"
				description="Wir befinden uns auch in den sozialen Medien. Klicke auf das entsprechen Symbol um auf die Seite zu gelangen."
			>
				<SocialMediaLinks />
			</Section>
			<br />
			<FacebookWidget />
			<Footer />
		</React.Fragment>
	)
}
