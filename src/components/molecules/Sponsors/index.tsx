import { observer } from 'mobx-react';
import * as React from 'react';

import { Sponsor } from '../../atoms/Sponsor';
import { Column, Grid } from '../Grid';

import { PartnerStore } from '../../../store/PartnerStore';

import './css/base.scss';

interface ISponsorsProps {
	parnterStore: PartnerStore
}

@observer
export class Sponsors extends React.Component<ISponsorsProps> {
	public render() {
		return (
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
					<Column className="m-sponsors__small">
						<Sponsor name="Sonnebräu" link="https://sonnenbraeu.ch/" image="sonnenbrau.png" />
					</Column>
					<Column className="m-sponsors__small">
						<Sponsor name="Kühnis Eventtechnik" link="http://http://eventtechnik-kuehnis.ch/" image="kuehnis-eventtechnik.png" />
					</Column>
				</Grid>
			</div>
		)
	}
}
