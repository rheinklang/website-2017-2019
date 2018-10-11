import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/index.css';
import { LoadingState } from './components/abstract/LoadingState';
import { DefaultLayout } from './layouts/DefaultLayout';
import { assetStore, configurationStore, partnerStore, routeStore } from './models';
import { Platform } from './Platform';
import { PartnerView } from './views/PartnerView';

const createNamedPage = (name: string) => () => (
	<div className="h-constraint">
		<h1>{name}</h1>
	</div>
);

export const Router = () => (
	<Platform configuration={configurationStore}>
		<BrowserRouter>
			<LoadingState routeStore={routeStore} assetStore={assetStore} configurationStore={configurationStore}>
				<DefaultLayout>
					<Switch>
						<Route exact={true} path={'/'} component={createNamedPage('Home (/)')} />
						<Route
							exact={true}
							path={'/impressionen'}
							component={createNamedPage('Impressionen (/impressionen)')}
						/>
						<Route
							exact={true}
							path={'/impressionen/:year'}
							component={createNamedPage('Home (/impressionen/:year)')}
						/>
						<Route exact={true} path={'/ueber-uns'} component={createNamedPage('About Us (/ueber-uns)')} />
						<Route
							exact={true}
							path={'/ueber-uns/:personId'}
							component={createNamedPage('About One (/ueber-uns/:personId)')}
						/>
						<Route
							exact={true}
							path={'/ueber-uns/partner'}
							render={() => <PartnerView store={partnerStore} />}
						/>
						<Route
							path={'/ueber-uns/partner/:partnerId'}
							component={createNamedPage('About One (/ueber-uns/partner/:personId)')}
						/>
						<Route exact={true} path={'/kontakt'} component={createNamedPage('Kontakt (/kontakt)')} />
						<Route component={createNamedPage('Error Page')} />
						<DevTools />
					</Switch>
				</DefaultLayout>
			</LoadingState>
		</BrowserRouter>
	</Platform>
);
