import * as React from 'react';
import { GuideMap } from './Guide.map';
import { AnimatedLogo } from '../../atoms/AnimatedLogo';
import { Grid, Column } from '../../molecules/Grid';
import { Section } from '../../molecules/Section';
import Timetable from '../../molecules/Timetable';

export const Guide = () => {
	return (
		<React.Fragment>
			<AnimatedLogo />
			<Section title="Wilkommen!" description="Hier findest du alle Information rund um das Rheinklang Festival 2019" colorize="red">
				{null}
			</Section>
			<Section title="Karte" description="Das Rheinklang Festival 2019 im Überblick – Lageplan">
				<GuideMap />
			</Section>
			<Grid>
				<Column>
					<Section title="Timetable" description="Alle Artists &amp; Playtimes" colorize="dark-turquise">
						<Timetable />
					</Section>
				</Column>
			</Grid>
		</React.Fragment>
	)
}
