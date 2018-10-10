import * as React from 'react';
import { routeStore } from '../../../models';
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
							<img className="o-header__logo" src="http://placehold.it/50x50" alt="logo" />
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
