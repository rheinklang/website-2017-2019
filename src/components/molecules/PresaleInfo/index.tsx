import * as React from 'react';
import { Icon } from '../../atoms/Icon';
import { Column, Grid } from '../Grid/index';
import './css/base.css';

export const PresaleInfo = () => (
	<Grid className="m-presale">
		<Column className="m-presale__description">
			<p>
				Du hast bereits entschieden, dass du am 18. August 2018 am Rheinklang Festival abfeiern wirst und dazu
				willst du auch noch vergünstigt auf das Gelände gelangen? Kein Problem!
			</p>
			<p>
				Besuche einfach und bequem eine unserer unten aufgelisteten Vorverkaufststellen in deiner Nähe und
				besorg dir jetzt schon dein Ticket mit Early Bird Rabatt ab!
			</p>
		</Column>
		<Column className="m-presale__stations">
			<ul className="m-presale__stations-list">
				<li>
					<a
						href="https://www.google.ch/maps/place/St.Galler+Kantonalbank+AG/@47.4115146,9.626879,15z/data=!4m2!3m1!1s0x0:0x9d703e9ae0f37287?sa=X&ved=0ahUKEwj1vraPwt3bAhVC66QKHcY_CBIQ_BIItAEwCg"
						rel="noopener noreferrer"
					>
						St.Galler Kantonalbank in Heerbrugg
						<Icon select="link" />
					</a>
				</li>
				<li>
					<a
						href="https://www.google.ch/maps/place/St.Galler+Kantonalbank+AG/@47.3851775,9.6541713,17z/data=!3m1!4b1!4m5!3m4!1s0x479b15b831f3c9c3:0xd144995bd7ce90f8!8m2!3d47.3851739!4d9.65636"
						rel="noopener noreferrer"
					>
						St.Galler Kantonablank in Diepoldsau
						<Icon select="link" />
					</a>
				</li>
				<li>
					<a
						href="https://www.google.ch/maps/place/Ohmvapers+Vape-Shop+E-Zigaretten,+E-Shisha+und+Zubeh%C3%B6r+im+Rheintal+-+Schweiz/@47.4545443,9.6236739,17z/data=!3m1!4b1!4m5!3m4!1s0x479b113f6bc03b9d:0x2a1bf2a1c34d5d9a!8m2!3d47.4545407!4d9.6258626"
						rel="noopener noreferrer"
					>
						OhmVapers in St. Margrethen
						<Icon select="link" />
					</a>
				</li>
				<li>
					<a
						href="https://www.google.ch/maps/place/Hirn+Balgach+AG/@47.4052441,9.5995573,17z/data=!3m1!4b1!4m5!3m4!1s0x479b16f6d1e3c77b:0x25e8afea8011b8ad!8m2!3d47.4052405!4d9.601746"
						rel="noopener noreferrer"
					>
						Hirn Automobile in Balgach
						<Icon select="link" />
					</a>
				</li>
				<li>
					<a
						href="https://www.google.ch/maps/place/Basso+OPTIK+AG/@47.4304088,9.6323746,17z/data=!3m1!4b1!4m5!3m4!1s0x479b16ae55f8b6b1:0x787069681c9ec1df!8m2!3d47.4304052!4d9.6345633"
						rel="noopener noreferrer"
					>
						Basso Optik in Au (SG)
						<Icon select="link" />
					</a>
				</li>
			</ul>
		</Column>
	</Grid>
);
