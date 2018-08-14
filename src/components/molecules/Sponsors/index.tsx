import * as React from 'react';
import { Sponsor } from '../../atoms/Sponsor';
import { Column, Grid } from '../Grid';
import './css/base.css';

// const x = [
// 	{
// 		description: 'Heimat - Tabakprodukte aus der Schweiz',
// 		image: 'heimat.png',
// 		link: 'https://heimatkult.ch',
// 		name: 'Heimat',
// 	},
// 	{
// 		description: 'OhmVapers - E-Zigaretten',
// 		image: 'ohmvapers.png',
// 		link: 'http://ohm-vapers.ch',
// 		name: 'Ohmvapers',
// 	},
// 	{
// 		description: 'St. Galler Kantonalbank',
// 		image: 'sgkb.jpg',
// 		link: 'https://sgkb.ch',
// 		name: 'St. Galler Kantonalbank',
// 	},
// 	{
// 		description: 'Hirn Automobile',
// 		image: 'hirnautomobile.png',
// 		link: 'http://hirn.ch/',
// 		name: 'Hirn',
// 	},
// 	{
// 		description: 'Rheintaler Bote Zeitschrift',
// 		image: 'rheintalerbote.png',
// 		link: 'http://rheintaler-bote.ch/',
// 		name: 'Rheintaler Bote',
// 	},
// 	{
// 		description: 'Thür Getränke AG',
// 		image: 'thuergetranke.jpg',
// 		link: 'http://thuergetraenke.ch/',
// 		name: 'Thür Getränke',
// 	},
// ];

export const Sponsors = () => (
	<div className="m-sponsors">
		<Grid className="m-sponsors__row">
			<Column className="m-sponsors__primary">
				<Sponsor name="St.Galler Kantonalbank" link="https://sgkb.ch" image="sgkb.jpg" />
			</Column>
			<Column className="m-sponsors__primary">
				<Sponsor name="Heimat - Tabakprodukte" link="https://heimatkult.ch" image="heimat.png" />
			</Column>
			<Column>
				<Sponsor name="Rheintaler Bote" link="http://rheintaler-bote.ch" image="rheintalerbote.png" />
			</Column>
		</Grid>
		<Grid className="m-sponsors__row">
			<Column>
				<Sponsor name="OhmVapers E-Zigaretten" link="http://ohm-vapers.ch" image="ohmvapers.png" />
			</Column>
			<Column>
				<Sponsor name="Hirn" link="http://hirn.ch" image="hirnautomobile.png" />
			</Column>
			<Column>
				<Sponsor name="Basso Optik" link="http://basso-optik.ch" image="bassooptik.png" />
			</Column>
		</Grid>
		<Grid className="m-sponsors__row">
			<Column>
				<Sponsor
					name="Swiss Can Machinery"
					link="https://www.canmachinery.com/home/"
					image="swisscanmachinery.jpg"
				/>
			</Column>
			<Column>
				<Sponsor
					name="Sonnenbräu - Rheintaler Bier"
					link="https://www.sonnenbraeu.ch/"
					image="sonnenbraeu.jpg"
				/>
			</Column>
			<Column className="m-sponsors__small">
				<Sponsor name="Thür Getränke" link="http://thuergetraenke.ch" image="thuergetranke.jpg" />
			</Column>
		</Grid>
	</div>
);
