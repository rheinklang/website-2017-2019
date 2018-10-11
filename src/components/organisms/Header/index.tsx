import * as React from 'react';
import { routeStore } from '../../../models';
import { assetStore } from '../../../models/index';
import { StaticAsset } from '../../atoms/StaticAsset';
import { Column, Constraint, Grid } from '../../molecules/Grid';
import { MainNavigation } from '../../molecules/MainNavigation';
import { OffCanvas } from '../../molecules/OffCanvas';
import './css/header.css';

export class Header extends React.Component {
	public render() {
		return (
			<div className="o-header">
				<Constraint>
					<Grid preserveMobile={true}>
						<Column className="o-header__brand">
							<StaticAsset store={assetStore} name="RHEINKLANG_LOGO_TRANSPARENT" />
						</Column>
						<Column className="h-hide-on-mobile">
							<MainNavigation routeStore={routeStore} />
						</Column>
						<Column className="h-hide-on-desktop">
							<OffCanvas />
						</Column>
					</Grid>
				</Constraint>
			</div>
		);
	}
}
