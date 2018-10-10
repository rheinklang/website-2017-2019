import * as React from 'react';
import { routeStore } from '../../../models';
import { assetStore } from '../../../models/index';
import { StaticAsset } from '../../atoms/StaticAsset';
import { Column, Constraint, Grid } from '../../molecules/Grid';
import { MainNavigation } from '../../molecules/MainNavigation';
import './css/header.css';

export class Header extends React.Component {
	public render() {
		return (
			<div className="o-header">
				<Constraint>
					<Grid>
						<Column>
							<StaticAsset store={assetStore} name="RHEINKLANG_LOGO_TRANSPARENT" />
						</Column>
						<Column>
							<MainNavigation routeStore={routeStore} />
						</Column>
					</Grid>
				</Constraint>
			</div>
		);
	}
}
