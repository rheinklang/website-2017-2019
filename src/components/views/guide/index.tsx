import * as React from 'react';

import { initialize } from '../../../analytics';
import { AnimatedLogo } from '../../atoms/AnimatedLogo';
import { FacebookWidget } from '../../widgets/Facebook';
const Section = React.lazy(() =>
	import(/* webpackChunkName: 'section' */ '../../molecules/Section')
);
const Footer = React.lazy(() =>
	import(/* webpackChunkName: 'footer' */ '../../atoms/Footer')
);
const SocialMediaLinks = React.lazy(() =>
	import(/* webpackChunkName: 'socialMediaLinks' */ '../../molecules/SocialMediaLinks')
);
const Timetable = React.lazy(() =>
	import(/* webpackChunkName: 'timetable' */ '../../molecules/Timetable')
);
const Tickets = React.lazy(() =>
	import(/* webpackChunkName: 'tickets' */ '../../molecules/Tickets')
);
const GuideMap = React.lazy(() =>
	import(/* webpackChunkName: 'guideMapFragment' */ './Map')
);


import { ConfigurationStore } from '../../../store/ConfigurationStore';
import { TicketingStore } from '../../../store/TicketingStore';
import { TimetableStore } from '../../../store/TimetableStore';

interface IGuideProps {
	timetableStore: TimetableStore,
	configurationStore: ConfigurationStore,
	ticketingStore: TicketingStore
}

export const Guide: React.FC<IGuideProps> = ({ timetableStore, ticketingStore }) => {
	initialize(); // init GA

	return (
		<React.Suspense fallback="">
			<AnimatedLogo modifier="offset-top" />
			<Section noSpace={true} id="home" title="Wilkommen!" description="Hier findest du alle Information rund um das Rheinklang Festival 2019" colorize="red">
				<Tickets hideSocialShare={true} colorScheme="light" ticketingStore={ticketingStore} />
			</Section>
			<Section id="map" title="Karte" description="Das Rheinklang Festival 2019 im Überblick – Lageplan">
				<GuideMap />
			</Section>
			<Section id="timetable" title="Timetable" description="Alle Artists &amp; Playtimes" colorize="dark-turquise">
				<Timetable timetableStore={timetableStore} />
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
		</React.Suspense>
	)
}
