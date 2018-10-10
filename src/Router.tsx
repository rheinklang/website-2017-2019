import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/index.css';
import { LoadingState } from './components/abstract/LoadingState';
import { DefaultLayout } from './layouts/DefaultLayout';
import { partnerStore, routeStore } from './models';
import { RouteReactID } from './models/RouteStore';
import { PartnerView } from './views/PartnerView';

const createNamedPage = (name: string) => () => <h1>{name}</h1>;

export const Router = () => (
	<BrowserRouter>
		<LoadingState routeStore={routeStore}>
			<DefaultLayout>
				<Switch>
					<Route
						exact={true}
						path={routeStore.getRouteByID(RouteReactID.HOME).slug}
						component={createNamedPage('Home (/)')}
					/>
					<Route
						exact={true}
						path={routeStore.getRouteByID(RouteReactID.IMPRESSIONS).slug}
						component={createNamedPage('Impressionen (/impressionen)')}
					/>
					<Route
						exact={true}
						path={routeStore.getRouteByID(RouteReactID.IMPRESSION_BY_ID).slug}
						component={createNamedPage('Home (/impressionen/:year)')}
					/>
					<Route
						exact={true}
						path={routeStore.getRouteByID(RouteReactID.ABOUT_US).slug}
						component={createNamedPage('About Us (/ueber-uns)')}
					/>
					<Route
						exact={true}
						path={routeStore.getRouteByID(RouteReactID.CREW_BY_ID).slug}
						component={createNamedPage('About One (/ueber-uns/:personId)')}
					/>
					<Route
						exact={true}
						path={'/ueber-uns/partner'}
						render={() => <PartnerView store={partnerStore} />}
					/>
					<Route
						path={routeStore.getRouteByID(RouteReactID.PARTNER_BY_ID).slug}
						component={createNamedPage('About One (/ueber-uns/partner/:personId)')}
					/>
					<Route
						exact={true}
						path={routeStore.getRouteByID(RouteReactID.CONTACT).slug}
						component={createNamedPage('Kontakt (/kontakt)')}
					/>
					<Route component={createNamedPage('Error Page')} />
					<DevTools />
				</Switch>
			</DefaultLayout>
		</LoadingState>
	</BrowserRouter>
);
