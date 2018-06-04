import * as React from 'react';
import { Avatar } from '../../atoms/Avatar';
import { Column, Grid } from '../../molecules/Grid';
import './css/base.css';

export const AvatarTree = () => {
	return (
		<div className="m-avatar-tree">
			<Grid>
				<Column spacing="sm">
					<Avatar
						modifier="primary"
						name="Ivan Kenel"
						image="janbiasi.jpg"
						role="Vereinspräsident, Finanzen"
						contact="office@rheinklang-festival.ch"
					/>
				</Column>
				<Column spacing="sm">
					<Avatar
						modifier="primary"
						name="Georgios Stella"
						image="janbiasi.jpg"
						role="Vizepräsident, Aufbau &amp; Management"
						contact="management@rheinklang-festival.ch"
					/>
				</Column>
			</Grid>
			<Grid>
				<Column spacing="sm">
					<Avatar
						name="Jan Biasi"
						image="janbiasi.jpg"
						role="CI/CD, Bookings &amp; Audio"
						contact="management@rheinklang-festival.ch"
					/>
				</Column>
				<Column spacing="sm">
					<Avatar
						name="Louis Bell"
						image="janbiasi.jpg"
						role="Promotions und Verkauf"
						contact="pr@rheinklang-festival.ch"
					/>
				</Column>
				<Column spacing="sm">
					<Avatar
						name="Nico Köppel"
						image="janbiasi.jpg"
						role="Aktuar, rechtliches"
						contact="office@rheinklang-festival.ch"
					/>
				</Column>
			</Grid>
		</div>
	);
};
